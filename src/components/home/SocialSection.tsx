import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Instagram } from 'lucide-react';

export function SocialSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const socialImages = [
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400&h=400&fit=crop&q=80',
  ];

  return (
    <section ref={ref} className="kien-section bg-kien-stone">
      <div className="kien-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="w-4 h-4" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey">
              @official_kiensports
            </p>
          </div>
          <h2 className="text-subheading font-bold uppercase tracking-tight">
            Follow The Movement
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          {socialImages.map((img, index) => (
            <a
              key={index}
              href="https://instagram.com/official_kiensports"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img
                src={img}
                alt="KIEN Sports Instagram"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
