import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button';

export function EditorialSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="kien-section bg-kien-graphite text-white overflow-hidden">
      <div className="kien-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 mb-3">
              The Athlete 40L
            </p>
            <h2 className="text-heading font-black uppercase tracking-tight">
              One Bag. Built Around<br className="hidden md:block" /> The Way You Move.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
              From early morning training to late-night travel. Every compartment has a purpose.
              Every material was chosen for durability. This isn&apos;t a bag you carry — it&apos;s a system you trust.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-white/10 p-4">
                <p className="text-2xl font-bold">40L</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Capacity</p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Compartments</p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="text-2xl font-bold">1.2kg</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Weight</p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="text-2xl font-bold">900D</p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Fabric</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/products/kien-athlete-40l">
                <Button variant="white" showArrow>View Full Details</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-kien-charcoal overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&h=900&fit=crop&q=80"
                alt="KIEN Athlete 40L Backpack"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
