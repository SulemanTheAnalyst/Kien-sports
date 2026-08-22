import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

interface MegaMenuProps {
  type: 'sport' | 'lifestyle';
}

export function MegaMenu({ type }: MegaMenuProps) {
  const relevantCategories = categories.filter(c => c.world === type);
  const activeCategories = relevantCategories.filter(c => c.hasProducts);

  return (
    <div className="absolute left-0 right-0 bg-white border-t border-kien-light-grey animate-slide-down shadow-lg">
      <div className="kien-container py-10">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-kien-grey mb-5">
              {type === 'sport' ? 'Sport' : 'Lifestyle'} Categories
            </h3>
            <ul className="space-y-3">
              {relevantCategories.map(cat => (
                <li key={cat.slug}>
                  {cat.hasProducts ? (
                    <Link
                      to={`/${type}/${cat.slug}`}
                      className="text-sm font-medium text-kien-black hover:text-kien-grey transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ) : (
                    <span className="text-sm text-kien-grey/60 cursor-default">
                      {cat.name} <span className="text-[10px]">Coming Soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-kien-grey mb-5">
              Featured
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/new" className="text-sm font-medium text-kien-black hover:text-kien-grey transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to={`/${type}`} className="text-sm font-medium text-kien-black hover:text-kien-grey transition-colors">
                  All {type === 'sport' ? 'Sport' : 'Lifestyle'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <div className="bg-kien-stone aspect-[2/1] overflow-hidden">
              <img
                src={type === 'sport'
                  ? 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=300&fit=crop&q=80'
                  : 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=300&fit=crop&q=80'
                }
                alt={type === 'sport' ? 'KIEN Sport Collection' : 'KIEN Lifestyle Collection'}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider">
              {type === 'sport' ? 'Built to Move' : 'Made for Everyday'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
