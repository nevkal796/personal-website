import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

interface ContactLink {
  name: string
  url: string
  icon: React.ReactNode
}

const contactLinks: ContactLink[] = [
  {
    name: 'Email',
    url: 'mailto:np.kalloor@gmail.com',
    icon: <FiMail className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nevin-kalloor-2b23412a5/',
    icon: <FiLinkedin className="w-6 h-6" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nevkal796',
    icon: <FiGithub className="w-6 h-6" />,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-blue opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto mb-6 shadow-glow-sm"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white rounded-xl p-6 shadow-glow hover:shadow-glow-lg hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-4 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 text-cyan-400">{link.icon}</div>
              <div>
                <div className="font-semibold text-lg">{link.name}</div>
                <div className="text-sm opacity-90 text-gray-300">Click to connect</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Nevin Kalloor. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

