'use client';

import { motion } from 'framer-motion';

export default function ServersSlider() {
  const servers = [
    { name: 'Cozy Tiers', role: 'Bot Developer' },
    { name: 'R6 Armada', role: 'Web Developer' },
    { name: 'EclipseSMP', role: 'Bot Developer, Web Developer' },
    { name: 'R6 Market', role: 'Owner' },
    { name: 'R6 VORA', role: 'Bot Developer, Web Developer' },
  ];

  // Double the array for seamless looping
  const doubledServers = [...servers, ...servers];

  const slideVariants = {
    animate: {
      x: [0, -3136],
      transition: {
        duration: 30,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <section id="servers" className="relative z-10 py-20 px-6 border-t border-gray-800/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Some of the Biggest Servers I've Worked For</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

          {/* Sliding content */}
          <motion.div
            className="flex gap-8"
            variants={slideVariants}
            initial={{ x: 0 }}
            animate="animate"
          >
            {doubledServers.map((server, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all h-48 flex flex-col justify-center items-center text-center group cursor-pointer hover:shadow-xl hover:shadow-purple-600/20">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition">{server.name}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3 group-hover:w-16 transition-all"></div>
                  <p className="text-gray-400 text-sm">{server.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
