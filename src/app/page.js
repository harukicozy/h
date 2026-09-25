'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthMessage('');

    const endpoint = isSignupMode ? '/api/auth/signup' : '/api/auth/login';
    const payload = isSignupMode 
      ? { email, password, username }
      : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setAuthMessage(isSignupMode ? '✅ Account created! Redirecting...' : '✅ Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1500);
      } else {
        setAuthMessage(data.error || 'Authentication failed');
      }
    } catch (error) {
      setAuthMessage('An error occurred. Please try again.');
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/50">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Haruki Services
              </h1>
              <p className="text-xs text-gray-500">Discord bots and integrations</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex gap-8 items-center">
            <motion.a
              href="#services"
              className="text-gray-300 hover:text-purple-400 transition"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#why"
              className="text-gray-300 hover:text-purple-400 transition"
              whileHover={{ scale: 1.05 }}
            >
              Why Haruki
            </motion.a>
            <motion.button
              onClick={() => setShowLoginModal(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-600/50 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📧</span> Email Login
            </motion.button>
          </nav>

          <motion.button
            className="md:hidden text-2xl text-purple-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden bg-gray-900/95 border-t border-gray-800"
        >
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-purple-400">
              Services
            </a>
            <a href="#why" className="block text-gray-300 hover:text-purple-400">
              Why Haruki
            </a>
            <button
              onClick={() => setShowLoginModal(true)}
              className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold text-center"
            >
              Email Login
            </button>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-2 mb-8 w-fit"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></motion.div>
            <span className="text-xs uppercase tracking-widest text-gray-400">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants}>Build better tools</motion.span>
            <br />
            <motion.span variants={itemVariants}>
              for your <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                community
              </span>
              .
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-2xl"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            We build custom Discord bots, integrations, and websites that fit the way your community works.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-600/50 transition flex items-center justify-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View services <span>→</span>
            </motion.button>
            <motion.button
              onClick={() => setShowLoginModal(true)}
              className="border-2 border-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-600/30 transition flex items-center justify-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📧</span> Sign in with Email
            </motion.button>
          </motion.div>

          {/* Features Row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 border-t border-gray-800/50 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <span className="text-green-500 text-lg">✓</span> Secure checkout
            </motion.div>
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <span className="text-purple-500 text-lg">💬</span> Talk directly with us
            </motion.div>
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <span className="text-blue-500 text-lg">⚙️</span> Made for your needs
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Why Haruki Section */}
      <section id="why" className="bg-gradient-to-b from-transparent via-purple-900/10 to-transparent border-t border-gray-800/50 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">Why Haruki</p>
              <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Everything you need.
                <br />
                Nothing confusing.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Choose a service, see the price, and follow your project in one private place. We keep the process clear from your first message to launch.
              </p>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              className="md:w-1/2 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Feature 1 */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-6 hover:border-blue-600/60 transition-all hover:bg-blue-900/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-sm text-blue-400 mb-3 font-semibold">01 / PRIVATE</div>
                <h4 className="text-2xl font-bold mb-3">A safe project area</h4>
                <p className="text-gray-400">
                  Sign in with your email to view your messages, files, updates, and orders in one private place.
                </p>
                <div className="mt-4 text-4xl">🔒</div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-6 hover:border-purple-600/60 transition-all hover:bg-purple-900/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-sm text-purple-400 mb-3 font-semibold">02 / CLEAR CHOICES</div>
                <h4 className="text-2xl font-bold mb-3">Know what you are buying</h4>
                <p className="text-gray-400">
                  Compare plans, choose any extras, and see your total before checkout.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="border border-purple-500 rounded-lg p-3 bg-purple-500/10 hover:bg-purple-500/20 transition">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Selected plan</span>
                    </div>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span className="text-sm text-gray-400">Optional extras</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="bg-gradient-to-br from-pink-900/20 to-orange-900/20 border border-pink-800/30 rounded-2xl p-6 hover:border-pink-600/60 transition-all hover:bg-pink-900/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-sm text-pink-400 mb-3 font-semibold">03 / ORGANIZED</div>
                <h4 className="text-2xl font-bold mb-3">See every update</h4>
                <p className="text-gray-400">
                  Messages, files, choices, and project progress stay together, so you always know what is happening.
                </p>
                <div className="mt-4 text-4xl">📊</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black border-t border-gray-800/50 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h3>
            <p className="text-gray-400 text-lg mb-12">Choose from our suite of tools to power your community</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="group bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-800/30 rounded-2xl p-8 hover:border-purple-600/60 transition-all hover:bg-purple-900/40 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/0 transition-all"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🤖</div>
                <h4 className="font-bold text-lg mb-3">Discord Bots</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Custom bots with moderation, fun, and utility features tailored to your server</p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/60 transition-all hover:bg-blue-900/40 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/0 transition-all"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="font-bold text-lg mb-3">Integrations</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Connect your tools and automate workflows to save time</p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-800/30 rounded-2xl p-8 hover:border-pink-600/60 transition-all hover:bg-pink-900/40 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:to-pink-600/0 transition-all"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🌐</div>
                <h4 className="font-bold text-lg mb-3">Website Dev</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Beautiful, fast websites built with modern tech for your community</p>
              </div>
            </motion.div>

            <motion.div
              className="group bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-800/30 rounded-2xl p-8 hover:border-orange-600/60 transition-all hover:bg-orange-900/40 overflow-hidden relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/10 group-hover:to-orange-600/0 transition-all"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🔐</div>
                <h4 className="font-bold text-lg mb-3">Secure Workspaces</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Private collaboration areas for your team to work together</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800/50 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="font-bold text-xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Haruki Services
              </h4>
              <p className="text-sm text-gray-400">Building better tools for communities</p>
            </div>
            <div className="flex gap-8">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition font-medium"
                whileHover={{ scale: 1.1 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition font-medium"
                whileHover={{ scale: 1.1 }}
              >
                Discord
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition font-medium"
                whileHover={{ scale: 1.1 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2026 Haruki Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showLoginModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => {
            setShowLoginModal(false);
            setIsSignupMode(false);
            setAuthMessage('');
          }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-purple-800/30 rounded-2xl p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{isSignupMode ? 'Create Account' : 'Sign In'}</h2>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setIsSignupMode(false);
                  setAuthMessage('');
                }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {isSignupMode && (
                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="your_username"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              {authMessage && (
                <div className={`text-sm p-3 rounded-lg ${authMessage.includes('✅') || authMessage.includes('successful') ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                  {authMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-600/50 transition disabled:opacity-50"
              >
                {isLoading ? (isSignupMode ? 'Creating account...' : 'Signing in...') : (isSignupMode ? 'Create Account' : 'Sign In')}
              </button>

              <p className="text-sm text-gray-400 text-center">
                {isSignupMode ? (
                  <>Already have an account? <button type="button" onClick={() => { setIsSignupMode(false); setAuthMessage(''); }} className="text-purple-400 hover:text-purple-300">Sign In</button></>
                ) : (
                  <>Don't have an account? <button type="button" onClick={() => { setIsSignupMode(true); setAuthMessage(''); }} className="text-purple-400 hover:text-purple-300">Create one</button></>
                )}
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
