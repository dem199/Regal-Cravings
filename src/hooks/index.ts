import { useState, useEffect, useMemo } from 'react';
import type { CartItem, FoodItem } from '../types';
import { storage } from '../utils/storage';

// Hook for managing cart state with localStorage persistence
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => storage.getCart());

  useEffect(() => {
    storage.setCart(cart);
  }, [cart]);

  const addToCart = (item: FoodItem, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, qty: i.qty + quantity } 
            : i
        );
      }
      return [...prev, { ...item, qty: quantity }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, qty: Math.max(1, item.qty + delta) } 
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to empty your tray?")) {
      setCart([]);
      storage.clearCart();
    }
  };

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
    [cart]
  );

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  return {
    cart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalAmount,
    totalItems,
    setCart
  };
};

// Hook for managing favorites with localStorage persistence
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => storage.getFavorites());

  useEffect(() => {
    storage.setFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id) 
        : [...prev, id]
    );
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
};

// Hook for filtering menu items
export const useFilteredMenu = (
  menuItems: FoodItem[],
  searchTerm: string,
  activeCategory: string,
  favorites: number[]
) => {
  return useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      if (activeCategory === 'Favorites') {
        return favorites.includes(item.id) && matchesSearch;
      }
      
      return (activeCategory === 'All' || item.category === activeCategory) && matchesSearch;
    });
  }, [menuItems, searchTerm, activeCategory, favorites]);
};