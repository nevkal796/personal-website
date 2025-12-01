import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto shadow-glow-sm"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-2xl border border-cyan-500/30 shadow-glow overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Nevin Kalloor"
                  className="w-full object-cover aspect-square"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science student at Texas A&M University with a 4.0 GPA, focused on building 
              intelligent systems that solve real problems. My work spans full-stack development, machine 
              learning, and data engineering—from creating accessibility platforms that serve real users 
              to developing ML models that predict outcomes with high accuracy.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've built scalable applications handling 1,000+ active users, designed REST APIs with 
              sub-200ms response times, and architected AI-powered systems that reduce manual work by 80%. 
              Whether it's React Native frontends, Node.js backends, or TensorFlow pipelines, I focus on 
              writing clean, performant code that delivers measurable impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working on Zeropoint, an accessibility platform helping wheelchair users manage 
              care specifications. I'm always looking for opportunities to tackle challenging technical 
              problems and build software that makes a difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}