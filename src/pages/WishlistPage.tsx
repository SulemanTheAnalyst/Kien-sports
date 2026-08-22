import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function WishlistPage() {
  const wishlistItems = [
    {
      id: '1',
      name: 'KIEN Athlete 40L Backpack',
      price: 4999,
      color: 'Matte Black',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80',
      inStock: true,
    },
    {
      id: '2',
      name: 'KIEN Duffel Bag',
      price: 3499,
      color: 'Matte Black',
      image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=400&h=500&fit=crop&q=80',
      inStock: true,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <main>
      <section className="relative h-[40vh] md:h-[50vh] bg-kien-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Wishlist
            </h1>
            <p className="mt-4 text-base text-white/60">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          {wishlistItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-kien-light-grey" />
              <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-kien-grey mb-8">Save items you love by clicking the heart icon on product pages.</p>
              <Link to="/sport">
                <Button variant="primary">Start Shopping</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border border-kien-light-grey"
                >
                  <Link to={`/products/${item.id}`} className="block">
                    <div className="aspect-[4/5] bg-kien-stone overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link to={`/products/${item.id}`} className="block">
                      <h3 className="text-sm font-semibold group-hover:text-kien-grey transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-kien-grey mt-1">{item.color}</p>
                    <p className="text-sm font-bold mt-2">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className={`w-2 h-2 rounded-full ${item.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-xs text-kien-grey">{item.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="primary" size="sm" className="flex-1">
                        <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                        Add to Bag
                      </Button>
                      <button className="p-2.5 border border-kien-light-grey hover:border-kien-black transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
