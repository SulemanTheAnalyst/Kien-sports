import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';
import { getProductsByCategory } from '../../data/products';

export function SportSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const sportProducts = getProductsByCategory('sport');

  return (
    <section ref={ref} className="kien-section bg-white">
      <div className="kien-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
                Sport
              </p>
              <h2 className="text-heading font-black uppercase tracking-tight">
                Built to Move
              </h2>
              <p className="mt-3 text-base text-kien-grey max-w-md">
                Performance-focused products designed around how you actually move.
              </p>
            </div>
            <Link to="/sport">
              <Button variant="secondary" showArrow>Explore Sport</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {sportProducts.map(product => (
            <ProductCard key={product.id} product={product} variant="large" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
