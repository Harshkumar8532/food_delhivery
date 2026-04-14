import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errMsgs, setErr] = useState('');
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErr('Please fill all required fields');
      return;
    }
    // Local registration
    setUser({ name, email, phone: phone || '0000000000' });
    navigate('/');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 flex justify-center min-h-[70vh] items-center">
      <div className="bg-white dark:bg-dark-surface p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border w-full max-w-md">
        
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Sign up 🚀</h2>
            <p className="text-sm text-gray-500">
              or <Link to="/login" className="text-orange-500 font-bold hover:underline">login to your account</Link>
            </p>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-orange-500/30">🍛</div>
        </div>

        {errMsgs && <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">{errMsgs}</p>}
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            required 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm" 
          />
          <input 
            required 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm" 
          />
          <input 
            type="tel" 
            placeholder="Phone Number (optional)" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm" 
          />
          <input 
            required 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full px-4 py-3.5 sm:py-4 border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-background rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm" 
          />
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wide mt-4">
            Account बनाएं
          </button>
        </form>
        
        <p className="text-xs text-gray-400 mt-6 text-center leading-relaxed">
          By creating an account, I accept PetPooja's Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
