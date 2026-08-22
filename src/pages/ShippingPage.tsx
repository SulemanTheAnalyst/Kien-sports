import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

export function ShippingPage() {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      price: 'Free',
      duration: '5-7 business days',
      description: 'Available across India',
    },
    {
      name: 'Express Shipping',
      price: '₹99',
      duration: '2-3 business days',
      description: 'Available in select cities',
    },
    {
      name: 'Same Day Delivery',
      price: '₹199',
      duration: 'Same day',
      description: 'Mumbai & Delhi only (order before 12 PM)',
    },
  ];

  const expressCities = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'];

  return (
    <main>
      <section className="relative h-[40vh] md:h-[50vh] bg-kien-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center kien-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Truck className="w-12 h-12 mx-auto mb-4 text-white" />
            <h1 className="text-display font-black uppercase text-white tracking-tight">
              Shipping
            </h1>
            <p className="mt-4 text-base text-white/60">
              Fast, reliable delivery across India
            </p>
          </motion.div>
        </div>
      </section>

      <section className="kien-section bg-white">
        <div className="kien-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">Shipping Methods</h2>
              <div className="space-y-4">
                {shippingMethods.map((method, index) => (
                  <div key={index} className="border border-kien-light-grey p-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold">{method.name}</h3>
                      <p className="text-sm text-kien-grey mt-1">{method.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{method.price}</p>
                      <p className="text-sm text-kien-grey">{method.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-6">Express Delivery Cities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {expressCities.map((city, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-kien-stone">
                    <MapPin className="w-4 h-4 text-kien-grey" />
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="border border-kien-light-grey p-6 text-center">
                <Package className="w-6 h-6 mx-auto mb-3" />
                <h3 className="font-bold text-sm mb-2">Order Processing</h3>
                <p className="text-xs text-kien-grey">Orders are processed within 24 hours on business days.</p>
              </div>
              <div className="border border-kien-light-grey p-6 text-center">
                <Truck className="w-6 h-6 mx-auto mb-3" />
                <h3 className="font-bold text-sm mb-2">Tracking</h3>
                <p className="text-xs text-kien-grey">Receive tracking updates via email and SMS once shipped.</p>
              </div>
              <div className="border border-kien-light-grey p-6 text-center">
                <Clock className="w-6 h-6 mx-auto mb-3" />
                <h3 className="font-bold text-sm mb-2">Delivery Times</h3>
                <p className="text-xs text-kien-grey">Delivery attempts are made between 9 AM and 7 PM.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
