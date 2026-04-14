import React, { useContext, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { Percent, Trash2, Tag, LogIn } from 'lucide-react';
import { APP_DATA } from '../data/appData';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponMsg, setCouponMsg] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const taxAndCharges = Math.round(subtotal * 0.05);
  const discount = appliedCoupon ? appliedCoupon.discount || 0 : 0;
  const deliveryDiscount = appliedCoupon?.free_delivery ? deliveryFee : 0;
  const total = subtotal + taxAndCharges + deliveryFee - discount - deliveryDiscount;

  const applyCoupon = () => {
    const found = APP_DATA.offers.find(o => o.code === coupon.toUpperCase());
    if (found) {
      if (found.min_order && subtotal < found.min_order) {
        setCouponMsg(`Minimum order ₹${found.min_order} required`);
        return;
      }
      setAppliedCoupon(found);
      setCouponMsg(`🎉 Coupon "${found.code}" applied!`);
    } else {
      setCouponMsg('❌ Invalid coupon code');
    }
  };

  // Auth guard — must be logged in to view cart
  if (!user) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <p className="text-6xl mb-4">🔒</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Login करें पहले!</h2>
        <p className="text-gray-500 mb-8">Cart देखने के लिए पहले login करना होगा</p>
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
            <LogIn size={18} /> Login करें
          </Link>
          <Link to="/register" className="border-2 border-orange-500 text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-all">
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <p className="text-6xl mb-4">🛒</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">आपकी कार्ट खाली है!</h2>
        <p className="text-gray-500 mb-8">अभी कुछ स्वादिष्ट खाना ऑर्डर करें</p>
        <button onClick={() => navigate('/restaurants')} className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wide">
          रेस्टोरेंट देखें 🍽️
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        
        {/* Cart Items List */}
        <div className="flex-1">
          <div className="bg-white dark:bg-dark-surface rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-4">
              🛒 ऑर्डर डिटेल्स
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {cart.map(item => (
                <div key={item._id} className="flex justify-between items-center group">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-2xl">🍽️</div>}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        {item.isVeg ? (
                          <span className="w-3 h-3 flex items-center justify-center border border-green-600 rounded-sm"><span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span></span>
                        ) : (
                          <span className="w-3 h-3 flex items-center justify-center border border-red-600 rounded-sm"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span></span>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{item.name}</h4>
                      <p className="font-semibold text-gray-500 text-sm">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                    <div className="flex items-center border border-gray-200 dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface shadow-sm overflow-hidden h-9">
                      <button onClick={() => updateQuantity(item._id, -1)} className="px-2.5 sm:px-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-background font-bold h-full">-</button>
                      <span className="px-2 text-orange-500 font-bold text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, 1)} className="px-2.5 sm:px-3 text-orange-500 hover:bg-gray-100 dark:hover:bg-dark-background font-bold h-full">+</button>
                    </div>
                    <span className="font-bold w-14 sm:w-16 text-right text-sm sm:text-base">₹{(item.price * item.quantity)}</span>
                    <button onClick={() => removeFromCart(item._id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-dark-border">
              <input type="text" placeholder="कोई सुझाव? हम रेस्टोरेंट को बता देंगे..." className="w-full py-3 px-4 bg-gray-50 dark:bg-dark-background border border-gray-200 dark:border-dark-border rounded-xl text-sm outline-none focus:border-orange-500" />
            </div>
          </div>
        </div>

        {/* Price Breakdown Sidebar */}
        <div className="w-full lg:w-96 shrink-0">
          
          {/* Coupon Section */}
          <div className="bg-white dark:bg-dark-surface rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={18} className="text-orange-500" />
              <span className="font-bold text-gray-800 dark:text-gray-200">Coupon लगाएं</span>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Code डालें (SAVE50)"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="flex-1 px-3 py-2.5 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-lg text-sm outline-none focus:border-orange-500"
              />
              <button onClick={applyCoupon} className="bg-orange-500 text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors">
                Apply
              </button>
            </div>
            {couponMsg && <p className="text-sm mt-2 font-medium">{couponMsg}</p>}
          </div>

          {/* Bill Details */}
          <div className="bg-white dark:bg-dark-surface rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border">
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-4">💰 Bill Details</h3>
            
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-dark-border">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className={deliveryDiscount ? 'line-through text-gray-400' : ''}>₹{deliveryFee}</span>
              </div>
              {deliveryDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Free Delivery</span>
                  <span>-₹{deliveryDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST & Charges</span>
                <span>₹{taxAndCharges}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Coupon Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
            </div>
            
            <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white mb-6">
              <span>कुल भुगतान</span>
              <span>₹{total}</span>
            </div>
            
            <button onClick={() => navigate('/checkout')} className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wide">
              Checkout करें →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
