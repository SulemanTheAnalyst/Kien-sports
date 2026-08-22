import React from 'react';
import { motion } from 'framer-motion';

export function TermsPage() {
  return (
    <main>
      <section className="relative h-[40vh] bg-kien-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-white/60">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="max-w-3xl mx-auto prose prose-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-kien-grey"
            >
              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using the KIEN Sports website (kiensports.com), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">2. Products and Pricing</h2>
                <p className="leading-relaxed">
                  All products are subject to availability. We reserve the right to discontinue any product at any time. Prices are subject to change without notice. We make every effort to ensure accurate pricing, but errors may occur. If a product is listed at an incorrect price, we will contact you for instructions before processing your order.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">3. Orders and Payment</h2>
                <p className="leading-relaxed">
                  When you place an order, you represent that the information provided is accurate and complete. We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing, or suspected fraud. Payment must be received before orders are processed.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">4. Shipping</h2>
                <p className="leading-relaxed">
                  Shipping times are estimates and not guaranteed. KIEN Sports is not responsible for delays caused by shipping carriers, customs, or other factors beyond our control. Risk of loss passes to you upon delivery to the carrier.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">5. Returns and Refunds</h2>
                <p className="leading-relaxed">
                  Please refer to our Returns Policy for information on returns and refunds. Products must be returned in their original condition within 7 days of delivery. Refunds will be processed within 5-7 business days of receiving the returned product.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">6. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of KIEN Sports Private Limited and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  KIEN Sports Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services. Our total liability shall not exceed the amount paid by you for the product in question.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">8. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">9. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">10. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>KIEN Sports Private Limited</strong><br />
                  Email: legal@kiensports.com<br />
                  Address: Mumbai, Maharashtra, India
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
