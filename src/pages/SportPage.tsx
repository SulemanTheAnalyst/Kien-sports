import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ui/ProductCard';
import { getProductsByCategory } from '../data/products';

export function SportPage() {
  const sportProducts = getProductsByCategory('sport');

  return (
    <main>
      <section className="relative h-[50vh] md:h-[60vh] bg-kien-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&fit=crop&q=80"
          alt="KIEN Sport"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kien-black via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-end kien-container pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-2">
              Collection
            </p>
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Sport
            </h1>
            <p className="mt-3 text-base text-white/60 max-w-lg">
              Performance-focused products designed around how you actually move.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="flex items-center justify-between mb-10">
            <p className="text-sm text-kien-grey">
              {sportProducts.length} {sportProducts.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sportProducts.map((product, index) => (
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
