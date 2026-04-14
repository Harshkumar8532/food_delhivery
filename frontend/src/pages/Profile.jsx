import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Navigate, Link } from 'react-router-dom';
import { User, MapPin, Package, Settings, LogOut, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
  const { user, logout, orders } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState('orders');

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-6 sm:gap-8">
      
      {/* Sidebar */}
      <aside className="w-full md:w-72 shrink-0">
        <div className="bg-white dark:bg-dark-surface rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border sticky top-28">
           <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-dark-border">
             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg shadow-orange-500/30">
               {user.name.charAt(0).toUpperCase()}
             </div>
             <div>
               <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{user.name}</h3>
               <p className="text-gray-500 text-xs sm:text-sm truncate max-w-[150px]">{user.email || 'user@petpooja.com'}</p>
             </div>
           </div>

           <nav className="space-y-2">
             <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${activeTab === 'orders' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-background'}`}>
               <Package size={20} /> मेरे ऑर्डर
             </button>
             <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${activeTab === 'addresses' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-background'}`}>
               <MapPin size={20} /> Addresses
             </button>
             <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${activeTab === 'settings' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-background'}`}>
               <Settings size={20} /> Settings
             </button>
             <Link to="/contact" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-background transition-colors text-sm sm:text-base">
               <Phone size={20} /> संपर्क करें
             </Link>
             <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors mt-6 sm:mt-8 text-sm sm:text-base">
               <LogOut size={20} /> Logout
             </button>
           </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="bg-white dark:bg-dark-surface rounded-xl p-5 sm:p-8 shadow-sm border border-gray-100 dark:border-dark-border min-h-[50vh] sm:min-h-[60vh]">
          
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">📦 मेरे ऑर्डर</h2>
              {orders.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-4xl sm:text-5xl mb-4">🍽️</p>
                  <p className="text-gray-500 mb-4 text-sm sm:text-base">अभी तक कोई ऑर्डर नहीं</p>
                  <Link to="/restaurants" className="text-orange-500 font-bold hover:underline text-sm sm:text-base">अभी ऑर्डर करें →</Link>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {orders.map((order) => (
                    <div key={order._id} className="border border-gray-200 dark:border-dark-border rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 border-b border-gray-100 dark:border-dark-border pb-4 gap-2">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">ORDER #{order._id.slice(-8).toUpperCase()}</p>
                          <p className="font-bold text-gray-900 dark:text-white text-lg">₹{order.totalAmount}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          order.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400' : 
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <div className="bg-orange-50 dark:bg-orange-500/10 p-2.5 sm:p-3 rounded-lg text-orange-500 shrink-0">
                          <Package size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">{order.items.length} Items</p>
                          <p className="text-xs sm:text-sm text-gray-500">{order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-dark-border text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row justify-between gap-2">
                        <span>📍 {order.customerAddress}</span>
                        <span>💳 {order.paymentMethod?.toUpperCase()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">📍 Saved Addresses</h2>
              <div className="space-y-3 mb-4">
                {['Home - Sector 125, Kharar', 'Office - Mohali Phase 8'].map(addr => (
                  <div key={addr} className="border border-gray-200 dark:border-dark-border rounded-xl p-4 flex items-center gap-3">
                    <MapPin size={18} className="text-orange-500 shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{addr}</span>
                  </div>
                ))}
              </div>
              <div className="border-2 border-dashed border-gray-200 dark:border-dark-border rounded-xl p-6 sm:p-8 text-center text-gray-500 cursor-pointer hover:border-orange-500 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base">
                + नया address जोड़ें
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">⚙️ Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                  <input type="text" defaultValue={user.name} className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input type="email" defaultValue={user.email} className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Phone</label>
                  <input type="tel" defaultValue={user.phone} className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 text-sm" />
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all text-sm">
                  Save Changes
                </button>
              </div>
            </div>
          )}
          
        </div>
      </main>

    </div>
  );
}
