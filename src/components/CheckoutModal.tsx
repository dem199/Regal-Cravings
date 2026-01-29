import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { PaystackButton } from 'react-paystack';
import type { CheckoutModalProps } from '../types';

export const CheckoutModal = ({ 
  step, 
  userName, 
  userEmail, 
  setUserEmail, 
  setUserName, 
  onPaystackSuccess, 
  onClose, 
  total 
}: CheckoutModalProps) => {
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: userEmail,
    amount: total * 100, // Paystack expects amount in kobo
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '', 
  };

  const componentProps = {
    ...config,
    text: `PAY ₦${total.toLocaleString()}`,
    onSuccess: onPaystackSuccess,
    onClose: () => console.log("Transaction window closed"),
  };

  const isFormValid = userEmail && userName;

  return (
    <AnimatePresence>
      {step !== 'closed' && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            onClick={step === 'loading' ? undefined : onClose}
          />

          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }} 
            animate={{ scale: 1, y: 0, opacity: 1 }} 
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full text-center shadow-2xl"
          >
            {step !== 'loading' && (
              <motion.button 
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </motion.button>
            )}

            {/* Form Step */}
            {step === 'form' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-left"
              >
                <div className="text-center mb-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <ShieldCheck className="text-orange-600" size={24} />
                  </motion.div>
                  <h2 className="text-2xl font-black italic text-slate-900">
                    Secure Checkout
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">
                    Enter your details to complete payment
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input 
                      required 
                      value={userName} 
                      onChange={e => setUserName(e.target.value)} 
                      placeholder="Enter your name" 
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/20 transition-all mt-1" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input 
                      required 
                      type="email" 
                      value={userEmail} 
                      onChange={e => setUserEmail(e.target.value)} 
                      placeholder="you@example.com" 
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/20 transition-all mt-1" 
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  {isFormValid ? (
                    <PaystackButton 
                      {...componentProps} 
                      className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-xl hover:bg-orange-700 transition-all active:scale-95" 
                    />
                  ) : (
                    <button 
                      disabled 
                      className="w-full bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed"
                    >
                      ENTER DETAILS TO PAY
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-400 text-center">
                  Your payment is secured by Paystack
                </p>
              </motion.div>
            )}

            {/* Loading Step */}
            {step === 'loading' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12"
              >
                <Loader2 className="w-12 h-12 text-orange-600 animate-spin mx-auto mb-4" />
                <p className="font-bold text-slate-800 text-lg">
                  Verifying Payment...
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Please wait while we confirm your order
                </p>
              </motion.div>
            )}

            {/* Success Step */}
            {step === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  Order Confirmed!
                </h2>
                <p className="text-slate-600 mt-2 text-sm">
                  Your order has been placed successfully. Check your email for details.
                </p>
                <motion.button 
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  RETURN TO MENU
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};