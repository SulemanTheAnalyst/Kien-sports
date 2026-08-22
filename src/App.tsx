import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { HomePage } from './pages/HomePage';
import { SportPage } from './pages/SportPage';
import { LifestylePage } from './pages/LifestylePage';
import { ProductPage } from './pages/ProductPage';
import { NewFeaturedPage } from './pages/NewFeaturedPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AccountPage } from './pages/AccountPage';
import { WishlistPage } from './pages/WishlistPage';
import { ShippingPage } from './pages/ShippingPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sport" element={<SportPage />} />
          <Route path="/sport/:subcategory" element={<SportPage />} />
          <Route path="/lifestyle" element={<LifestylePage />} />
          <Route path="/lifestyle/:subcategory" element={<LifestylePage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/new" element={<NewFeaturedPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
