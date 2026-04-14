import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Bike, Phone, Package } from 'lucide-react';

export default function Success() {
  const location = useLocation();
  const orderId = location.state?.orderId;
  const total = location.state?.total;
  const paymentMethod = location.state?.paymentMethod;

  if (!orderId) return <Navigate to="/" />;

  const paymentLabels = {
    upi: 'UPI',
    card: 'Card',
    netbanking: 'Net Banking',
    cod: 'Cash on Delivery'
  };

  return (
    <div className="pt-28 sm:pt-32 pb-20 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-6 sm:mb-8"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/30">
          <CheckCircle size={48} className="text-white" />
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4"
      >
        ऑर्डर हो गया! 🎉
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mb-2"
      >
        Order <span className="font-bold text-orange-500">#{orderId.slice(-6).toUpperCase()}</span> successfully placed!
      </motion.p>
      
      {total && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-gray-500 mb-6"
        >
          Amount: <span className="font-bold">₹{total}</span> via <span className="font-medium">{paymentLabels[paymentMethod] || paymentMethod}</span>
        </motion.p>
      )}

      {/* Delivery Info Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-2xl p-5 sm:p-6 w-full max-w-md mb-6 sm:mb-8 shadow-sm"
      >
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100 dark:border-dark-border">
          <div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 rounded-xl flex items-center justify-center">
            <Bike size={24} className="text-orange-500" />
          </div>
          <div className="text-left">
            <p className="font-bold text-gray-900 dark:text-white">Amit Kumar</p>
            <p className="text-sm text-gray-500">Bike — PB10AB1234</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Package size={16} className="text-orange-500" />
          <span className="font-semibold text-orange-500">Estimated: 30 - 45 Minutes</span>
        </div>
      </motion.div>

      {/* Order Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md mb-6 sm:mb-8"
      >
        <div className="flex items-center justify-between relative">
          {['Placed', 'Preparing', 'Picked Up', 'Delivered'].map((step, i) => (
            <div key={step} className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                i <= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-dark-border text-gray-500'
              }`}>
                {i <= 1 ? '✓' : i + 1}
              </div>
              <span className="text-xs mt-2 text-gray-500 text-center">{step}</span>
            </div>
          ))}
          <div className="absolute top-4 sm:top-5 left-0 right-0 h-0.5 bg-gray-200 dark:bg-dark-border -z-0">
            <div className="h-full bg-green-500 w-[35%]"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <Link to="/profile" className="bg-white dark:bg-dark-surface text-gray-800 dark:text-white border border-gray-200 dark:border-dark-border font-bold px-6 sm:px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base">
          📦 Track Order
        </Link>
        <Link to="/restaurants" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
          और ऑर्डर करें 🍛
        </Link>
      </motion.div>
    </div>
  );
}
