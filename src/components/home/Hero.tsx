import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Volume2, VolumeX } from 'lucide-react';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative h-[85vh] md:h-[90vh] bg-kien-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&h=900&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-an-obstacle-course-7261-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-kien-black via-kien-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-kien-black/70 to-transparent" />
      </div>

      <div className="absolute top-24 right-6 z-10">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <div className="relative h-full kien-container flex flex-col justify-end pb-16 md:pb-24 lg:pb-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 bg-kien-accent rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              New Collection 2026
            </span>
          </motion.div>

          <h1 className="text-display font-black uppercase text-white tracking-tight">
            Built For<br />Performance
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 text-base md:text-lg text-white/70 max-w-md leading-relaxed"
          >
            Purposeful products designed for movement, training and everyday life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/sport">
              <Button variant="white" size="lg">Shop Sport</Button>
            </Link>
            <Link to="/lifestyle">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-kien-black">
                Shop Lifestyle
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
