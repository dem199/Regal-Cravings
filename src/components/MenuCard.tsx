import { useState } from 'react';
import { Plus, Minus, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { MenuCardProps } from '../types';

export const MenuCard = ({ 
  item, 
  onAdd, 
  isFavorite, 
  onToggleFavorite 
}: MenuCardProps) => {
  const [qty, setQty] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAdd(item, qty);
    setQty(1);
    
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white p-4 rounded-[2rem] border border-slate-100 flex items-center gap-5 group hover:shadow-xl transition-all relative"
    >
      {/* Favorite Button */}
      <motion.button 
        onClick={() => onToggleFavorite(item.id)} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur shadow-sm hover:shadow-md transition-all"
      >
        <motion.div
          animate={isFavorite ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart 
            size={18} 
            className={isFavorite ? "fill-red-500 text-red-500" : "text-slate-300"} 
          />
        </motion.div>
      </motion.button>

      {/* Food Image */}
      <div className="relative overflow-hidden rounded-2xl flex-shrink-0">
        <motion.img 
          src={`/images/${item.image}`} 
          className="w-24 h-24 md:w-28 md:h-28 object-cover bg-slate-50" 
          alt={item.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Content */}
      <div className="flex-grow min-w-0">
        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">
          {item.category}
        </span>
        <h3 className="text-lg font-bold text-slate-800 leading-tight mt-1 truncate">
          {item.name}
        </h3>
        
        {/* Ingredients */}
        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
          {item.ingredients.join(', ')}
        </p>
        
        <div className="flex justify-between items-center mt-4 gap-3">
          <span className="text-xl font-black text-slate-900">
            ₦{item.price.toLocaleString()}
          </span>
          
          {/* Controls */}
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 px-1">
              <motion.button 
                onClick={() => setQty(q => Math.max(1, q - 1))} 
                whileTap={{ scale: 0.9 }}
                className="p-1 text-slate-400 hover:text-orange-600 transition-colors disabled:opacity-50"
                disabled={qty <= 1}
              >
                <Minus size={14}/>
              </motion.button>
              <span className="text-sm font-bold w-6 text-center text-slate-700">
                {qty}
              </span>
              <motion.button 
                onClick={() => setQty(q => q + 1)} 
                whileTap={{ scale: 0.9 }}
                className="p-1 text-slate-400 hover:text-orange-600 transition-colors"
              >
                <Plus size={14}/>
              </motion.button>
            </div>
            
            {/* Add to Cart Button */}
            <motion.button 
              onClick={handleAddToCart} 
              whileTap={{ scale: 0.9 }}
              animate={isAdding ? { scale: [1, 1.2, 1] } : {}}
              className="bg-slate-900 text-white p-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200"
            >
              <ShoppingCart size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};