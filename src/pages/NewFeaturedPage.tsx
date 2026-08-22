import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ui/ProductCard';
import { getNewArrivals } from '../data/products';

export function NewFeaturedPage() {
  const newArrivals = getNewArrivals();

  return (
    <main>
      <section className="kien-section bg-white">
        <div className="kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-2">
              Just Dropped
            </p>
            <h1 className="text-display font-black uppercase tracking-tight">
              New & Featured
            </h1>
            <p className="mt-4 text-base text-kien-grey max-w-lg">
              The latest products from KIEN. Performance and lifestyle, built with purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
