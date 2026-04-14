import React, { createContext, useState, useEffect } from 'react';
import { APP_DATA } from '../data/appData';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCity, setSelectedCity] = useState(APP_DATA.city);
  const [orders, setOrders] = useState([]);

  // Load state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('petpooja_user');
    const savedCart = localStorage.getItem('petpooja_cart');
    const savedTheme = localStorage.getItem('petpooja_theme');
    const savedCity = localStorage.getItem('petpooja_city');
    const savedOrders = localStorage.getItem('petpooja_orders');
    
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedCity) setSelectedCity(savedCity);
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  // Theme Sync
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('petpooja_theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('petpooja_theme', 'light');
    }
  };

  // State Sync
  useEffect(() => {
    if (user) localStorage.setItem('petpooja_user', JSON.stringify(user));
    else localStorage.removeItem('petpooja_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('petpooja_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('petpooja_city', selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    localStorage.setItem('petpooja_orders', JSON.stringify(orders));
  }, [orders]);

  // Cart Add/Remove logic
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find(i => i._id === item._id);
      if (existing) {
        return prevCart.map(i => i._id === item._id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };
  
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(i => i._id !== itemId));
  };
  
  const updateQuantity = (itemId, delta) => {
    setCart((prevCart) => prevCart.map(i => {
      if (i._id === itemId) {
        const newQ = (i.quantity || 1) + delta;
        return newQ > 0 ? { ...i, quantity: newQ } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const clearCart = () => setCart([]);

  const placeOrder = (orderData) => {
    const newOrder = {
      _id: 'ORD' + Date.now(),
      ...orderData,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      timeline: ['Order Placed', 'Restaurant Preparing']
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('petpooja_user');
  };

  return (
    <GlobalContext.Provider value={{ 
      user, setUser, logout, 
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      darkMode, toggleDarkMode,
      selectedCity, setSelectedCity,
      orders, placeOrder
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
