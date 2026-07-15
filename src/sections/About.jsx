import { motion } from 'framer-motion'
// apni image import kar rahe hain assets folder se
import profilePic from '../assets/profile.jpeg'

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 py-24">
      {/* grid: mobile pe 1 column (picture upar), desktop pe picture+text side-by-side */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 items-start">

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={profilePic}
            alt="Farhan Ilyas"
            className="w-full aspect-square object-cover rounded-2xl border border-white/10"
          />
          {/* Subtle glow behind picture — dark theme mein depth deta hai */}
          <div className="absolute -inset-2 -z-10 bg-accent/10 rounded-3xl blur-xl" />
        </motion.div>

        {/* Text content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-accent text-sm block mb-4"
          >
            01 — About
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Naam */}
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Farhan Ilyas
            </h2>

            {/* Qualification — mono font, thoda alag color taake stand out kare */}
            <p className="font-mono text-accent2 text-sm mb-6">
              BSIT — University of Punjab, Gujranwala Campus
            </p>

            <p className="font-display text-xl md:text-2xl leading-snug mb-6">
              I'm a <span className="text-accent">MERN stack</span> developer
              who builds complete products — from database schema to
              pixel-perfect UI.
            </p>

            <p className="font-body text-muted leading-relaxed">
              I design and build full-stack web applications using MongoDB,
              Express, React, and Node.js — handling everything from REST API
              architecture to responsive, animated frontend experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About