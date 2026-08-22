import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { useCart } from '../../context/CartContext';

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();
  const wishlistCount = 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="kien-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center gap-8 lg:gap-12">
              <Link to="/" className="flex-shrink-0">
                <Logo variant="dark" size="md" />
              </Link>

              <nav className="hidden lg:flex items-center gap-8">
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMenu('sport')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to="/sport"
                    className="text-sm font-semibold uppercase tracking-wider text-kien-black hover:text-kien-grey transition-colors duration-200 py-6"
                  >
                    Sport
                  </Link>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMenu('lifestyle')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to="/lifestyle"
                    className="text-sm font-semibold uppercase tracking-wider text-kien-black hover:text-kien-grey transition-colors duration-200 py-6"
                  >
                    Lifestyle
                  </Link>
                </div>
                <Link
                  to="/new"
                  className="text-sm font-semibold uppercase tracking-wider text-kien-black hover:text-kien-grey transition-colors duration-200"
                >
                  New & Featured
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold uppercase tracking-wider text-kien-black hover:text-kien-grey transition-colors duration-200"
                >
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-kien-black hover:text-kien-grey transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/wishlist"
                className="relative p-2 text-kien-black hover:text-kien-grey transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-kien-black text-white text-[9px] font-bold flex items-center justify-center rounded-full min-w-[18px] min-h-[18px]">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/account"
                className="hidden sm:block p-2 text-kien-black hover:text-kien-grey transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <button
                onClick={openCart}
                className="relative p-2 text-kien-black hover:text-kien-grey transition-colors"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-kien-black text-white text-[9px] font-bold flex items-center justify-center rounded-full min-w-[18px] min-h-[18px]">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-kien-black"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {activeMenu && (
          <div
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <MegaMenu type={activeMenu as 'sport' | 'lifestyle'} />
          </div>
        )}
      </header>

      <div className="h-16 lg:h-18" />

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
