import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>('features');

  if (!product) {
    return (
      <main className="kien-section">
        <div className="kien-container text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm underline">Return to homepage</Link>
        </div>
      </main>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const currentImages = product.colors[selectedColor]?.images || product.images;
  const relatedProducts = products.filter(p => p.id !== product.id);

  const handleAddToBag = () => {
    addItem(product, product.colors[selectedColor].name);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main>
      <div className="kien-container py-4">
        <nav className="flex items-center gap-2 text-xs text-kien-grey">
          <Link to="/" className="hover:text-kien-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/${product.category}`} className="hover:text-kien-black transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-kien-black font-medium">{product.name}</span>
        </nav>
      </div>

      <section className="kien-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="aspect-[4/5] bg-kien-stone overflow-hidden">
                <img
                  src={currentImages[selectedImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-kien-stone overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-kien-black' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:py-4"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-kien-grey mb-2">
              {product.collection}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-kien-grey line-through">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>

            <p className="mt-5 text-sm text-kien-grey leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider mb-3">
                Color: {product.colors[selectedColor].name}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => { setSelectedColor(index); setSelectedImage(0); }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-kien-black scale-110' : 'border-kien-light-grey'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider mb-3">Quantity</p>
              <div className="inline-flex items-center border border-kien-light-grey">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-kien-stone transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-kien-stone transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button variant="primary" className="w-full" size="lg" onClick={handleAddToBag}>
                Add to Bag — {formatPrice(product.price * quantity)}
              </Button>
              <Button variant="secondary" className="w-full" size="lg">
                Buy Now
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3 border border-kien-light-grey">
                <Truck className="w-4 h-4 mx-auto mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] font-medium uppercase tracking-wider">Free Shipping</p>
              </div>
              <div className="text-center p-3 border border-kien-light-grey">
                <RotateCcw className="w-4 h-4 mx-auto mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] font-medium uppercase tracking-wider">Easy Returns</p>
              </div>
              <div className="text-center p-3 border border-kien-light-grey">
                <Shield className="w-4 h-4 mx-auto mb-1.5" strokeWidth={1.5} />
                <p className="text-[10px] font-medium uppercase tracking-wider">1 Year Warranty</p>
              </div>
            </div>

            <div className="mt-10 border-t border-kien-light-grey divide-y divide-kien-light-grey">
              <div>
                <button
                  onClick={() => toggleSection('features')}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Features</span>
                  <Plus className={`w-4 h-4 transition-transform ${expandedSection === 'features' ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === 'features' && (
                  <div className="pb-5 space-y-4">
                    {product.features.map(feature => (
                      <div key={feature.title}>
                        <h4 className="text-sm font-semibold">{feature.title}</h4>
                        <p className="text-sm text-kien-grey mt-0.5">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('materials')}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Materials</span>
                  <Plus className={`w-4 h-4 transition-transform ${expandedSection === 'materials' ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === 'materials' && (
                  <div className="pb-5">
                    <ul className="space-y-2">
                      {product.materials.map(material => (
                        <li key={material} className="text-sm text-kien-grey">{material}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('specs')}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Specifications</span>
                  <Plus className={`w-4 h-4 transition-transform ${expandedSection === 'specs' ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === 'specs' && (
                  <div className="pb-5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-kien-grey">Dimensions</span>
                      <span className="font-medium">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-kien-grey">Weight</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    {product.capacity && (
                      <div className="flex justify-between text-sm">
                        <span className="text-kien-grey">Capacity</span>
                        <span className="font-medium">{product.capacity}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-kien-grey">SKU</span>
                      <span className="font-medium">{product.sku}</span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('shipping')}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Shipping & Returns</span>
                  <Plus className={`w-4 h-4 transition-transform ${expandedSection === 'shipping' ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === 'shipping' && (
                  <div className="pb-5 space-y-3 text-sm text-kien-grey">
                    <p>Free standard shipping on all orders across India.</p>
                    <p>Express delivery available for select cities (2-3 business days).</p>
                    <p>Easy 7-day returns for unused products in original packaging.</p>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('care')}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Product Care</span>
                  <Plus className={`w-4 h-4 transition-transform ${expandedSection === 'care' ? 'rotate-45' : ''}`} />
                </button>
                {expandedSection === 'care' && (
                  <div className="pb-5 space-y-2 text-sm text-kien-grey">
                    <p>Spot clean with a damp cloth for everyday marks.</p>
                    <p>Air dry away from direct heat or sunlight.</p>
                    <p>Store in a cool, dry place when not in use.</p>
                    <p>Avoid overloading beyond recommended capacity.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="kien-section bg-kien-stone border-t border-kien-light-grey">
          <div className="kien-container">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
