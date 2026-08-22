import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  'Orders & Shipping': [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days across India. Express shipping (2-3 business days) is available for select cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune.',
    },
    {
      question: 'Do you offer free shipping?',
      answer: 'Yes, we offer free standard shipping on all orders across India with no minimum purchase required.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Absolutely. Once your order ships, you will receive an email with a tracking link. You can also track your order from your account dashboard.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within India. International shipping will be available soon as we expand our operations.',
    },
  ],
  'Returns & Exchanges': [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for unused products in their original packaging with all tags attached. The product must be in the same condition as received.',
    },
    {
      question: 'How do I initiate a return?',
      answer: 'Log into your account, go to Order History, select the order and item you wish to return, and follow the prompts. You can also contact our customer service team for assistance.',
    },
    {
      question: 'Are returns free?',
      answer: 'Yes, returns are free for all orders within India. We will arrange a pickup from your location at no extra cost.',
    },
    {
      question: 'How long do refunds take?',
      answer: 'Once we receive and inspect your return, refunds are processed within 5-7 business days. The amount will be credited to your original payment method.',
    },
  ],
  'Products': [
    {
      question: 'What materials are used in KIEN bags?',
      answer: 'Our bags are crafted from premium materials including 900D water-resistant polyester, YKK zippers, reinforced nylon bases, and EVA padded back panels. Each product page lists specific materials used.',
    },
    {
      question: 'Are KIEN bags water-resistant?',
      answer: 'Yes, all our bags feature water-resistant exteriors that repel light rain and splashes. However, they are not fully waterproof and should not be submerged in water.',
    },
    {
      question: 'How do I clean my KIEN bag?',
      answer: 'For everyday marks, spot clean with a damp cloth. Air dry away from direct heat or sunlight. Store in a cool, dry place when not in use. Avoid overloading beyond recommended capacity.',
    },
    {
      question: 'Do your products come with a warranty?',
      answer: 'Yes, all KIEN products come with a 1-year warranty covering manufacturing defects. This does not cover normal wear and tear or damage from misuse.',
    },
  ],
  'Payments': [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, RuPay), UPI payments, Net Banking, and popular wallets including Paytm, PhonePe, and Google Pay.',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard encryption and secure payment gateways. Your payment information is never stored on our servers.',
    },
    {
      question: 'Can I pay Cash on Delivery?',
      answer: 'Yes, Cash on Delivery is available for orders under ₹5,000. A ₹50 COD fee applies to cover handling costs.',
    },
  ],
  'Account': [
    {
      question: 'Do I need an account to shop?',
      answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and receive exclusive offers.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your email, and we will send you a reset link. The link expires in 24 hours.',
    },
    {
      question: 'Can I change my email address?',
      answer: 'Yes, log into your account, go to Settings, and update your email address. You will need to verify the new email before the change takes effect.',
    },
  ],
};

export function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <main>
      <section className="relative h-[40vh] md:h-[50vh] bg-kien-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kien-black via-kien-black/80 to-kien-black" />
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              FAQs
            </h1>
            <p className="mt-4 text-base text-white/60">
              Frequently Asked Questions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="max-w-3xl mx-auto">
            {Object.entries(faqData).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-sm font-bold uppercase tracking-widest text-kien-grey mb-6">
                  {category}
                </h2>
                <div className="space-y-4">
                  {items.map((item, itemIndex) => {
                    const itemKey = `${category}-${itemIndex}`;
                    const isExpanded = expandedItems.has(itemKey);

                    return (
                      <div
                        key={itemIndex}
                        className="border border-kien-light-grey"
                      >
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="flex items-center justify-between w-full p-5 text-left hover:bg-kien-stone transition-colors"
                        >
                          <span className="text-sm font-semibold pr-4">{item.question}</span>
                          {isExpanded ? (
                            <Minus className="w-4 h-4 flex-shrink-0" />
                          ) : (
                            <Plus className="w-4 h-4 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-5 pb-5">
                            <p className="text-sm text-kien-grey leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="kien-section bg-kien-stone">
        <div className="kien-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-3">Still have questions?</h2>
            <p className="text-sm text-kien-grey mb-6">
              Our customer service team is here to help.
            </p>
            <a
              href="mailto:support@kiensports.com"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-kien-black text-white text-sm font-semibold uppercase tracking-wider hover:bg-kien-charcoal transition-colors duration-300"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
