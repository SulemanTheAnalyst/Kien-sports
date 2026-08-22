import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Target, Layers, Shield, Compass } from 'lucide-react';

export function PhilosophySection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const pillars = [
    { icon: Target, title: 'Function', description: 'Every feature solves a real problem.' },
    { icon: Layers, title: 'Organization', description: 'Thoughtful compartments for how you actually pack.' },
    { icon: Shield, title: 'Durability', description: 'Built to endure daily use, year after year.' },
    { icon: Compass, title: 'Versatility', description: 'Designed to move between sport and life.' },
  ];

  return (
    <section ref={ref} className="kien-section bg-white">
      <div className="kien-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
            Philosophy
          </p>
          <h2 className="text-heading font-black uppercase tracking-tight">
            Purposeful Design
          </h2>
          <p className="mt-4 text-base text-kien-grey leading-relaxed">
            Products should not exist merely to look good. They should solve real problems.
            Every KIEN product starts with a question: what does the person actually need?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center border border-kien-light-grey">
                <pillar.icon className="w-5 h-5 text-kien-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{pillar.title}</h3>
              <p className="text-sm text-kien-grey leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
