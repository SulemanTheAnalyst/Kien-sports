import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Layers, Shield, Compass, Zap, Heart, Mail, Phone, MapPin } from 'lucide-react';

export function AboutPage() {
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollReveal(0.1);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal(0.1);
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal(0.1);

  const values = [
    { icon: Target, title: 'Function First', description: 'Every product starts with a real problem to solve. Aesthetics follow function, never the other way around.' },
    { icon: Layers, title: 'Thoughtful Organization', description: 'Compartments exist because you need them, not because they look good on a spec sheet.' },
    { icon: Shield, title: 'Built to Last', description: 'Premium materials, reinforced construction, and rigorous testing ensure products that endure.' },
    { icon: Compass, title: 'Versatile by Nature', description: 'Products that move naturally between sport, work, and travel without compromise.' },
    { icon: Zap, title: 'Performance-Driven', description: 'Engineered for the demands of training, competition, and active life.' },
    { icon: Heart, title: 'Honest Design', description: 'No unnecessary features. No visual clutter. Only what matters.' },
  ];

  const contacts = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      email: 'arjun.sharma@kiensports.com',
      phone: '+91 98765 43210',
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      email: 'priya.patel@kiensports.com',
      phone: '+91 98765 43211',
    },
    {
      name: 'Rahul Singh',
      role: 'Customer Experience Lead',
      email: 'rahul.singh@kiensports.com',
      phone: '+91 98765 43212',
    },
    {
      name: 'Ananya Reddy',
      role: 'Business Development',
      email: 'ananya.reddy@kiensports.com',
      phone: '+91 98765 43213',
    },
  ];

  return (
    <main>
      <section className="relative h-[50vh] md:h-[60vh] bg-kien-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&fit=crop&q=80"
          alt="KIEN About"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              About KIEN
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/60 leading-relaxed">
              Timeless performance. Purposeful design.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
                Why We Exist
              </p>
              <h2 className="text-heading font-black uppercase tracking-tight">
                Built From Observation
              </h2>
              <div className="mt-8 space-y-5 text-base text-kien-grey leading-relaxed">
                <p>
                  KIEN was created from observing how people actually use their products in everyday life and during sport. Not how brands imagine they use them. Not how advertisements portray it. How it actually happens.
                </p>
                <p>
                  The same person trains at 6am, commutes at 8am, works all day, and might travel by evening. They need products that transition between these moments without friction.
                </p>
                <p>
                  Most products force you to choose: performance or aesthetics. Function or style. Sport or everyday. KIEN exists to prove that this choice is unnecessary. Products can be both — when they&apos;re designed with genuine purpose.
                </p>
                <p>
                  We bridge the gap between performance and everyday life. Every product is purposeful. Every detail is intentional. Nothing exists without reason.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={philosophyRef} id="philosophy" className="kien-section bg-kien-stone">
        <div className="kien-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={philosophyVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
                Design Philosophy
              </p>
              <h2 className="text-heading font-black uppercase tracking-tight">
                Purposeful Design
              </h2>
              <p className="mt-6 text-base text-kien-grey leading-relaxed">
                Products should not exist merely to look good. They should solve real problems.
                Every KIEN product starts with a simple question: what does the person actually need?
                We design the answer. Nothing more. Nothing less.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="kien-section bg-white">
        <div className="kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
              What We Stand For
            </p>
            <h2 className="text-heading font-black uppercase tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-11 h-11 flex items-center justify-center border border-kien-light-grey mb-4">
                  <value.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{value.title}</h3>
                <p className="text-sm text-kien-grey leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="kien-section bg-kien-stone">
        <div className="kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
              Get In Touch
            </p>
            <h2 className="text-heading font-black uppercase tracking-tight">
              Contact Our Team
            </h2>
            <p className="mt-4 text-base text-kien-grey max-w-lg mx-auto">
              Have questions about products, partnerships, or press? Reach out to the right person directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                animate={contactVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 border border-kien-light-grey"
              >
                <h3 className="text-sm font-bold">{contact.name}</h3>
                <p className="text-xs text-kien-grey uppercase tracking-wider mt-1">{contact.role}</p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-xs text-kien-grey hover:text-kien-black transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-xs text-kien-grey hover:text-kien-black transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {contact.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-sm text-kien-grey">
              <MapPin className="w-4 h-4" />
              <span>KIEN Sports Private Limited, Mumbai, Maharashtra, India</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-kien-black text-white">
        <div className="kien-container text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-heading font-black uppercase tracking-tight">
              Performance &times; Everyday Life
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              KIEN is being built as a long-term performance and lifestyle brand. We started with bags because that&apos;s where we saw the biggest gap between what exists and what people actually need. But this is just the beginning.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/30 font-bold">
              Built For Performance
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
