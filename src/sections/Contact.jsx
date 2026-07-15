import { motion } from 'framer-motion'
// Instagram aur LinkedIn icons react-icons se
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-accent text-sm mb-4"
      >
        04 — Contact
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-xl"
      >
        Let's build something good together.
      </motion.h2>

      {/* Yahan apna real Gmail daalna */}
      <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=farhanilyas1122s@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.15 }}
  whileHover={{ scale: 1.05 }}
  className="font-mono text-sm px-6 py-3 rounded-full bg-accent text-bg font-medium"
>
  farhanilyas1122s@gmail.com
</motion.a>

      {/* Social links — icons k saath, text ki bajaye */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-6 mt-10"
      >
        <a
          href="https://www.linkedin.com/in/farhan-ilyas-918b97322/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/farhanilyas12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  )
}

export default Contact