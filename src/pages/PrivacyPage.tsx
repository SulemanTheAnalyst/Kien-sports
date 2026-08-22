import React from 'react';
import { motion } from 'framer-motion';

export function PrivacyPage() {
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
              Privacy Policy
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
                <h2 className="text-lg font-bold text-kien-black mb-3">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly, including name, email address, shipping address, billing address, and payment information when you make a purchase. We also collect information about your browsing behavior, such as pages visited and products viewed.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use your information to process orders, communicate with you about your orders, send promotional emails (with your consent), improve our website and products, and prevent fraud. We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">3. Data Security</h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">4. Cookies</h2>
                <p className="leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">5. Third-Party Services</h2>
                <p className="leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders. These providers are contractually obligated to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">6. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at privacy@kiensports.com.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">7. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order information is retained for 7 years for accounting and legal purposes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">9. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-kien-black mb-3">10. Contact Us</h2>
                <p className="leading-relaxed">
                  For questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>KIEN Sports Private Limited</strong><br />
                  Email: privacy@kiensports.com<br />
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
