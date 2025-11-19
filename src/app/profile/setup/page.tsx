'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfileSetupPage() {
  const [status, setStatus] = useState<'verifying' | 'verified' | 'error'>('verifying')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is authenticated
        const { data: { user }, error } = await supabase.auth.getUser()
        
        if (error || !user) {
          setStatus('error')
          setTimeout(() => {
            router.push('/')
          }, 3000)
          return
        }

        // User is verified, redirect to form
        setStatus('verified')
        setTimeout(() => {
          router.push('/profile/setup/form')
        }, 1500)
      } catch (error) {
        console.error('Auth check error:', error)
        setStatus('error')
        setTimeout(() => {
          router.push('/')
        }, 3000)
      }
    }

    checkAuth()
  }, [router, supabase])

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="glass rounded-2xl p-8 text-center">
          {status === 'verifying' && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 border-4 border-[#4383ff] border-t-transparent rounded-full animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Verifying your account...
              </h1>
              <p className="text-secondary-light">
                Please wait while we confirm your email address
              </p>
            </>
          )}

          {status === 'verified' && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#23b260] rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-success mb-2">
                Email Verified!
              </h1>
              <p className="text-secondary-light">
                Redirecting you to complete your profile...
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-destructive mb-2">
                Verification Failed
              </h1>
              <p className="text-secondary-light">
                Unable to verify your account. Redirecting to home...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
