import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, MapPin, Heart, Settings, LogOut, ChevronRight, Plus } from 'lucide-react';

type TabType = 'orders' | 'addresses' | 'wishlist' | 'settings';

export function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabType>('orders');

  const tabs = [
    { id: 'orders' as TabType, label: 'Orders', icon: Package },
    { id: 'addresses' as TabType, label: 'Addresses', icon: MapPin },
    { id: 'wishlist' as TabType, label: 'Wishlist', icon: Heart },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
  ];

  const mockOrders = [
    {
      id: 'KIEN-2026-001',
      date: 'Jan 15, 2026',
      status: 'Delivered',
      total: 4999,
      items: [{ name: 'KIEN Athlete 40L Backpack', quantity: 1, color: 'Matte Black' }],
    },
    {
      id: 'KIEN-2026-002',
      date: 'Jan 20, 2026',
      status: 'In Transit',
      total: 1999,
      items: [{ name: 'KIEN Lifestyle Sling Bag', quantity: 1, color: 'Stone' }],
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
    <main className="kien-section bg-white">
      <div className="kien-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-kien-black text-white flex items-center justify-center text-xl font-bold">
                KI
              </div>
              <div>
                <h1 className="text-lg font-bold">Kien User</h1>
                <p className="text-sm text-kien-grey">kien.user@email.com</p>
              </div>
            </div>

            <nav className="space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-kien-black text-white'
                      : 'hover:bg-kien-stone'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
              <button className="flex items-center gap-3 w-full px-4 py-3 text-left text-kien-grey hover:text-kien-black transition-colors">
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Order History</h2>
                {mockOrders.length === 0 ? (
                  <div className="text-center py-12 border border-kien-light-grey">
                    <Package className="w-8 h-8 mx-auto mb-4 text-kien-grey" />
                    <p className="text-sm text-kien-grey">No orders yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockOrders.map(order => (
                      <div key={order.id} className="border border-kien-light-grey p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <div>
                            <p className="text-sm font-bold">{order.id}</p>
                            <p className="text-xs text-kien-grey">{order.date}</p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} ({item.color}) x{item.quantity}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-kien-light-grey">
                          <span className="text-sm font-bold">{formatPrice(order.total)}</span>
                          <button className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1 hover:text-kien-grey transition-colors">
                            View Details <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Saved Addresses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-kien-light-grey p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider bg-kien-black text-white px-2 py-1">
                        Default
                      </span>
                    </div>
                    <p className="font-medium">Home</p>
                    <p className="text-sm text-kien-grey mt-2">
                      Kien User<br />
                      123 Sports Avenue<br />
                      Andheri West, Mumbai 400053<br />
                      Maharashtra, India
                    </p>
                    <p className="text-sm text-kien-grey mt-2">+91 98765 43210</p>
                  </div>
                  <button className="border border-dashed border-kien-light-grey p-6 flex flex-col items-center justify-center text-kien-grey hover:border-kien-black hover:text-kien-black transition-colors">
                    <Plus className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">Add New Address</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Wishlist</h2>
                <div className="text-center py-12 border border-kien-light-grey">
                  <Heart className="w-8 h-8 mx-auto mb-4 text-kien-grey" />
                  <p className="text-sm text-kien-grey">Your wishlist is empty</p>
                  <p className="text-xs text-kien-grey mt-2">Save items you love by clicking the heart icon</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="border border-kien-light-grey p-6">
                    <h3 className="text-sm font-bold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-kien-grey block mb-1">First Name</label>
                        <input
                          type="text"
                          defaultValue="Kien"
                          className="w-full px-4 py-2.5 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-kien-grey block mb-1">Last Name</label>
                        <input
                          type="text"
                          defaultValue="User"
                          className="w-full px-4 py-2.5 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs text-kien-grey block mb-1">Email</label>
                        <input
                          type="email"
                          defaultValue="kien.user@email.com"
                          className="w-full px-4 py-2.5 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs text-kien-grey block mb-1">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+91 98765 43210"
                          className="w-full px-4 py-2.5 border border-kien-light-grey text-sm focus:border-kien-black focus:outline-none"
                        />
                      </div>
                    </div>
                    <button className="mt-4 px-6 py-2.5 bg-kien-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-kien-charcoal transition-colors">
                      Save Changes
                    </button>
                  </div>

                  <div className="border border-kien-light-grey p-6">
                    <h3 className="text-sm font-bold mb-4">Password</h3>
                    <button className="text-xs font-semibold uppercase tracking-wider border border-kien-black px-6 py-2.5 hover:bg-kien-black hover:text-white transition-colors">
                      Change Password
                    </button>
                  </div>

                  <div className="border border-kien-light-grey p-6">
                    <h3 className="text-sm font-bold mb-4">Email Preferences</h3>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-kien-black" />
                      <span className="text-sm">Receive updates about new products and offers</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
