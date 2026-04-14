import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, CreditCard, Banknote, Landmark, Smartphone, Shield, LogIn } from 'lucide-react';

export default function Checkout() {
  const { cart, user, placeOrder } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [loading, setLoading] = useState(false);
  const [upiId, setUpiId] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 30;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax + deliveryFee;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0 || !address) return;
    
    setLoading(true);
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const order = placeOrder({
      customerName: user?.name || 'Guest',
      customerAddress: address,
      phone: user?.phone || '0000000000',
      items: cart.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      totalAmount: total,
      paymentMethod: paymentMethod,
      deliveryPartner: {
        name: 'Amit Kumar',
        vehicle: 'Bike',
        vehicleNumber: 'PB10AB1234',
        phone: '9876543210'
      }
    });

    navigate('/success', { state: { orderId: order._id, total, paymentMethod } });
  };

  if (!user) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
        <p className="text-6xl mb-4">🔒</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Login करें पहले!</h2>
        <p className="text-gray-500 mb-8">Checkout के लिए पहले login करना होगा</p>
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
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
        <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
        <button onClick={() => navigate('/restaurants')} className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl">
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-900 dark:text-white">🔒 Secure Checkout</h1>
      
      <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 space-y-4 sm:space-y-6">
          
          {/* Address Box */}
          <div className="bg-white dark:bg-dark-surface p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin size={22} className="text-orange-500"/> डिलीवरी एड्रेस
            </h2>
            <textarea 
               required
               value={address}
               onChange={e => setAddress(e.target.value)}
               placeholder="पूरा पता डालें (मकान नंबर, गली, लैंडमार्क)..."
               className="w-full bg-gray-50 dark:bg-dark-background border border-gray-200 dark:border-dark-border rounded-xl p-4 outline-none focus:border-orange-500 min-h-[100px] sm:min-h-[120px] resize-none text-sm"
            ></textarea>
            
            {/* Quick Address Suggestions */}
            <div className="mt-3 flex flex-wrap gap-2">
              {['Sector 125, Kharar', 'Mohali Phase 8', 'Chandigarh Sector 17'].map(addr => (
                <button 
                  key={addr}
                  type="button"
                  onClick={() => setAddress(addr)}
                  className="text-xs bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-lg border border-orange-200 dark:border-orange-500/20 hover:bg-orange-100 transition-colors"
                >
                  📍 {addr}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Box */}
          <div className="bg-white dark:bg-dark-surface p-5 sm:p-6 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <CreditCard size={22} className="text-orange-500"/> भुगतान का तरीका
            </h2>
            
            <div className="space-y-3">
              <label className={`flex items-center gap-4 p-4 rounded-xl border ${paymentMethod === 'upi' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10' : 'border-gray-200 dark:border-dark-border'} cursor-pointer transition-colors`}>
                <input type="radio" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-orange-500 w-5 h-5" />
                <Smartphone className={paymentMethod === 'upi' ? 'text-orange-500' : 'text-gray-500'} size={22} />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">UPI (GPay / PhonePe / Paytm)</span>
                  <p className="text-xs text-gray-500 mt-0.5">Instant payment via UPI</p>
                </div>
              </label>

              {paymentMethod === 'upi' && (
                <div className="ml-10 sm:ml-12 mb-2">
                  <input 
                    type="text"
                    placeholder="Enter UPI ID (e.g. name@paytm)"
                    value={upiId}
                    onChange={e => setUpiId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl text-sm outline-none focus:border-orange-500"
                  />
                </div>
              )}
              
              <label className={`flex items-center gap-4 p-4 rounded-xl border ${paymentMethod === 'card' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10' : 'border-gray-200 dark:border-dark-border'} cursor-pointer transition-colors`}>
                <input type="radio" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-orange-500 w-5 h-5" />
                <CreditCard className={paymentMethod === 'card' ? 'text-orange-500' : 'text-gray-500'} size={22} />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Credit / Debit Card</span>
                  <p className="text-xs text-gray-500 mt-0.5">Visa, MasterCard, RuPay</p>
                </div>
              </label>
              
              <label className={`flex items-center gap-4 p-4 rounded-xl border ${paymentMethod === 'netbanking' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10' : 'border-gray-200 dark:border-dark-border'} cursor-pointer transition-colors`}>
                <input type="radio" checked={paymentMethod === 'netbanking'} onChange={() => setPaymentMethod('netbanking')} className="accent-orange-500 w-5 h-5" />
                <Landmark className={paymentMethod === 'netbanking' ? 'text-orange-500' : 'text-gray-500'} size={22} />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Net Banking</span>
                  <p className="text-xs text-gray-500 mt-0.5">All major banks supported</p>
                </div>
              </label>
              
              <label className={`flex items-center gap-4 p-4 rounded-xl border ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10' : 'border-gray-200 dark:border-dark-border'} cursor-pointer transition-colors`}>
                <input type="radio" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-orange-500 w-5 h-5" />
                <Banknote className={paymentMethod === 'cod' ? 'text-orange-500' : 'text-gray-500'} size={22} />
                <div className="flex-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Cash on Delivery</span>
                  <p className="text-xs text-gray-500 mt-0.5">Pay when you receive</p>
                </div>
              </label>
            </div>
          </div>
          
        </div>

        {/* Amount Summary Box */}
        <div className="w-full lg:w-96">
           <div className="bg-white dark:bg-dark-surface rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-dark-border sticky top-28">
             
             {/* Order Summary */}
             <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-4">📋 Order Summary</h3>
             <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-dark-border">
               {cart.map(item => (
                 <div key={item._id} className="flex justify-between">
                   <span className="truncate mr-2">{item.name} x{item.quantity}</span>
                   <span>₹{item.price * item.quantity}</span>
                 </div>
               ))}
             </div>

             <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-dark-border">
               <div className="flex justify-between">
                 <span>Subtotal</span>
                 <span>₹{subtotal}</span>
               </div>
               <div className="flex justify-between">
                 <span>Delivery Fee</span>
                 <span>₹{deliveryFee}</span>
               </div>
               <div className="flex justify-between">
                 <span>GST & Charges</span>
                 <span>₹{tax}</span>
               </div>
             </div>

             <div className="flex justify-between font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6 sm:mb-8">
               <span>Total</span>
               <span>₹{total}</span>
             </div>
             
             <button 
               disabled={loading} 
               type="submit" 
               className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all uppercase tracking-wide disabled:opacity-50 flex items-center justify-center gap-2"
             >
               <Shield size={18} />
               {loading ? 'Processing...' : `₹${total} Pay करें`}
             </button>
             <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed flex items-center justify-center gap-1">
               <Shield size={12} /> 100% Secure Payment — SSL Encrypted
             </p>
           </div>
        </div>
      </form>
    </div>
  );
}
