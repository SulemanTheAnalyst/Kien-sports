import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'large';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0].name);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden bg-kien-stone ${variant === 'large' ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-600 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        )}

        {product.isNewArrival && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-kien-black text-white text-[10px] font-bold uppercase tracking-widest">
            New
          </span>
        )}

        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-kien-black text-white flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} hover:bg-kien-charcoal`}
          aria-label="Quick add to bag"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 space-y-1.5">
        <p className="text-[11px] font-medium uppercase tracking-wider text-kien-grey">
          {product.category === 'sport' ? 'Sport' : 'Lifestyle'} / {product.subcategory.replace('-', ' ')}
        </p>
        <h3 className="text-sm font-semibold text-kien-black group-hover:text-kien-grey transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">{formatPrice(product.price)}</p>
          {product.compareAtPrice && (
            <p className="text-sm text-kien-grey line-through">{formatPrice(product.compareAtPrice)}</p>
          )}
        </div>
        <div className="flex gap-1.5 pt-1">
          {product.colors.map(color => (
            <span
              key={color.name}
              className="w-3.5 h-3.5 rounded-full border border-kien-light-grey"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
