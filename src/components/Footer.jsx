import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <span className="text-white font-semibold text-sm">Akram Magri</span>
          <span className="text-gray-600 text-sm">— Backend Engineer</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 order-last sm:order-none">
          © {new Date().getFullYear()} Akram Magri. Built with React & Tailwind.
        </p>

        {/* Social + back to top */}
        <div className="flex items-center gap-3">
          {[
            { icon: FiGithub,   href: 'https://github.com/akrammagri',          label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/akrammagri',     label: 'LinkedIn' },
            { icon: FiMail,     href: 'mailto:akrammagri3@gmail.com',            label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:bg-gray-700 transition"
            >
              <Icon size={14} />
            </a>
          ))}

          <Link
            to="hero"
            smooth
            duration={700}
            aria-label="Back to top"
            className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition cursor-pointer ml-1"
          >
            <FiArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
