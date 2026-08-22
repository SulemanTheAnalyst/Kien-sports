import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button';

export function BrandStory() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="kien-section bg-white">
      <div className="kien-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
              Why KIEN Exists
            </p>
            <h2 className="text-heading font-black uppercase tracking-tight">
              Performance &times; Everyday Life
            </h2>
            <p className="mt-6 text-base md:text-lg text-kien-grey leading-relaxed">
              KIEN was created from observing how people actually use their products. The same
              person trains in the morning, works during the day, and travels in the evening.
              Products should fit naturally into that life — not force you to choose between
              function and aesthetics.
            </p>
            <p className="mt-4 text-base md:text-lg text-kien-grey leading-relaxed">
              We bridge the gap between performance and everyday. Every product is purposeful.
              Every detail is intentional. Nothing exists without reason.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Link to="/about">
              <Button variant="secondary" showArrow>Our Story</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
