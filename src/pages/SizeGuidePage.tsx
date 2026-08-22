import React from 'react';
import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';

export function SizeGuidePage() {
  const bagSizes = [
    { size: 'Small', capacity: '15-20L', dimensions: '40 x 25 x 15 cm', bestFor: 'Daily commute, short trips' },
    { size: 'Medium', capacity: '25-35L', dimensions: '48 x 30 x 18 cm', bestFor: 'Gym, day hikes, weekend trips' },
    { size: 'Large', capacity: '40-50L', dimensions: '55 x 33 x 22 cm', bestFor: 'Extended travel, sports gear' },
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
            <Ruler className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Size Guide
            </h1>
            <p className="mt-4 text-base text-white/60">
              Find the perfect fit for your needs
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
              <h2 className="text-xl font-bold mb-6">Bag Size Guide</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-kien-black">
                      <th className="text-left py-4 font-bold">Size</th>
                      <th className="text-left py-4 font-bold">Capacity</th>
                      <th className="text-left py-4 font-bold">Dimensions</th>
                      <th className="text-left py-4 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bagSizes.map((row, index) => (
                      <tr key={index} className="border-b border-kien-light-grey">
                        <td className="py-4 font-semibold">{row.size}</td>
                        <td className="py-4">{row.capacity}</td>
                        <td className="py-4">{row.dimensions}</td>
                        <td className="py-4 text-kien-grey">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">How to Choose</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-kien-light-grey">
                  <h3 className="font-bold mb-2">Daily Commute</h3>
                  <p className="text-sm text-kien-grey">15-25L bags are ideal for laptops, lunch, and daily essentials.</p>
                </div>
                <div className="p-6 border border-kien-light-grey">
                  <h3 className="font-bold mb-2">Gym & Training</h3>
                  <p className="text-sm text-kien-grey">30-40L bags fit shoes, change of clothes, and gear comfortably.</p>
                </div>
                <div className="p-6 border border-kien-light-grey">
                  <h3 className="font-bold mb-2">Travel</h3>
                  <p className="text-sm text-kien-grey">40L+ bags for weekend trips or as carry-on luggage.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-kien-stone"
            >
              <h3 className="font-bold mb-2">Need More Help?</h3>
              <p className="text-sm text-kien-grey">
                Contact our support team for personalized recommendations based on your specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
