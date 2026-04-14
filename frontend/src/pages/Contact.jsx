import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, MapPin, Clock, MessageCircle } from 'lucide-react';
import { APP_DATA } from '../data/appData';

export default function Contact() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">
          📞 संपर्क करें
        </h1>
        <p className="text-base sm:text-lg text-gray-500">हमसे जुड़ें — हम हमेशा आपकी मदद के लिए तैयार हैं!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-orange-500/20"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Details</h2>
          
          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <User size={22} />
              </div>
              <div>
                <p className="text-white/70 text-sm">Name</p>
                <p className="font-bold text-lg">{APP_DATA.contact.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-white/70 text-sm">Mobile No.</p>
                <a href={`tel:${APP_DATA.contact.phone}`} className="font-bold text-lg hover:underline">
                  +91 {APP_DATA.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-white/70 text-sm">Email</p>
                <a href={`mailto:${APP_DATA.contact.email}`} className="font-bold text-lg hover:underline">
                  {APP_DATA.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-white/70 text-sm">Location</p>
                <p className="font-bold text-lg">{APP_DATA.city}, Punjab, India 🇮🇳</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-white/70 text-sm">Working Hours</p>
                <p className="font-bold text-lg">24x7 Available ✅</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-surface rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-dark-border"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <MessageCircle size={24} className="text-orange-500" /> हमें मैसेज करें
          </h2>
          
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('धन्यवाद! आपका मैसेज भेज दिया गया है। 🙏'); }}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">नाम</label>
              <input 
                required
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 transition-colors text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">फ़ोन</label>
              <input 
                required
                type="tel" 
                placeholder="+91 XXXXX XXXXX" 
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">मैसेज</label>
              <textarea 
                required
                placeholder="अपना सवाल या सुझाव यहाँ लिखें..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 transition-colors text-sm resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all uppercase tracking-wide">
              मैसेज भेजें 📩
            </button>
          </form>
        </motion.div>

      </div>

      {/* Quick Help */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 sm:mt-12 bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/20 rounded-2xl p-6 sm:p-8 text-center"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">तुरंत मदद चाहिए? 🤝</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">अभी कॉल करें, हम तुरंत मदद करेंगे!</p>
        <a 
          href={`tel:${APP_DATA.contact.phone}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
        >
          <Phone size={18} /> +91 {APP_DATA.contact.phone}
        </a>
      </motion.div>
    </div>
  );
}
