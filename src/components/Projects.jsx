import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// ── Edit your real projects here ──────────────────────────────────────────────
const projects = [
  {
    title: 'E-Commerce Platform API',
    description:
      'A fully-featured RESTful backend for an e-commerce application. Supports user auth, product catalog, cart management, order processing, and payment integration.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/akrammagri',   // ← update me
    demo: null,
    highlight: true,
    emoji: '🛒',
  },
  {
    title: 'Microservices Architecture',
    description:
      'Decomposed a monolithic app into independent microservices communicating via Kafka. Includes service discovery, API gateway, and distributed tracing.',
    tags: ['Spring Boot', 'Kafka', 'Docker', 'Eureka', 'Redis'],
    github: 'https://github.com/akrammagri',   // ← update me
    demo: null,
    highlight: false,
    emoji: '⚙️',
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task tracking API with role-based access control, real-time notifications, and comprehensive audit logging.',
    tags: ['Java', 'Spring Security', 'MySQL', 'WebSocket', 'Maven'],
    github: 'https://github.com/akrammagri',   // ← update me
    demo: null,
    highlight: false,
    emoji: '📋',
  },
  {
    title: 'Real-Time Chat Backend',
    description:
      'WebSocket-based chat service supporting private rooms, message history, and online presence — built to handle thousands of concurrent connections.',
    tags: ['Spring Boot', 'WebSocket', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/akrammagri',   // ← update me
    demo: null,
    highlight: false,
    emoji: '💬',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className={`card p-6 flex flex-col group ${
        project.highlight ? 'border-primary-200 ring-1 ring-primary-100' : ''
      }`}
    >
      {project.highlight && (
        <span className="self-start mb-3 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-primary-100 text-primary-700">
          ⭐ Featured
        </span>
      )}

      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{project.emoji}</span>
        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="tag text-xs">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FiGithub size={15} />
            Source Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-divider" />
          <p className="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-lg">
            A selection of backend systems I've designed and built. Each one
            taught me something new.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/akrammagri"   // ← update me
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
