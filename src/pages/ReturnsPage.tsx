import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Package, RefreshCw, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function ReturnsPage() {
  const returnSteps = [
    { icon: Package, title: 'Request Return', description: 'Log into your account and select the order to return.' },
    { icon: RefreshCw, title: 'Pack Items', description: 'Pack items in original packaging with all tags attached.' },
    { icon: Clock, title: 'Schedule Pickup', description: 'We will arrange a free pickup from your location.' },
    { icon: CreditCard, title: 'Receive Refund', description: 'Refund processed within 5-7 business days.' },
  ];

  return (
    <main>
      <section className="relative h-[40vh] md:h-[50vh] bg-kien-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <RotateCcw className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Returns
            </h1>
            <p className="mt-4 text-base text-white/60">
              Easy 7-day returns, no questions asked
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">Return Policy</h2>
              <div className="space-y-4 text-kien-grey">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Returns accepted within 7 days of delivery</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Products must be unused with original tags and packaging</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Free pickup from your location across India</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Refund to original payment method within 5-7 business days</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">How to Return</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {returnSteps.map((step, index) => (
                  <div key={index} className="text-center p-6 border border-kien-light-grey">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-kien-black text-white">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-kien-grey mb-2">Step {index + 1}</div>
                    <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-kien-grey">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">Non-Returnable Items</h2>
              <ul className="space-y-2 text-kien-grey">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kien-black rounded-full" />
                  Items without original tags or packaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kien-black rounded-full" />
                  Used or damaged products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kien-black rounded-full" />
                  Customized or personalized items
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-kien-black rounded-full" />
                  Items returned after 7 days
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-8 bg-kien-stone"
            >
              <h3 className="font-bold mb-2">Need Help with Returns?</h3>
              <p className="text-sm text-kien-grey mb-6">Our customer service team is here to assist you.</p>
              <Link to="/about#contact">
                <Button variant="primary">Contact Support</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
