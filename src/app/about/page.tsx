"use client";

import { InfoLayout } from "@/components/InfoLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  return (
    <InfoLayout currentPage="about" title="About & FAQ">
      <div className="space-y-8">
        {/* About Section */}
        <section>
          <h2 className="font-bold text-xl text-white mb-6">
            Discord Freelancing
          </h2>
          <div className="space-y-6">
            <div className="bg-[#121a30] rounded-xl p-8">
              <p className="mb-4">
                Acecord exists for one purpose: turning your Discord server
                ideas into thriving communities. We connect server owners
                directly with verified experts who actually know what they're
                doing.
              </p>
              <p>
                No more hunting around random servers or taking chances on
                unproven freelancers. Everything you need is in one place, with
                people who have track records of delivering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">
                  What Makes Us Different
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Every seller is carefully vetted and verified</li>
                  <li>• Built-in escrow system protects your payments</li>
                  <li>• Direct communication with no middleman confusion</li>
                  <li>• Specialists for every Discord need imaginable</li>
                </ul>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Our Promise</h3>
                <ul className="space-y-2 text-sm">
                  <li>• No scams or shady deals</li>
                  <li>• Straightforward, secure transactions</li>
                  <li>• Clear communication from start to finish</li>
                  <li>• Support when you need it</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <p className="text-center">
                <strong className="text-white">
                  Acecord is your reliable hub for investing in real Discord
                  growth without the usual headaches.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section>
          <h2 className="font-bold text-2xl text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="bg-[#121a30] rounded-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="escrow"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  How does escrow work?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  When you fund a project, your payment is held securely in
                  escrow until the work is completed. The seller can’t access
                  the funds until you approve the deliverables. If something
                  goes wrong, you’re protected. Once you’re satisfied with the
                  work, the payment is released to the seller. Escrow ensures
                  that you only pay for work that meets your expectations.
                  <br />
                  <br />
                  For recurring or long-term contracts (like ongoing
                  moderation), payments are handled per agreed period (usually
                  monthly or quarterly). Each period’s funds are escrowed and
                  released only after the work for that period is completed and
                  approved, keeping both buyers and sellers safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="services"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  What services are allowed on Acecord?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  <p className="mb-3">
                    We focus on legitimate Discord-related services that help
                    communities grow and thrive:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-white mb-2">
                        ✅ Allowed Services
                      </p>
                      <ul className="space-y-1">
                        <li>• Custom bot development</li>
                        <li>• Server setup and configuration</li>
                        <li>• Moderation and community management</li>
                        <li>• Graphics, logos, and branding</li>
                        <li>• Community growth strategies</li>
                        <li>• Event planning and management</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-400 mb-2">
                        ❌ Not Allowed
                      </p>
                      <ul className="space-y-1">
                        <li>• NSFW or adult content</li>
                        <li>• Illegal activities</li>
                        <li>• Scams or misleading services</li>
                        <li>• Harassment or hate speech</li>
                        <li>• Spam or mass messaging</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="moderators"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  Can I hire long-term moderators?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  <p className="mb-3">
                    Absolutely! Many sellers offer ongoing moderation services.
                    Here's how long-term or event-based moderation works:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-white mb-2">
                        Event-based moderation
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Hire a mod for a single event or task</li>
                        <li>
                          • Payment is held in escrow and released upon
                          completion
                        </li>
                        <li>
                          • Perfect for tournaments, giveaways, or server
                          cleanups
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Long-term contracts
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Set up monthly or quarterly renewable agreements
                        </li>
                        <li>• Each payment period is escrow-protected</li>
                        <li>
                          • Sellers can provide logs or reports to show
                          completed work
                        </li>
                        <li>
                          • Contracts can be ended by either party with notice
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="verification"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  How do I become a verified seller?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  <p className="mb-3">
                    Our verification process ensures quality and builds trust
                    with buyers:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          Submit Application
                        </p>
                        <p className="text-xs">
                          Portfolio, experience, and service details
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          Skills Assessment
                        </p>
                        <p className="text-xs">
                          We review your work and verify your expertise
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#23b260] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-white">Get Verified</p>
                        <p className="text-xs">
                          Start selling with a verified badge and higher
                          visibility
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payments"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  How are payments processed?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  <p className="mb-3">
                    We use industry-standard payment processing to keep your
                    transactions secure:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-white mb-2">For Buyers</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Credit/debit cards accepted</li>
                        <li>• PayPal integration</li>
                        <li>• Bank transfers available</li>
                        <li>• Cryptocurrency options coming soon</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">For Sellers</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Direct bank deposits</li>
                        <li>• PayPal withdrawals</li>
                        <li>• Weekly payout schedule</li>
                        <li>• Instant withdrawal for verified sellers</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="satisfaction"
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  What if I'm not satisfied with the work?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  <p className="mb-3">
                    Your satisfaction is our priority. If the work delivered
                    doesn't meet the agreed expectations:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-white mb-2">
                        Buyer options
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Request revisions from the seller</li>
                        <li>• Escalate the issue to our support team</li>
                        <li>
                          • Payment is only released once you approve the work
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Escrow protection
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • One-off projects and recurring contracts are covered
                        </li>
                        <li>
                          • If the issue can’t be resolved, you receive a full
                          refund
                        </li>
                        <li>• Peace of mind for every type of service</li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  You can also visit our{" "}
                  <a href="/fees" className="text-[#4383ff] hover:underline">
                    fees page
                  </a>{" "}
                  for very specific details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="speed" className="border-b-0">
                <AccordionTrigger className="text-white hover:text-[#4383ff] hover:no-underline">
                  How quickly can I get help with my server?
                </AccordionTrigger>
                <AccordionContent className="text-[#c9d1d9]">
                  Response and delivery times vary depending on the service.
                  Simple tasks, such as server setup or minor tweaks, are often
                  completed the same day or within a few hours, while more
                  complex projects, like custom bot development or major server
                  redesigns, usually take a few days to a week. Ongoing
                  moderation contracts involve continuous work, with clearly
                  defined deliverables for each period. Estimated delivery times
                  are displayed on each service listing, and many sellers also
                  offer rush delivery for urgent needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <h3 className="font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-sm mb-4">
                Our support team is here to help. We typically respond within a
                few hours and can assist with everything from account setup to
                project disputes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#4383ff] hover:bg-[#376fff] text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Contact Support
                </button>
                <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Browse Help Center
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </InfoLayout>
  );
}
