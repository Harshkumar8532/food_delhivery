import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ChevronDown, Star, Truck, Shield, Clock, Sparkles } from 'lucide-react';
import { GlobalContext } from '../context/GlobalContext';
import { APP_DATA } from '../data/appData';
import RestaurantCard from '../components/RestaurantCard';

const categories = [
  { name: 'North Indian', emoji: '🍛', hindiName: 'उत्तर भारतीय' },
  { name: 'Pizza', emoji: '🍕', hindiName: 'पिज़्ज़ा' },
  { name: 'Biryani', emoji: '🍚', hindiName: 'बिरयानी' },
  { name: 'Burger', emoji: '🍔', hindiName: 'बर्गर' },
  { name: 'Chinese', emoji: '🥡', hindiName: 'चाइनीज़' },
  { name: 'Desserts', emoji: '🍰', hindiName: 'मिठाई' },
  { name: 'Thali', emoji: '🥘', hindiName: 'थाली' },
  { name: 'Street Food', emoji: '🌮', hindiName: 'स्ट्रीट फ़ूड' },
];

const stats = [
  { icon: Truck, label: 'Fast Delivery', value: '20-40 mins', hindi: 'तेज़ डिलीवरी' },
  { icon: Star, label: 'Top Rated', value: '4.4+ ★', hindi: 'बेस्ट रेटिंग' },
  { icon: Shield, label: 'Safe & Hygienic', value: '100%', hindi: 'सुरक्षित और स्वच्छ' },
  { icon: Clock, label: 'Available', value: '24x7', hindi: 'हमेशा उपलब्ध' },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const { selectedCity, setSelectedCity } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const handleSearch = () => {
    navigate('/restaurants');
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-6xl sm:text-8xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🍛</div>
            <div className="absolute top-20 right-20 text-5xl sm:text-7xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>🍕</div>
            <div className="absolute bottom-20 left-20 text-5xl sm:text-6xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🍔</div>
            <div className="absolute bottom-10 right-10 text-5xl sm:text-7xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>🥘</div>
            <div className="absolute top-1/2 left-1/3 text-4xl sm:text-5xl animate-bounce hidden sm:block" style={{ animationDelay: '2s', animationDuration: '3s' }}>🧁</div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-md text-white font-bold text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              🎉 ₹50 OFF on your first order — Code: <span className="text-yellow-300">SAVE50</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight"
          >
            स्वाद का सफ़र,<br/>
            <span className="text-yellow-300">PetPooja</span> के संग! 🚀
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 font-medium"
          >
            घर जैसा खाना, अब आपके दरवाज़े पर — <span className="font-bold">{selectedCity}</span> में सबसे तेज़ डिलीवरी!
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center shadow-2xl shadow-black/20 mx-auto w-full max-w-2xl gap-2 sm:gap-0"
          >
            <div className="relative">
              <button 
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="px-4 py-2.5 text-gray-600 flex items-center gap-2 hover:bg-gray-50 rounded-xl transition-colors w-full sm:w-auto justify-between sm:justify-start"
              >
                <MapPin size={18} className="text-orange-500" />
                <span className="font-semibold truncate">{selectedCity}</span>
                <ChevronDown size={14} />
              </button>
              {showCityDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-dark-surface rounded-xl shadow-xl border border-gray-200 dark:border-dark-border z-50 w-48 max-h-60 overflow-y-auto">
                  {APP_DATA.cities.map(city => (
                    <button 
                      key={city}
                      onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-orange-50 transition-colors ${selectedCity === city ? 'text-orange-500 font-bold bg-orange-50' : 'text-gray-700'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            <input 
              type="text" 
              placeholder="Restaurant, dish या cuisine खोजें..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              className="flex-1 px-4 py-2.5 outline-none text-gray-800 text-sm sm:text-base" 
            />
            <button 
              onClick={handleSearch} 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              <Search size={18} /> खोजें
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white dark:bg-dark-surface border-y border-gray-100 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 dark:bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <stat.icon size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{stat.hindi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Browsing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">क्या खाने का मन है? 😋</h2>
        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Choose from your favourite cuisines</p>
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 scrollbar-hide">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/restaurants')}
              className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer min-w-[80px] sm:min-w-[100px]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 flex items-center justify-center text-3xl sm:text-4xl shadow-lg shadow-orange-500/10 border border-orange-100 dark:border-orange-500/20 hover:shadow-xl transition-all">
                {cat.emoji}
              </div>
              <span className="font-bold text-xs sm:text-sm text-gray-800 dark:text-gray-200">{cat.name}</span>
              <span className="text-xs text-gray-500">{cat.hindiName}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white flex items-center gap-2">
          <Sparkles className="text-orange-500" size={24} /> ऑफर्स जो दिल खुश कर दें!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {APP_DATA.offers.map((offer, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 sm:p-6 text-white cursor-pointer shadow-lg shadow-orange-500/20"
              onClick={() => navigate('/restaurants')}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl sm:text-3xl shrink-0">
                  {offer.free_delivery ? '🛵' : '🎁'}
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">Code: {offer.code}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{offer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-12 sm:mb-16">
        <div className="flex justify-between items-end mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{selectedCity} के टॉप रेस्टोरेंट 🏆</h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">Handpicked by locals</p>
          </div>
          <button onClick={() => navigate('/restaurants')} className="text-orange-500 font-bold hover:underline text-sm sm:text-base">
            सब देखें →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {APP_DATA.restaurants.map(restaurant => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 dark:bg-dark-surface py-12 sm:py-16 border-y border-gray-100 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-white">
            हमारे ग्राहक क्या कहते हैं ⭐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {APP_DATA.reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-background p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{review.user}</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            भूख लगी है? 🤤
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">अभी ऑर्डर करें, कुछ ही मिनटों में खाना आपके पास!</p>
          <button 
            onClick={() => navigate('/restaurants')} 
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all text-base sm:text-lg"
          >
            अभी ऑर्डर करें 🍛
          </button>
        </motion.div>
      </section>
    </div>
  );
}
