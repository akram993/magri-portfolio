import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Backend Engineer',
  'Java Developer',
  'Spring Boot Specialist',
  'API Architect',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/akrammagri',      label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/akrammagri', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:akrammagri3@gmail.com',        label: 'Email' },
]

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-white" />
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-container w-full flex flex-col items-center text-center pt-24 pb-16">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none mb-4"
        >
          Hi, I'm{' '}
          <span className="text-primary-600">Akram</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-6 h-10"
        >
          <span className="typewriter-cursor">{role}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-xl text-gray-500 text-lg leading-relaxed mb-10"
        >
          3+ years building scalable backend systems with{' '}
          <span className="text-primary-600 font-medium">Java</span> &amp;{' '}
          <span className="text-primary-600 font-medium">Spring Boot</span>.
          Passionate about clean architecture and reliable APIs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={600} offset={-64} className="btn-primary cursor-pointer">
            View My Work
          </Link>
          <Link to="contact" smooth duration={600} offset={-64} className="btn-outline cursor-pointer">
            Get In Touch
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-primary-600 hover:border-primary-300 hover:shadow-sm transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-10"
        >
          {[
            { value: '3+',  label: 'Years Experience' },
            { value: '15+', label: 'Projects Shipped' },
            { value: '10+', label: 'Technologies' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={600} offset={-64} className="cursor-pointer flex flex-col items-center gap-1 text-gray-400 hover:text-primary-600 transition-colors group">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
