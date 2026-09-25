'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get email from cookie or localStorage
    const emailCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('user_email='))
      ?.split('=')[1];
    
    if (emailCookie) {
      setEmail(decodeURIComponent(emailCookie));
    } else {
      // Redirect to home if not logged in
      window.location.href = '/';
    }
  }, []);

  const handleLogout = () => {
    // Clear cookie
    document.cookie = "user_email=; max-age=0;";
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Welcome! 👋</h2>
          <p className="text-xl text-gray-300 mb-6">
            You are logged in as: <span className="font-semibold text-purple-400">{email}</span>
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-bold mb-2">📊 Your Projects</h3>
              <p className="text-gray-400">No projects yet. Start creating!</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-bold mb-2">💬 Messages</h3>
              <p className="text-gray-400">No messages yet.</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-bold mb-2">⚙️ Settings</h3>
              <p className="text-gray-400">Update your profile and preferences.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
