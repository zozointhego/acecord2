"use client";

import { InfoLayout } from "@/components/InfoLayout";

export default function FeesPage() {
  return (
    <InfoLayout currentPage="fees" title="Fees, Refunds & Disputes">
      <div className="space-y-8">
        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Service Fees
          </h2>
          <div className="space-y-4">
            <p>
              Acecord charges a small service fee to maintain our platform, provide secure transactions, 
              and offer customer support. Our fees are transparent and competitive.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Buyer Fees</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Service Fee</span>
                    <span className="font-bold text-white">2.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Processing Fee</span>
                    <span className="font-bold text-white">$0.30</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Total Fee</span>
                    <span className="font-bold text-[#4383ff]">2.9% + $0.30</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Seller Fees</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Platform Fee</span>
                    <span className="font-bold text-white">5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Withdrawal Fee</span>
                    <span className="font-bold text-white">$1.00</span>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">You Keep</span>
                    <span className="font-bold text-[#23b260]">95% - $1.00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
              <h3 className="font-bold text-white mb-3">Fee Example</h3>
              <div className="space-y-2 text-sm">
                <p><strong className="text-white">Project Value:</strong> $100.00</p>
                <p><strong className="text-white">Buyer Pays:</strong> $103.20 (includes 2.9% + $0.30 fee)</p>
                <p><strong className="text-white">Seller Receives:</strong> $95.00 (after 5% platform fee)</p>
                <p><strong className="text-white">Seller Gets After Withdrawal:</strong> $94.00 (after $1.00 withdrawal fee)</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Escrow System
          </h2>
          <div className="space-y-4">
            <p>
              Our secure escrow system protects both buyers and sellers by holding funds until 
              project completion and approval.
            </p>
            <div className="bg-[#121a30] rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">How Escrow Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Payment Secured</h4>
                    <p className="text-sm">Buyer funds the project, money is held in secure escrow</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Work Begins</h4>
                    <p className="text-sm">Seller starts the project knowing payment is guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#4383ff] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Delivery & Review</h4>
                    <p className="text-sm">Seller delivers work, buyer has 7 days to review and approve</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#23b260] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Payment Released</h4>
                    <p className="text-sm">Upon approval, funds are released to the seller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Refund Policy
          </h2>
          <div className="space-y-4">
            <p>
              Refunds are available when sellers fail to deliver as promised or violate our terms of service. 
              Our goal is to ensure fair outcomes for all parties.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#1b2d1b] rounded-xl p-6 border border-green-500/20">
                <h3 className="font-bold text-green-400 mb-3">Full Refund Scenarios</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Seller doesn't deliver within agreed timeframe</li>
                  <li>• Delivered work doesn't match requirements</li>
                  <li>• Seller violates terms of service</li>
                  <li>• Seller becomes unresponsive</li>
                  <li>• Project cancelled before work begins</li>
                </ul>
              </div>
              <div className="bg-[#2d2d1b] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="font-bold text-yellow-400 mb-3">Partial Refund Scenarios</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Work partially completed as agreed</li>
                  <li>• Mutual agreement to end project early</li>
                  <li>• Buyer changes requirements significantly</li>
                  <li>• Minor issues resolved through revision</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#2d1b1b] rounded-xl p-6 border border-red-500/20">
              <h3 className="font-bold text-red-400 mb-3">No Refund Scenarios</h3>
              <ul className="space-y-2 text-sm">
                <li>• Work completed successfully and approved</li>
                <li>• Buyer changes mind after delivery</li>
                <li>• Service fees after successful completion</li>
                <li>• Buyer violates terms during project</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Dispute Resolution Process
          </h2>
          <div className="space-y-4">
            <p>
              When issues arise, we provide a structured process to resolve disputes fairly and efficiently. 
              Most disputes are resolved within 3-5 business days.
            </p>
            <div className="space-y-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Resolution Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#4383ff] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">Direct Communication (24-48 hours)</h4>
                      <p className="text-sm mb-2">
                        Buyer and seller work together to resolve the issue through our messaging system.
                      </p>
                      <div className="bg-[#0d1426] rounded-lg p-3">
                        <p className="text-xs"><strong className="text-white">Success Rate:</strong> 70% of disputes resolved at this stage</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#4383ff] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">Support Mediation (2-3 business days)</h4>
                      <p className="text-sm mb-2">
                        Acecord support team reviews the case and mediates between both parties.
                      </p>
                      <div className="bg-[#0d1426] rounded-lg p-3">
                        <p className="text-xs"><strong className="text-white">Required:</strong> Screenshots, project details, communication history</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#23b260] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">Final Decision (1-2 business days)</h4>
                      <p className="text-sm mb-2">
                        If mediation fails, Acecord makes a binding decision based on evidence and platform rules.
                      </p>
                      <div className="bg-[#0d1426] rounded-lg p-3">
                        <p className="text-xs"><strong className="text-white">Outcome:</strong> Refund, payment release, or alternative resolution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#182239] rounded-xl p-6 border border-[#4383ff]/20">
                <h3 className="font-bold text-white mb-3">Filing a Dispute</h3>
                <p className="text-sm mb-3">
                  Disputes can be filed through your order page or by contacting support directly. 
                  Provide as much detail and evidence as possible for faster resolution.
                </p>
                <p className="text-sm">
                  <strong className="text-white">Contact:</strong> disputes@acecord.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl text-white mb-4">
            Important Notes
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Fee Policy</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Service fees are non-refundable after successful project completion</li>
                  <li>• Withdrawal fees apply to all seller payouts</li>
                  <li>• Currency conversion fees may apply for international transactions</li>
                </ul>
              </div>
              <div className="bg-[#121a30] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Processing Times</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Refunds processed within 5-7 business days</li>
                  <li>• Seller payouts available within 24 hours of approval</li>
                  <li>• Dispute resolution typically takes 3-5 business days</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#121a30] rounded-xl p-6">
              <p className="text-sm">
                <strong className="text-white">Last updated:</strong> January 2025<br/>
                <strong className="text-white">Questions:</strong> billing@acecord.com<br/>
                <strong className="text-white">Disputes:</strong> disputes@acecord.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </InfoLayout>
  );
}