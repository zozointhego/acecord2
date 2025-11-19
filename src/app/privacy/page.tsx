"use client";

import { InfoLayout } from "@/components/InfoLayout";

export default function PrivacyPage() {
  return (
    <InfoLayout currentPage="privacy" title="Privacy Policy">
      <div className="space-y-8">
        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Information We Collect
          </h2>
          <div className="space-y-4">
            <p>
              Acecord collects information necessary to provide our marketplace
              services and ensure a safe, secure environment for all users.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">
                  Account Information
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Email address and username</li>
                  <li>• Profile information and bio</li>
                  <li>• Discord account details (via OAuth)</li>
                  <li>• Verification documents (for sellers)</li>
                </ul>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Transaction Data</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Payment information and history</li>
                  <li>• Order details and communications</li>
                  <li>• Reviews and ratings</li>
                  <li>• Dispute records and resolutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            How We Use Your Data
          </h2>
          <div className="space-y-4">
            <p>
              Your information helps us operate the platform, process
              transactions, and maintain a secure marketplace environment.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">Primary Uses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Platform Operations
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Account creation and management</li>
                    <li>• Service matching and recommendations</li>
                    <li>• Communication facilitation</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Security & Trust
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fraud prevention and detection</li>
                    <li>• Identity verification</li>
                    <li>• Dispute resolution</li>
                    <li>• Platform moderation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Discord Integration & OAuth
          </h2>
          <div className="space-y-4">
            <p>
              When you connect your Discord account, we access limited
              information to verify your identity and enhance your experience on
              our platform.
            </p>
            <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <h3 className="font-bold text-white mb-3">Discord Data Access</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4383ff] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-white">
                      Basic Profile Information
                    </p>
                    <p className="text-sm">
                      Username, avatar, and account creation date
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4383ff] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-white">Server Memberships</p>
                    <p className="text-sm">
                      Used for verification and service matching (with your
                      permission)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4383ff] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-white">Account Status</p>
                    <p className="text-sm">
                      Verification status and account standing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Data Sharing & Third Parties
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1b2d1b] rounded-xl p-6 border border-green-500/20">
              <h3 className="font-bold text-green-400 mb-3">Our Commitment</h3>
              <p className="text-sm">
                <strong>
                  Acecord does not sell your personal data to third parties.
                </strong>{" "}
                We only share information when necessary for platform
                operations, legal compliance, or with your explicit consent.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">
                  Limited Sharing Scenarios
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    •{" "}
                    <strong className="text-white">Payment Processors:</strong>{" "}
                    Secure transaction processing
                  </li>
                  <li>
                    • <strong className="text-white">Service Providers:</strong>{" "}
                    Essential platform infrastructure
                  </li>
                  <li>
                    •{" "}
                    <strong className="text-white">Legal Requirements:</strong>{" "}
                    When required by law or court order
                  </li>
                  <li>
                    • <strong className="text-white">Safety & Security:</strong>{" "}
                    Preventing fraud or protecting users
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Security & Protection
          </h2>
          <div className="space-y-4">
            <p>
              We implement industry-standard security measures to protect your
              personal information and maintain the integrity of our platform.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#121a30] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#4383ff] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">Encryption</h3>
                <p className="text-sm">
                  End-to-end encryption for sensitive data
                </p>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#4383ff] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="16" r="1" fill="white" />
                    <path
                      d="M7 11V7A5 5 0 0 1 17 7V11"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">Secure Storage</h3>
                <p className="text-sm">
                  Protected servers with access controls
                </p>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#4383ff] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">Regular Audits</h3>
                <p className="text-sm">Continuous security monitoring</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Your Rights & Control
          </h2>
          <div className="space-y-4">
            <p>
              You have full control over your personal data and can manage your
              privacy preferences at any time through your account settings,
              including the ability to update or correct information, delete
              your account completely, or opt out of communications.
            </p>

            <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <h3 className="font-bold text-white mb-3">
                Data Deletion Process
              </h3>
              <p className="text-sm mb-3">
                To request complete data deletion, contact our support team.
                We'll process your request within 30 days, though some
                information may be retained for legal or security purposes.
              </p>
              <p className="text-sm">
                <strong className="text-white">Contact:</strong>{" "}
                privacy@acecord.com
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Updates & Contact
          </h2>
          <div className="space-y-4">
            <p>
              We may update this privacy policy to reflect changes in our
              practices or legal requirements. We'll notify users of significant
              changes via email or platform notifications.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <p className="text-sm">
                <strong className="text-white">Last updated:</strong> January
                2025
                <br />
                <strong className="text-white">Privacy Contact:</strong>{" "}
                privacy@acecord.com
                <br />
                <strong className="text-white">
                  Data Protection Officer:
                </strong>{" "}
                dpo@acecord.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </InfoLayout>
  );
}
