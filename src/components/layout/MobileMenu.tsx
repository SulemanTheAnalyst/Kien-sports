import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, User, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { categories } from '../../data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  const sportCategories = categories.filter(c => c.world === 'sport');
  const lifestyleCategories = categories.filter(c => c.world === 'lifestyle');

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-kien-light-grey">
          <Logo variant="dark" size="sm" />
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-0">
            <div className="border-b border-kien-light-grey">
              <button
                onClick={() => setExpanded(expanded === 'sport' ? null : 'sport')}
                className="flex items-center justify-between w-full py-4 text-sm font-bold uppercase tracking-wider"
              >
                Sport
                <ChevronRight className={`w-4 h-4 transition-transform ${expanded === 'sport' ? 'rotate-90' : ''}`} />
              </button>
              {expanded === 'sport' && (
                <div className="pb-4 pl-4 space-y-3">
                  <Link to="/sport" onClick={onClose} className="block text-sm font-medium">All Sport</Link>
                  {sportCategories.filter(c => c.hasProducts).map(cat => (
                    <Link key={cat.slug} to={`/sport/${cat.slug}`} onClick={onClose} className="block text-sm">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-kien-light-grey">
              <button
                onClick={() => setExpanded(expanded === 'lifestyle' ? null : 'lifestyle')}
                className="flex items-center justify-between w-full py-4 text-sm font-bold uppercase tracking-wider"
              >
                Lifestyle
                <ChevronRight className={`w-4 h-4 transition-transform ${expanded === 'lifestyle' ? 'rotate-90' : ''}`} />
              </button>
              {expanded === 'lifestyle' && (
                <div className="pb-4 pl-4 space-y-3">
                  <Link to="/lifestyle" onClick={onClose} className="block text-sm font-medium">All Lifestyle</Link>
                  {lifestyleCategories.filter(c => c.hasProducts).map(cat => (
                    <Link key={cat.slug} to={`/lifestyle/${cat.slug}`} onClick={onClose} className="block text-sm">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/new" onClick={onClose} className="block py-4 text-sm font-bold uppercase tracking-wider border-b border-kien-light-grey">
              New & Featured
            </Link>
            <Link to="/about" onClick={onClose} className="block py-4 text-sm font-bold uppercase tracking-wider border-b border-kien-light-grey">
              About
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-kien-light-grey space-y-4">
            <Link to="/wishlist" onClick={onClose} className="flex items-center gap-3 text-sm font-medium">
              <Heart className="w-4 h-4" />
              Wishlist
            </Link>
            <Link to="/account" onClick={onClose} className="flex items-center gap-3 text-sm font-medium">
              <User className="w-4 h-4" />
              Account
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
