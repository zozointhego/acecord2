import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="glass rounded-2xl p-8 text-center">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-2">
            Verification Link Invalid
          </h1>
          
          <p className="text-secondary-light mb-6">
            The verification link is invalid or has expired. Please request a new verification email.
          </p>

          <Link
            href="/"
            className="inline-block btn-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
