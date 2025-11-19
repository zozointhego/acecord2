'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ProfileSetupFormPage() {
  const [username, setUsername] = useState('')
  const [discordTag, setDiscordTag] = useState('')
  const [role, setRole] = useState<'freelancer' | 'client'>('freelancer')
  const [loading, setLoading] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/')
      } else {
        setUserEmail(user.email || '')
      }
    }
    checkAuth()
  }, [router, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/')
        return
      }

      // Here you would typically save the profile to your database
      // For now, we'll just redirect based on role
      console.log('Profile data:', { username, discordTag, role, userId: user.id })
      
      // Redirect to appropriate dashboard
      if (role === 'freelancer') {
        router.push('/dashboard/freelancer')
      } else {
        router.push('/dashboard/client')
      }
    } catch (error) {
      console.error('Profile setup error:', error)
      alert('Failed to save profile. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Complete Your Profile
            </h1>
            <p className="text-secondary-light">
              {userEmail}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-secondary-dark border border-white/10 rounded-xl text-white placeholder-secondary-light focus:outline-none focus:border-[#4383ff] transition-colors"
                placeholder="Enter your username"
              />
            </div>

            {/* Discord Tag */}
            <div>
              <label htmlFor="discordTag" className="block text-sm font-medium text-white mb-2">
                Discord Tag
              </label>
              <input
                id="discordTag"
                type="text"
                required
                value={discordTag}
                onChange={(e) => setDiscordTag(e.target.value)}
                className="w-full px-4 py-3 bg-secondary-dark border border-white/10 rounded-xl text-white placeholder-secondary-light focus:outline-none focus:border-[#4383ff] transition-colors"
                placeholder="username#1234"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                I want to...
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('freelancer')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    role === 'freelancer'
                      ? 'border-[#4383ff] bg-[#4383ff]/10'
                      : 'border-white/10 bg-secondary-dark hover:border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">💼</div>
                    <div className="font-semibold text-white">Find Work</div>
                    <div className="text-xs text-secondary-light mt-1">Freelancer</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    role === 'client'
                      ? 'border-[#4383ff] bg-[#4383ff]/10'
                      : 'border-white/10 bg-secondary-dark hover:border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold text-white">Hire Talent</div>
                    <div className="text-xs text-secondary-light mt-1">Client</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Setting up...
                </span>
              ) : (
                'Complete Setup'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
