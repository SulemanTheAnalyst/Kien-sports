import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ui/ProductCard';
import { getProductsByCategory } from '../data/products';

export function LifestylePage() {
  const lifestyleProducts = getProductsByCategory('lifestyle');

  return (
    <main>
      <section className="relative h-[50vh] md:h-[60vh] bg-kien-stone overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop&q=80"
          alt="KIEN Lifestyle"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end kien-container pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-2">
              Collection
            </p>
            <h1 className="text-display font-black uppercase text-kien-black tracking-tight">
              Lifestyle
            </h1>
            <p className="mt-3 text-base text-kien-grey max-w-lg">
              Purposeful carry for work, travel and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="flex items-center justify-between mb-10">
            <p className="text-sm text-kien-grey">
              {lifestyleProducts.length} {lifestyleProducts.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {lifestyleProducts.map((product, index) => (
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
