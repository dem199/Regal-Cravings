import { X, Plus, Minus, Trash2, ShoppingBag, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CartSidebarProps } from '../types';

export const CartSidebar = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQty, 
  onRemove, 
  onClearCart, 
  onCheckout 
}: CartSidebarProps) => {
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50" 
          />

          {/* Sidebar Drawer */}
          <motion.aside 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-orange-600" size={24} />
                <h2 className="text-xl font-black text-slate-900">Your Tray</h2>
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
                  {cart.length}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {cart.length > 0 && (
                  <motion.button 
                    onClick={onClearCart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 text-[10px] font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors"
                  >
                    <Trash size={12} /> CLEAR ALL
                  </motion.button>
                )}
                <motion.button 
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="text-slate-200" size={40} />
                  </div>
                  <p className="text-slate-400 italic font-medium">
                    Your tray is currently empty.
                  </p>
                  <motion.button 
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-orange-600 font-bold text-sm hover:underline"
                  >
                    Start adding delicious meals!
                  </motion.button>
                </motion.div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div 
                      layout
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 items-center border-b border-slate-50 pb-4 last:border-b-0"
                    >
                      <img 
                        
                         src={`${import.meta.env.BASE_URL}${item.image}`} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover bg-slate-50 flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-orange-600 font-black text-xs mt-1">
                          ₦{(item.price * item.qty).toLocaleString()}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-1">
                        <motion.button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          whileTap={{ scale: 0.9 }}
                          className="text-slate-500 hover:text-orange-600 transition-colors"
                        >
                          <Minus size={14}/>
                        </motion.button>
                        <span className="text-sm font-bold w-4 text-center text-slate-700">
                          {item.qty}
                        </span>
                        <motion.button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          whileTap={{ scale: 0.9 }}
                          className="text-slate-500 hover:text-orange-600 transition-colors"
                        >
                          <Plus size={14}/>
                        </motion.button>
                      </div>

                      <motion.button 
                        onClick={() => onRemove(item.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-slate-300 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18}/>
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer / Checkout Section */}
            {cart.length > 0 && (
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="p-8 bg-white border-t border-slate-100"
              >
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      Subtotal
                    </p>
                    <h3 className="text-3xl font-black text-slate-900">
                      ₦{total.toLocaleString()}
                    </h3>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">
                    VAT & Delivery calculated at checkout
                  </p>
                </div>
                <motion.button 
                  onClick={onCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-orange-600 transition-all"
                >
                  PROCEED TO PAYMENT
                </motion.button>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};