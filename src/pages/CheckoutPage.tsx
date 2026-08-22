import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, Shield, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    paymentMethod: 'card',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const shipping = subtotal >= 2000 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <main className="bg-kien-stone min-h-screen py-8">
      <div className="kien-container">
        <nav className="flex items-center gap-2 text-xs text-kien-grey mb-8">
          <Link to="/" className="hover:text-kien-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/cart" className="hover:text-kien-black transition-colors">Bag</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-kien-black font-medium">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= s ? 'bg-kien-black text-white' : 'bg-kien-light-grey text-kien-grey'}`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`w-12 lg:w-20 h-0.5 ${step > s ? 'bg-kien-black' : 'bg-kien-light-grey'}`} />}
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div>
                  <h2 className="text-lg font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full mt-6" onClick={() => setStep(2)}>
                    Continue to Shipping
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-lg font-bold mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        placeholder="Street address"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">Apartment, suite, etc. (optional)</label>
                      <input
                        type="text"
                        value={formData.apartment}
                        onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                        className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">State</label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">PIN Code</label>
                        <input
                          type="text"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-kien-grey block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                    <Button variant="primary" className="flex-1" onClick={() => setStep(3)}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-lg font-bold mb-6">Payment Method</h2>
                  <div className="space-y-3">
                    {[
                      { id: 'card', label: 'Credit / Debit Card', icon: CreditCard },
                      { id: 'upi', label: 'UPI', icon: CreditCard },
                      { id: 'cod', label: 'Cash on Delivery', icon: Truck },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${formData.paymentMethod === method.id ? 'border-kien-black' : 'border-kien-light-grey'}`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 ${formData.paymentMethod === method.id ? 'border-kien-black bg-kien-black' : 'border-kien-grey'}`}>
                          {formData.paymentMethod === method.id && <div className="w-full h-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full" /></div>}
                        </div>
                        <method.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
                    <Button variant="primary" className="flex-1">
                      <Lock className="w-4 h-4 mr-2" />
                      Pay {formatPrice(total)}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white p-6 lg:p-8 sticky top-24">
              <h2 className="text-lg font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-20 bg-kien-stone flex-shrink-0 overflow-hidden">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold truncate">{item.product.name}</h3>
                      <p className="text-xs text-kien-grey">{item.selectedColor}</p>
                      <p className="text-xs text-kien-grey">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-kien-light-grey pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-kien-grey">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-kien-grey">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-3 border-t border-kien-light-grey">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-kien-grey">
                <Shield className="w-4 h-4" />
                <span>Secure checkout powered by industry-leading encryption</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
