import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button';
import { getProductsByCategory } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export function LifestyleSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const lifestyleProducts = getProductsByCategory('lifestyle');
  const product = lifestyleProducts[0];
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!product) return null;

  return (
    <section ref={ref} className="kien-section bg-kien-stone">
      <div className="kien-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-3">
            Lifestyle
          </p>
          <h2 className="text-heading font-black uppercase tracking-tight">
            Made for Everyday
          </h2>
          <p className="mt-3 text-base text-kien-grey max-w-md">
            Purposeful carry for work, travel and everything in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <Link to={`/products/${product.slug}`} className="group">
            <div className="relative aspect-[4/5] bg-kien-graphite overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                loading="lazy"
              />
              {product.isNewArrival && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-kien-black text-white text-[10px] font-bold uppercase tracking-widest">
                  New
                </span>
              )}
            </div>
          </Link>

          <div className="lg:py-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-2">
              {product.collection}
            </p>
            <h3 className="text-subheading font-bold">{product.name}</h3>
            <p className="mt-4 text-kien-grey leading-relaxed">{product.shortDescription}</p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xl font-bold">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-base text-kien-grey line-through">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              {product.colors.map(color => (
                <span
                  key={color.name}
                  className="w-5 h-5 rounded-full border border-kien-light-grey"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={`/products/${product.slug}`}>
                <Button variant="primary" size="lg">View Product</Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => addItem(product, product.colors[0].name)}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Quick Add
              </Button>
            </div>

            <div className="mt-10">
              <Link to="/lifestyle">
                <Button variant="ghost" showArrow>Explore Lifestyle</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
