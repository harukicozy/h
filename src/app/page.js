export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Haruki Services</h1>
              <p className="text-xs text-gray-400">Discord bots and integrations</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#why" className="hover:text-purple-400 transition">Why Haruki</a>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Sign in with Discord
            </button>
          </nav>
          <button className="md:hidden">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-8 w-fit">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs uppercase tracking-widest text-gray-400">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-4xl">
            Build better tools
            <br />
            for your <span className="text-purple-500">community</span>.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            We build custom Discord bots, integrations, and websites that fit the way your community works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2">
              View services <span>→</span>
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-400 transition flex items-center justify-center gap-2">
              <span>🎮</span> Sign in with Discord
            </button>
          </div>

          {/* Features Row */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 border-t border-gray-800 pt-8">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Secure checkout
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">💬</span> Talk directly with us
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">⚙️</span> Made for your needs
            </div>
          </div>
        </div>
      </main>

      {/* Why Haruki Section */}
      <section id="why" className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column */}
            <div className="md:w-1/2">
              <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">Why Haruki</p>
              <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">
                Everything you need.<br />
                Nothing confusing.
              </h3>
              <p className="text-gray-300 text-lg">
                Choose a service, see the price, and follow your project in one private place. We keep the process clear from your first message to launch.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="md:w-1/2 space-y-12">
              {/* Feature 1 */}
              <div>
                <div className="text-sm text-gray-400 mb-3">01 / PRIVATE</div>
                <h4 className="text-2xl font-bold mb-3">A safe project area</h4>
                <p className="text-gray-400">
                  Sign in with Discord to view your messages, files, updates, and orders in one private place.
                </p>
                <div className="mt-6 text-blue-500">
                  <span>🔒</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="text-sm text-gray-400 mb-3">02 / CLEAR CHOICES</div>
                <h4 className="text-2xl font-bold mb-3">Know what you are buying</h4>
                <p className="text-gray-400">
                  Compare plans, choose any extras, and see your total before checkout.
                </p>
                {/* Plan Selection Preview */}
                <div className="mt-6 space-y-2">
                  <div className="border border-purple-500 rounded p-3 bg-purple-500/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Selected plan</span>
                    </div>
                  </div>
                  <div className="border border-gray-700 rounded p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span className="text-sm text-gray-400">Optional extras</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="text-sm text-gray-400 mb-3">03 / ORGANIZED</div>
                <h4 className="text-2xl font-bold mb-3">See every update</h4>
                <p className="text-gray-400">
                  Messages, files, choices, and project progress stay together, so you always know what is happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="font-bold mb-2">Discord Bots</h4>
              <p className="text-sm text-gray-400">Custom bots with moderation, fun, and utility features</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-2">Integrations</h4>
              <p className="text-sm text-gray-400">Connect your tools and automate workflows</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-bold mb-2">Website Dev</h4>
              <p className="text-sm text-gray-400">Beautiful, fast websites for your community</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="font-bold mb-2">Secure Workspaces</h4>
              <p className="text-sm text-gray-400">Private collaboration areas for your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="font-bold mb-2">Haruki Services</h4>
              <p className="text-sm text-gray-400">Building better tools for communities</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Haruki Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
