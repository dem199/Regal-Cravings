import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Search, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import { Navbar } from './components/Navbar';
import { MenuCard } from './components/MenuCard';
import { CartSidebar } from './components/CartSidebar';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutUs } from './components/AboutUs';

// Data and Types

import { menuArray } from './data/menu';
import type { ViewType, ModalStep, PaystackResponse } from './types';

// Custom Hooks
import { useCart, useFavorites, useFilteredMenu } from './hooks';

function App() {
  // View state
  const [view, setView] = useState<ViewType>('menu');
  
  // Cart and favorites management
  const { 
    cart, 
    addToCart, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    totalAmount, 
    totalItems,
    setCart 
  } = useCart();
  
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  // UI state
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Checkout state
  const [modalStep, setModalStep] = useState<ModalStep>('closed');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Filtered menu based on search and category
  const filteredMenu = useFilteredMenu(menuArray, searchTerm, activeCategory, favorites);

  // Categories for filter buttons
  const categories = ['All', 'Rice', 'Swallow', 'Sides', 'Drinks', 'Favorites'];

  // Handle adding items to cart
  const handleAddToCart = (item: typeof menuArray[0], quantity: number) => {
    addToCart(item, quantity);
    setIsCartOpen(true);
  };

  // Handle checkout initiation
  const handleCheckout = () => {
    setIsCartOpen(false);
    setModalStep('form');
  };

  // Handle successful payment
  const handlePaystackSuccess = (reference: PaystackResponse) => {
    setModalStep('loading');
    
    const orderDetails = cart
      .map(item => `${item.qty}x ${item.name}`)
      .join(", ");
    
    // Send order confirmation email
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      {
        customer_name: userName,
        customer_email: userEmail,
        message: orderDetails,
        payment_ref: reference.reference,
        total_price: `₦${totalAmount.toLocaleString()}`
      }, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setModalStep('success');
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      // Still show success to user
      setModalStep('success');
    });
  };

  // Handle modal close
  const handleModalClose = () => {
    if (modalStep === 'success') {
      // Clear cart after successful order
      setCart([]);
    }
    setModalStep('closed');
    setUserName('');
    setUserEmail('');
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      <Navbar 
        cartCount={totalItems} 
        setView={setView} 
        currentView={view} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      {view === 'menu' ? (
        <main className="pt-28 pb-20 max-w-6xl mx-auto px-6">
          {/* Filters and Search */}
          <section className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {categories.map(cat => (
                <motion.button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeCategory === cat 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                      : 'bg-white text-slate-400 hover:text-slate-900 hover:shadow-md'
                  }`}
                >
                  {cat === 'Favorites' && (
                    <Heart 
                      size={14} 
                      className={activeCategory === 'Favorites' ? "fill-white" : ""} 
                    />
                  )}
                  {cat}
                  {cat === 'Favorites' && favorites.length > 0 && (
                    <span className="bg-white text-orange-600 text-xs font-black px-1.5 py-0.5 rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
              <input 
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="Find your craving..." 
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-orange-500/5 transition-all shadow-sm" 
              />
            </div>
          </section>
          
          {/* Menu Grid */}
          {filteredMenu.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg font-medium">
                No items found. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredMenu.map(item => (
                  <MenuCard 
                    key={item.id} 
                    item={item} 
                    onAdd={handleAddToCart} 
                    isFavorite={isFavorite(item.id)} 
                    onToggleFavorite={toggleFavorite} 
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </main>
      ) : (
        <AboutUs />
      )}

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onUpdateQty={updateQuantity} 
        onRemove={removeItem} 
        onClearCart={clearCart}
        onCheckout={handleCheckout} 
      />

      {/* Checkout Modal */}
      <CheckoutModal 
        step={modalStep} 
        userName={userName} 
        userEmail={userEmail}
        setUserName={setUserName} 
        setUserEmail={setUserEmail}
        total={totalAmount} 
        onPaystackSuccess={handlePaystackSuccess} 
        onClose={handleModalClose} 
      />
    </div>
  );
}

export default App;