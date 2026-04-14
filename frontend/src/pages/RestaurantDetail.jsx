import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Info, ShoppingCart, MapPin } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import { GlobalContext } from '../context/GlobalContext';
import { APP_DATA } from '../data/appData';

export default function RestaurantDetail() {
  const { id } = useParams();
  const { cart } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState(null);

  // Find restaurant from local data
  const restaurant = APP_DATA.restaurants.find(r => r._id === id);

  if (!restaurant) {
    return (
      <div className="pt-32 text-center">
        <p className="text-6xl mb-4">😕</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Restaurant not found</h2>
        <Link to="/restaurants" className="text-orange-500 font-bold hover:underline">← Back to restaurants</Link>
      </div>
    );
  }

  // Flatten all menu items
  const allMenuItems = restaurant.menu_categories.flatMap(cat => cat.items);
  const categories = restaurant.menu_categories.map(cat => cat.category);

  // Filter items by selected category
  const displayItems = activeCategory 
    ? restaurant.menu_categories.find(c => c.category === activeCategory)?.items || []
    : allMenuItems;

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="pt-24 pb-32 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Restaurant Header */}
      <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-surface shadow-sm border border-gray-100 dark:border-dark-border">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{restaurant.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-1">{restaurant.cuisines.join(', ')}</p>
            <p className="text-sm text-gray-400 flex items-center gap-1 mb-4">
              <MapPin size={14} /> {restaurant.location} — {restaurant.distance}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-sm font-semibold flex-wrap">
              <div className="flex items-center gap-1">
                <div className="bg-green-600 text-white px-1.5 py-0.5 rounded text-xs flex items-center gap-0.5">
                  <span>{restaurant.rating}</span>
                  <Star size={10} className="fill-white" />
                </div>
                <span className="text-gray-500 text-xs">({restaurant.total_reviews}+ ratings)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-gray-500" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Info size={16} className="text-gray-500" />
                <span>₹{restaurant.priceForTwo} for two</span>
              </div>
            </div>
          </div>
          {restaurant.offers && (
            <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 font-bold px-4 py-2.5 rounded-xl text-sm text-center whitespace-nowrap">
              🎁 {restaurant.offers}
            </div>
          )}
        </div>
      </div>

      {/* Menu Category Tabs */}
      <div className="flex gap-3 sm:gap-4 border-b border-gray-200 dark:border-dark-border mb-8 overflow-x-auto scrollbar-hide pb-2">
        <button 
          onClick={() => setActiveCategory(null)}
          className={`font-bold pb-2 whitespace-nowrap text-sm sm:text-base ${!activeCategory ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          All ({allMenuItems.length})
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-semibold pb-2 whitespace-nowrap text-sm sm:text-base ${activeCategory === cat ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu List */}
      <div>
        <h2 className="text-lg sm:text-xl font-extrabold mb-6 flex items-center gap-2">
          {activeCategory || 'All Items'} <span className="text-sm font-semibold text-gray-400">({displayItems.length})</span>
        </h2>
        
        <div className="flex flex-col">
          {displayItems.map(item => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Floating Cart Preview */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 w-full p-3 sm:p-4 pointer-events-none z-50 flex justify-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 pointer-events-auto text-white p-3 sm:p-4 rounded-xl shadow-2xl shadow-orange-500/30 flex items-center justify-between w-full max-w-2xl">
            <div className="font-bold flex items-center gap-2 text-sm sm:text-base">
              <span>{cartItemCount} item{cartItemCount > 1 && 's'}</span>
              <span className="text-white/60">|</span>
              <span>₹{cartTotal.toFixed(0)}</span>
            </div>
            <Link to="/cart" className="font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-white/10 px-3 py-1.5 rounded transition-colors text-sm sm:text-base">
              Cart देखें <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
