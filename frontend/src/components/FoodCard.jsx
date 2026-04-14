import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function FoodCard({ item }) {
  const { cart, addToCart, updateQuantity } = useContext(GlobalContext);

  const cartItem = cart.find(i => i._id === item._id);

  return (
    <div className="flex justify-between items-start py-6 border-b border-gray-100 dark:border-dark-border group">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 mb-1">
          {item.isVeg ? (
            <span className="w-4 h-4 border-2 border-green-600 rounded flex items-center justify-center"><span className="w-2 h-2 bg-green-600 rounded-full"></span></span>
          ) : (
            <span className="w-4 h-4 border-2 border-red-600 rounded flex items-center justify-center"><span className="w-2 h-2 bg-red-600 rounded-full"></span></span>
          )}
          {item.tags?.includes('Bestseller') && (
            <span className="text-orange-500 text-xs font-bold bg-orange-500/10 px-1.5 py-0.5 rounded">⭐ Bestseller</span>
          )}
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.name}</h3>
        <p className="font-semibold text-gray-800 dark:text-gray-200 mt-1">₹{item.price}</p>
        {item.rating && (
          <p className="text-xs text-green-600 font-medium mt-1">★ {item.rating} rating</p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 md:line-clamp-none">{item.description}</p>
      </div>

      <div className="relative w-[120px] h-[120px] shrink-0">
        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-border">
          {item.image ? (
             <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl">🍽️</div>
          )}
        </div>
        
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max">
          {!cartItem ? (
            <button 
              onClick={() => addToCart(item)}
              className="bg-white dark:bg-dark-surface text-orange-500 border border-gray-200 dark:border-dark-border font-bold shadow-md rounded-lg px-8 py-2 text-sm uppercase transition-all hover:bg-orange-50 dark:hover:bg-dark-background hover:shadow-lg"
            >
              ADD
            </button>
          ) : (
            <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-md rounded-lg flex items-center overflow-hidden">
              <button onClick={() => updateQuantity(item._id, -1)} className="px-3 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-background font-bold text-lg">-</button>
              <span className="px-2 text-orange-500 font-bold text-sm tracking-widest">{cartItem.quantity}</span>
              <button onClick={() => updateQuantity(item._id, 1)} className="px-3 py-2 text-orange-500 hover:bg-gray-100 dark:hover:bg-dark-background font-bold text-lg">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
