import { motion } from 'framer-motion'
import { FiUser, FiMapPin, FiCode, FiHeart } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const facts = [
  { icon: FiUser,    label: 'Name',     value: 'Akram Magri' },
  { icon: FiMapPin,  label: 'Based in', value: 'Your City, Country' },   // ← update me
  { icon: FiCode,    label: 'Focus',    value: 'Backend Engineering' },
  { icon: FiHeart,   label: 'Hobbies',  value: 'Coding, Open-source, Coffee' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Avatar column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Photo placeholder — replace src with your real photo */}
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-lg overflow-hidden">
                {/* Replace this div with: <img src="/your-photo.jpg" alt="Akram" className="w-full h-full object-cover" /> */}
                <span className="text-8xl font-extrabold text-primary-400 select-none">A</span>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-md px-4 py-3 flex items-center gap-2 border border-gray-100"
              >
                <span className="text-2xl">☕</span>
                <div>
                  <p className="text-xs text-gray-500 font-medium leading-none">Powered by</p>
                  <p className="text-sm font-bold text-gray-800">Spring Boot</p>
                </div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-primary-600 rounded-2xl shadow-md px-4 py-3 text-white"
              >
                <p className="text-2xl font-extrabold leading-none">3+</p>
                <p className="text-xs font-medium opacity-80 mt-0.5">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="section-divider" />
              <p className="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-2">About Me</p>
              <h2 className="section-title">
                Building things that<br />
                <span className="text-primary-600">scale & matter</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-gray-600 text-base leading-relaxed mb-4"
            >
              I'm a backend software engineer with over 3 years of experience crafting
              robust, high-performance APIs and microservices. My go-to stack is
              <span className="text-gray-900 font-medium"> Java &amp; Spring Boot</span>,
              and I love the challenge of designing systems that are not just functional,
              but maintainable and elegant under the hood.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-gray-600 text-base leading-relaxed mb-8"
            >
              I believe great software starts with clear thinking, clean architecture,
              and a good cup of coffee. I'm always looking to learn, contribute to
              interesting projects, and collaborate with teams that care about quality.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
