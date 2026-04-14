import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, MapPin, Moon, Sun, Phone, ChevronDown, X, Menu } from 'lucide-react';
import { GlobalContext } from '../context/GlobalContext';
import { APP_DATA } from '../data/appData';

export default function Navbar() {
  const { cart, user, logout, darkMode, toggleDarkMode, selectedCity, setSelectedCity } = useContext(GlobalContext);
  const [showCityModal, setShowCityModal] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const filteredCities = APP_DATA.cities.filter(c => c.toLowerCase().includes(citySearch.toLowerCase()));

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo & Location */}
            <div className="flex items-center gap-4 sm:gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <span className="text-white font-bold text-lg sm:text-xl">🍛</span>
                </div>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-gray-900 dark:text-white">
                  Pet<span className="text-orange-500">Pooja</span>
                </span>
              </Link>
              
              <button 
                onClick={() => setShowCityModal(true)}
                className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors cursor-pointer"
              >
                <MapPin size={16} className="text-orange-500" />
                <span className="font-semibold truncate max-w-[120px]">{selectedCity}</span>
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-5">
              <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link to="/contact" className="flex items-center gap-1.5 font-medium hover:text-orange-500 transition-colors text-gray-700 dark:text-gray-200 text-sm">
                <Phone size={18} /> <span>संपर्क</span>
              </Link>

              {user ? (
                <div className="flex items-center gap-3">
                  <Link to="/profile" className="flex items-center gap-2 font-medium hover:text-orange-500 transition-colors text-gray-700 dark:text-gray-200 text-sm">
                    <User size={18} /> <span>{user.name}</span>
                  </Link>
                  <button onClick={logout} className="text-xs text-gray-500 hover:text-orange-500 font-medium">Logout</button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                   <Link to="/login" className="font-semibold text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors text-sm">Log in</Link>
                   <Link to="/register" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all text-sm">Sign up</Link>
                </div>
              )}

              <Link to="/cart" className="relative flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors">
                <ShoppingCart size={22} />
                <span className="font-semibold text-sm">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              <button onClick={() => setShowCityModal(true)} className="text-gray-600 dark:text-gray-300 p-1">
                <MapPin size={20} className="text-orange-500" />
              </button>
              <Link to="/cart" className="relative text-gray-700 dark:text-gray-200 p-1">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 dark:text-gray-200 p-1">
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border px-4 py-4 space-y-3 shadow-lg">
            <button onClick={toggleDarkMode} className="w-full flex items-center gap-3 text-gray-700 dark:text-gray-200 py-2">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 py-2">
              <Phone size={18} /> <span className="text-sm font-medium">संपर्क करें</span>
            </Link>
            {user ? (
              <>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 py-2">
                  <User size={18} /> <span className="text-sm font-medium">{user.name}</span>
                </Link>
                <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-sm text-red-500 font-medium py-2">Logout</button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium">Log in</Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm font-medium">Sign up</Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* City Selection Modal */}
      {showCityModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowCityModal(false)}>
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">📍 शहर चुनें</h3>
              <button onClick={() => setShowCityModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <input 
              type="text"
              placeholder="Search city..."
              value={citySearch}
              onChange={e => setCitySearch(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 mb-4 text-sm"
            />
            <div className="max-h-64 overflow-y-auto space-y-1">
              {filteredCities.map(city => (
                <button 
                  key={city}
                  onClick={() => { setSelectedCity(city); setShowCityModal(false); setCitySearch(''); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    selectedCity === city 
                      ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-background'
                  }`}
                >
                  <MapPin size={14} className="inline mr-2" />
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
