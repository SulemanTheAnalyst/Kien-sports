import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchProducts } from '../../data/products';
import { Product } from '../../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!isOpen) return null;

  const popularSearches = ['Backpack', 'Gym Bag', 'Sling', 'Training', 'Lifestyle'];

  return (
    <div className="fixed inset-0 z-[70] bg-white">
      <div className="kien-container py-6">
        <div className="flex items-center gap-4">
          <SearchIcon className="w-5 h-5 text-kien-grey flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 text-lg font-medium outline-none placeholder:text-kien-grey/50"
          />
          <button onClick={onClose} className="p-2" aria-label="Close search">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 border-t border-kien-light-grey pt-8">
          {query.length < 2 ? (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-kien-grey mb-4">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 border border-kien-light-grey text-sm font-medium hover:border-kien-black transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-kien-grey mb-6">
                Products ({results.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(product => (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 bg-kien-stone flex-shrink-0 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-kien-grey">
                        {product.category}
                      </p>
                      <h4 className="text-sm font-semibold group-hover:text-kien-grey transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm font-bold mt-1">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-kien-grey">
              No results found for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
