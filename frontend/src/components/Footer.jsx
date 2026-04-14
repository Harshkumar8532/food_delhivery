import React from 'react';
import { Link } from 'react-router-dom';
import { APP_DATA } from '../data/appData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍛</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                Pet<span className="text-orange-500">Pooja</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              घर जैसा खाना, अब आपके दरवाज़े पर! 🚀<br/>
              Best food delivery in {APP_DATA.city} and across India.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">कंपनी</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/restaurants" className="hover:text-orange-500 transition-colors">Restaurants</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">संपर्क करें</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📞 {APP_DATA.contact.phone}</li>
              <li>📧 {APP_DATA.contact.email}</li>
              <li>👤 {APP_DATA.contact.name}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 PetPooja Technologies Pvt. Ltd — Made with ❤️ in India</p>
          <p className="text-xs text-gray-500">🇮🇳 स्वदेशी खाना, स्वदेशी ऐप</p>
        </div>
      </div>
    </footer>
  );
}
