import { Star, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavbarProps } from '../types';

export const Navbar = ({ 
  cartCount, 
  setView, 
  currentView, 
  onOpenCart 
}: NavbarProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-orange-50 px-6 py-4 flex justify-between items-center shadow-sm"
    >
      {/* Brand Logo */}
      <motion.div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={() => setView('menu')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="bg-orange-600 p-1.5 rounded-lg"
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Star className="text-white fill-white w-5 h-5" />
        </motion.div>
        <h1 className="text-xl font-black tracking-tighter italic text-slate-900">
          REGAL CRAVINGS
        </h1>
      </motion.div>

      {/* Navigation Actions */}
      <div className="flex items-center gap-6">
        <motion.button 
          onClick={() => setView('about')} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`font-bold text-xs tracking-widest transition-all hover:text-orange-600 ${
            currentView === 'about' ? 'text-orange-600' : 'text-slate-400'
          }`}
        >
          ABOUT
        </motion.button>

        {/* Cart Trigger */}
        <motion.button 
          onClick={onOpenCart} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2.5 bg-slate-100 rounded-2xl hover:bg-orange-50 transition-all"
        >
          <ShoppingBag 
            size={20} 
            className="text-slate-700 group-hover:text-orange-600 transition-colors" 
          />
          
          {/* Cart Counter Badge */}
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white"
              >
                {cartCount > 99 ? '99+' : cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.nav>
  );
};