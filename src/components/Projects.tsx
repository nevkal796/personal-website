import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Zeropoint',
    description: 'Wheelchair transportation service platform for airlines. Features AI-powered voice transcription that automates wheelchair specification entry and intelligent data extraction to streamline airline handling procedures.',
    technologies: ['React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI API'],
    githubUrl: 'https://github.com/PlugNChug/zeropoint',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'AggieSeek',
    description: 'Student search platform serving 1,000+ active users at Texas A&M. Built with scalable REST API architecture handling high-volume concurrent requests with comprehensive error handling and validation.',
    technologies: ['React', 'Flask', 'Firebase', 'Python'],
    githubUrl: 'https://github.com/nevkal796',
    demoUrl: 'https://aggieseek.net/landing',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Restaurant Inventory Dashboard',
    description: 'Full-stack inventory management system with AI-powered forecasting. Features automated real-time tracking, natural language query interface, and Prophet ML model achieving 90%+ prediction accuracy.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prophet'],
    githubUrl: 'https://github.com/nevkal796/mai-shan-yun-insight',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Sales Prediction Model',
    description: 'Production-grade machine learning pipeline processing 50,000+ customer records. Achieved 85% improvement in predictive accuracy through optimized data workflows and comprehensive feature engineering.',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SQL'],
    githubUrl: 'https://github.com/nevkal796/Car-Purchase-Machine-Learning-Model',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'PsyTrack',
    description: 'Custom-trained machine learning model for mental health journaling analysis. Processes daily journal entries and mood data to identify patterns and generate personalized insights using natural language processing and sentiment analysis.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'FastAPI', 'SQLite', 'SQLModel', 'NLP'],
    githubUrl: 'https://github.com/nevkal796/psytrack',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mx-auto shadow-glow-sm"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { project: Project, index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#1a1a1a] rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {project.name === 'Restaurant Inventory Dashboard' && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-yellow-500/30 to-red-700/40 mix-blend-overlay"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white text-glow mb-2">{project.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.name !== 'AggieSeek' && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-gray-700 text-gray-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-glow-sm transition-all"
            >
              <FiGithub className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
          )}
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-glow-button transition-all ${project.name === 'AggieSeek' ? 'w-full justify-center' : ''}`}
            >
              <FiExternalLink className="w-5 h-5" />
              <span>Website</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}