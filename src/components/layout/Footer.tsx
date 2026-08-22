import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-kien-black text-white">
      <div className="kien-container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Logo variant="light" size="xl" />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/sport" className="text-sm text-white/80 hover:text-white transition-colors">Sport</Link></li>
              <li><Link to="/lifestyle" className="text-sm text-white/80 hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link to="/new" className="text-sm text-white/80 hover:text-white transition-colors">New & Featured</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shipping" className="text-sm text-white/80 hover:text-white transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm text-white/80 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/faqs" className="text-sm text-white/80 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/size-guide" className="text-sm text-white/80 hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              About
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about#philosophy" className="text-sm text-white/80 hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/official_kiensports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/kiensports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/kiensports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/kiensports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 KIEN Sports Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
