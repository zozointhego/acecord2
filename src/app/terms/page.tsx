"use client";

import { InfoLayout } from "@/components/InfoLayout";

export default function TermsPage() {
  return (
    <InfoLayout currentPage="terms" title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Platform Rules & Guidelines
          </h2>
          <div className="space-y-4">
            <p>
              Acecord is a marketplace connecting Discord server owners with verified freelance experts. 
              By using our platform, you agree to follow these terms and maintain a professional, 
              safe environment for all users.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">Prohibited Activities</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>No scams, fraudulent activities, or misleading services</li>
                <li>No NSFW content, adult services, or inappropriate material</li>
                <li>No illegal services or activities that violate Discord's Terms of Service</li>
                <li>No harassment, hate speech, or discriminatory behavior</li>
                <li>No spam, excessive self-promotion, or unsolicited messages</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Seller Responsibilities
          </h2>
          <div className="space-y-4">
            <p>
              As a seller on Acecord, you commit to delivering quality services within agreed timeframes 
              and maintaining professional standards throughout all interactions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Delivery Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Deliver services within agreed deadlines</li>
                  <li>• Provide regular progress updates</li>
                  <li>• Meet all specified requirements</li>
                  <li>• Offer reasonable revisions</li>
                </ul>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Communication Standards</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Respond to messages within 24 hours</li>
                  <li>• Maintain professional communication</li>
                  <li>• Clarify requirements before starting</li>
                  <li>• Report any issues promptly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Buyer Guidelines
          </h2>
          <div className="space-y-4">
            <p>
              Buyers must use our secure escrow system for all transactions and provide clear, 
              reasonable requirements for their projects.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">Payment & Security</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>All payments must go through Acecord's escrow system</li>
                <li>No off-platform deals or direct payments allowed</li>
                <li>Funds are held securely until project completion</li>
                <li>Provide clear project requirements and expectations</li>
                <li>Review and approve deliverables within 7 days</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Platform Role & Limitations
          </h2>
          <div className="space-y-4">
            <p>
              Acecord acts as a marketplace platform connecting buyers and sellers. We are not an 
              employer, contractor, or direct service provider.
            </p>
            <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <h3 className="font-bold text-white mb-3">Important Notice</h3>
              <p className="text-sm">
                Acecord facilitates connections between users but does not guarantee the quality, 
                safety, or legality of services offered. Users are responsible for their own 
                interactions and agreements within our platform guidelines.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Dispute Resolution & Enforcement
          </h2>
          <div className="space-y-4">
            <p>
              When disputes arise, we provide a structured resolution process to ensure fair 
              outcomes for all parties involved.
            </p>
            <div className="space-y-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Escalation Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-white">Direct Resolution</p>
                      <p className="text-sm">Buyers and sellers attempt to resolve issues directly through platform messaging</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-white">Support Mediation</p>
                      <p className="text-sm">If direct resolution fails, Acecord support mediates the dispute</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-white">Final Decision</p>
                      <p className="text-sm">Acecord makes a final binding decision based on evidence and platform rules</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#2d1b1b] rounded-xl p-6 border border-red-500/20">
                <h3 className="font-bold text-red-400 mb-3">Account Suspension & Termination</h3>
                <p className="text-sm">
                  Acecord reserves the right to suspend or terminate accounts that violate these terms. 
                  Serious violations may result in immediate permanent bans and forfeiture of funds. 
                  We maintain zero tolerance for scams, harassment, or illegal activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Updates & Contact
          </h2>
          <div className="space-y-4">
            <p>
              These terms may be updated periodically. Continued use of Acecord constitutes 
              acceptance of any changes. For questions about these terms, contact our support team.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <p className="text-sm">
                <strong className="text-white">Last updated:</strong> January 2025<br/>
                <strong className="text-white">Contact:</strong> legal@acecord.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </InfoLayout>
  );
}