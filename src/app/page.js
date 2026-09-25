'use client';

import { motion } from 'framer-motion';
import ServersSlider from '@/components/ServersSlider';

export default function Home() {
  const projects = [
    {
      title: 'Cozy Tiers Bot',
      description: 'A Discord bot where people can tier test to verify their rank',
      tech: ['Discord.js', 'Node.js'],
      icon: '→'
    },
    {
      title: 'Ticket Bot',
      description: 'Automated ticket system for Discord servers',
      tech: ['Discord.js', 'MongoDB'],
      icon: '→'
    },
    {
      title: 'Crates Plugin',
      description: 'Minecraft plugin for implementing custom crate systems',
      tech: ['Java', 'Minecraft API'],
      icon: '→'
    },
    {
      title: 'Tier Tagger Mod',
      description: 'Minecraft mod for tier-based player tagging',
      tech: ['Java', 'Forge Mod'],
      icon: '→'
    },
    {
      title: 'Dount Plugin Remakes',
      description: 'Recreation of popular Dount plugins for Minecraft servers',
      tech: ['Java', 'Minecraft API'],
      icon: '→'
    },
  ];

  const skills = [
    { name: 'Discord.js', level: 95 },
    { name: 'Minecraft Java', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Web Development', level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/profile.jpg"
              alt="Haruki"
              className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-white/30 border border-white/20"
            />
            <span className="font-bold text-lg text-white">
              Haruki
            </span>
          </motion.div>

          <div className="hidden md:flex gap-8">
            <motion.a href="#projects" className="text-gray-300 hover:text-white transition" whileHover={{ scale: 1.05 }}>
              Projects
            </motion.a>
            <motion.a href="#servers" className="text-gray-300 hover:text-white transition" whileHover={{ scale: 1.05 }}>
              Servers
            </motion.a>
            <motion.a href="#skills" className="text-gray-300 hover:text-white transition" whileHover={{ scale: 1.05 }}>
              Skills
            </motion.a>
            <motion.a href="#contact" className="text-gray-300 hover:text-white transition" whileHover={{ scale: 1.05 }}>
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/profile.jpg"
              alt="Haruki"
              className="w-32 h-32 rounded-2xl mx-auto shadow-lg shadow-white/40 object-cover border-2 border-white/30"
            />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-black mb-6 leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="block">
              Hello, I'm <span className="text-white">Haruki</span>
            </motion.span>
            <motion.span variants={itemVariants} className="block text-gray-300">
              Discord & Minecraft Developer
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            I build custom Discord bots and Minecraft plugins that bring communities to life. Specialized in creating engaging tools that users love.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#projects"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-white/50 transition border border-white"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-gray-400 text-sm">Scroll to explore</div>
            <div className="mt-2 text-2xl">↓</div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-white/50 transition-all hover:bg-white/10"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-2xl text-white opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 border border-white/30 rounded-lg text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Servers Section */}
      <ServersSlider />

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden border border-white/30">
                  <motion.div
                    className="bg-white h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-400">Interested in working together? Reach out and let's create something amazing.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/harukicozy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:border-white/50 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">→</div>
              <h3 className="font-bold text-xl mb-2">GitHub</h3>
              <p className="text-gray-400">harukicozy</p>
            </motion.a>

            <motion.a
              href="https://discord.com/users/haruki.cozy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:border-white/50 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">→</div>
              <h3 className="font-bold text-xl mb-2">Discord</h3>
              <p className="text-gray-400">Haruki.cozy</p>
            </motion.a>

            <motion.a
              href="mailto:riverswave1@gmail.com"
              className="bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:border-white/50 transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">→</div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-400">riverswave1@gmail.com</p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Built with Next.js and Tailwind CSS. Hosted on Vercel.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            &copy; 2026 Haruki. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
