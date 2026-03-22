import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

// ── Update with your real experience ─────────────────────────────────────────
const experiences = [
  {
    role: 'Backend Software Engineer',
    company: 'Company Name',           // ← update me
    location: 'City, Country',         // ← update me
    period: '2022 — Present',
    current: true,
    description:
      'Designed and maintained RESTful microservices using Java & Spring Boot, serving millions of API calls monthly. Led the migration of legacy monolith components to event-driven microservices with Kafka, reducing response latency by 40%.',
    achievements: [
      'Reduced average API response time by 40% through query optimization & Redis caching',
      'Implemented CI/CD pipelines with Jenkins & Docker, cutting deployment time in half',
      'Mentored 2 junior developers and conducted weekly code reviews',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Junior Backend Developer',
    company: 'Previous Company',       // ← update me
    location: 'City, Country',         // ← update me
    period: '2021 — 2022',
    current: false,
    description:
      'Built and maintained REST APIs for an internal SaaS platform. Collaborated closely with frontend and QA teams to deliver features in an Agile environment.',
    achievements: [
      'Developed 20+ API endpoints consumed by web and mobile clients',
      'Integrated third-party payment and notification services',
      'Improved test coverage from 30% to 75% using JUnit & Mockito',
    ],
    tags: ['Java', 'Spring MVC', 'MySQL', 'REST', 'Maven'],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function TimelineItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className="relative flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center z-10 flex-shrink-0 ${
            exp.current
              ? 'bg-primary-600 shadow-md shadow-primary-200'
              : 'bg-white border-2 border-gray-200'
          }`}
        >
          <FiBriefcase size={16} className={exp.current ? 'text-white' : 'text-gray-400'} />
        </div>
        {/* Vertical connector */}
        <div className="w-0.5 flex-1 bg-gray-100 mt-3 mb-0" />
      </div>

      {/* Card */}
      <div className="card p-6 mb-8 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
            <p className="text-primary-600 font-semibold text-sm">{exp.company}</p>
          </div>
          {exp.current && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <FiCalendar size={13} /> {exp.period}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin size={13} /> {exp.location}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.description}</p>

        <ul className="space-y-1.5 mb-4">
          {exp.achievements.map(a => (
            <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-primary-500 mt-0.5 flex-shrink-0">→</span>
              {a}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
          {exp.tags.map(tag => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50/60">
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
            Career
          </p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle max-w-lg">
            My professional journey — the places I've worked and the problems I've solved.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company + exp.role} exp={exp} index={i} />
          ))}

          {/* End cap */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-6 items-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">🎓</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">The beginning of the journey…</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
