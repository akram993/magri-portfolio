import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Core Languages',
    emoji: '💻',
    color: 'bg-blue-50 border-blue-100',
    badgeColor: 'bg-blue-100 text-blue-700',
    skills: ['Java', 'SQL', 'Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    emoji: '🧩',
    color: 'bg-green-50 border-green-100',
    badgeColor: 'bg-green-100 text-green-700',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate / JPA', 'Spring Data'],
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: 'bg-amber-50 border-amber-100',
    badgeColor: 'bg-amber-100 text-amber-700',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    emoji: '⚙️',
    color: 'bg-purple-50 border-purple-100',
    badgeColor: 'bg-purple-100 text-purple-700',
    skills: ['Docker', 'Git', 'Maven', 'Kafka', 'Jenkins', 'AWS', 'Linux', 'Postman'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

function SkillTag({ name, badgeColor }) {
  return (
    <motion.span
      variants={itemVariants}
      className={`px-3 py-1.5 rounded-xl text-sm font-semibold border ${badgeColor} hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default select-none`}
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/60">
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
            Tech Stack
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-lg">
            The tools and technologies I use to bring backend systems to life.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.55 }}
              className={`card p-6 border ${cat.color}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{cat.emoji}</span>
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${cat.badgeColor}`}>
                  {cat.title}
                </span>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map(name => (
                  <SkillTag key={name} name={name} badgeColor={cat.badgeColor} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 p-5 rounded-2xl border border-dashed border-primary-300 bg-primary-50/50 flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-semibold text-primary-700">📚 Currently exploring:</span>
          {['Kubernetes', 'GraphQL', 'Reactive Spring (WebFlux)', 'System Design'].map(item => (
            <span key={item} className="tag">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}