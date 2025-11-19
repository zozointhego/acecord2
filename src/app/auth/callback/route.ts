import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/profile/setup'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Get the proper host from headers or request URL
      const forwardedHost = request.headers.get('x-forwarded-host')
      const forwardedProto = request.headers.get('x-forwarded-proto')
      
      let redirectUrl: string
      
      if (forwardedHost) {
        // Use forwarded host (for Tempo canvas URLs and proxies)
        const protocol = forwardedProto || 'https'
        redirectUrl = `${protocol}://${forwardedHost}${next}`
      } else if (requestUrl.origin && !requestUrl.origin.includes('0.0.0.0')) {
        // Use request origin if it's valid
        redirectUrl = `${requestUrl.origin}${next}`
      } else {
        // Fallback to localhost for development
        redirectUrl = `http://localhost:3000${next}`
      }
      
      return NextResponse.redirect(redirectUrl)
    }
  }

  // Error case - use same logic for error redirect
  const forwardedHost = request.headers.get('x-forwarded-host')
  const forwardedProto = request.headers.get('x-forwarded-proto')
  
  let errorRedirectUrl: string
  if (forwardedHost) {
    const protocol = forwardedProto || 'https'
    errorRedirectUrl = `${protocol}://${forwardedHost}/auth/auth-code-error`
  } else if (requestUrl.origin && !requestUrl.origin.includes('0.0.0.0')) {
    errorRedirectUrl = `${requestUrl.origin}/auth/auth-code-error`
  } else {
    errorRedirectUrl = 'http://localhost:3000/auth/auth-code-error'
  }
  
  return NextResponse.redirect(errorRedirectUrl)
}