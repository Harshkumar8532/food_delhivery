import React, { useState, useContext } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { GlobalContext } from '../context/GlobalContext';
import { APP_DATA } from '../data/appData';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantListing() {
  const { selectedCity } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState('popularity');
  const [vegOnly, setVegOnly] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  let restaurants = [...APP_DATA.restaurants];

  // Sort
  if (sortBy === 'rating') {
    restaurants.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'delivery') {
    restaurants.sort((a, b) => parseInt(a.delivery_time) - parseInt(b.delivery_time));
  } else if (sortBy === 'cost_low') {
    restaurants.sort((a, b) => a.cost_for_two - b.cost_for_two);
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-28 hidden md:block border border-gray-200 dark:border-dark-border rounded-xl p-5 bg-white dark:bg-dark-surface">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Filter size={20} className="text-orange-500" /> Filters
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Sort By</h4>
              <div className="space-y-2">
                {[
                  { value: 'popularity', label: 'Popularity' },
                  { value: 'delivery', label: 'Delivery Time' },
                  { value: 'rating', label: 'Rating: High to Low' },
                  { value: 'cost_low', label: 'Cost: Low to High' },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input 
                      type="radio" 
                      name="sort" 
                      className="accent-orange-500" 
                      checked={sortBy === opt.value}
                      onChange={() => setSortBy(opt.value)}
                    /> 
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Quick Filters</h4>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input 
                  type="checkbox" 
                  className="accent-green-600 rounded" 
                  checked={vegOnly}
                  onChange={e => setVegOnly(e.target.checked)}
                /> 
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 border-2 border-green-600 rounded-sm flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                  </span>
                  Pure Veg
                </span>
              </label>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Cuisines</h4>
              <div className="space-y-2">
                {['North Indian', 'Punjabi', 'Pizza', 'Fast Food', 'Chinese', 'South Indian'].map(c => (
                  <label key={c} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="checkbox" className="accent-orange-500 rounded" /> {c}
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="md:hidden w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-border rounded-xl py-3 font-bold bg-white dark:bg-dark-surface"
          >
            <SlidersHorizontal size={18} /> Filters & Sort
          </button>

          {/* Mobile Filter Panel */}
          {showMobileFilter && (
            <div className="md:hidden mt-4 border border-gray-200 dark:border-dark-border rounded-xl p-4 bg-white dark:bg-dark-surface">
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Sort By</h4>
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full border border-gray-200 dark:border-dark-border rounded-lg p-2 text-sm bg-white dark:bg-dark-background"
                >
                  <option value="popularity">Popularity</option>
                  <option value="delivery">Delivery Time</option>
                  <option value="rating">Rating: High to Low</option>
                  <option value="cost_low">Cost: Low to High</option>
                </select>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input 
                  type="checkbox" 
                  className="accent-green-600 rounded" 
                  checked={vegOnly}
                  onChange={e => setVegOnly(e.target.checked)}
                /> 
                Pure Veg Only
              </label>
            </div>
          )}
        </aside>

        {/* Grid Listing */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {selectedCity} में डिलीवरी रेस्टोरेंट 🍽️
          </h2>
          <p className="text-gray-500 mb-6 text-sm">{restaurants.length} restaurants found</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>

          {restaurants.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl sm:text-6xl mb-4">🍽️</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">कोई रेस्टोरेंट नहीं मिला</h3>
              <p className="text-gray-500">Try changing your filters</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
