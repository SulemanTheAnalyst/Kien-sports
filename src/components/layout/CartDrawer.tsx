import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { products } from '../../data/products';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const suggestedProducts = products.filter(
    p => !items.find(item => item.product.id === p.id)
  ).slice(0, 2);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-kien-light-grey">
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} className="p-1" aria-label="Close bag">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <p className="text-sm text-kien-grey mb-6">Your bag is empty.</p>
              <Button variant="primary" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-6">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-4">
                  <Link
                    to={`/products/${item.product.slug}`}
                    onClick={closeCart}
                    className="w-20 h-24 bg-kien-stone flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={closeCart}
                      className="text-sm font-semibold hover:text-kien-grey transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-kien-grey mt-0.5">{item.selectedColor}</p>
                    <p className="text-sm font-bold mt-1">{formatPrice(item.product.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-kien-light-grey">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-kien-stone transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-kien-stone transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-kien-grey hover:text-kien-black transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {suggestedProducts.length > 0 && (
                <div className="pt-6 border-t border-kien-light-grey">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-kien-grey mb-4">
                    You May Also Like
                  </h3>
                  <div className="space-y-3">
                    {suggestedProducts.map(product => (
                      <Link
                        key={product.id}
                        to={`/products/${product.slug}`}
                        onClick={closeCart}
                        className="flex gap-3 group"
                      >
                        <div className="w-14 h-14 bg-kien-stone flex-shrink-0 overflow-hidden">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold group-hover:text-kien-grey transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs font-bold mt-0.5">{formatPrice(product.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-kien-light-grey space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider">Subtotal</span>
              <span className="text-sm font-bold">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[11px] text-kien-grey">Shipping calculated at checkout.</p>
            <Button variant="primary" className="w-full">
              Checkout
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs font-medium uppercase tracking-wider text-kien-grey hover:text-kien-black transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
