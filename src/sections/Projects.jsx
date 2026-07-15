import { motion } from 'framer-motion'
import StackCard from '../components/StackCard'

const projects = [
  {
    title: 'Nova Clothing',
    description: 'A full e-commerce clothing website with product listings, cart, and checkout flow.',
    tags: ['React'],
    link: 'https://nova-clothing.vercel.app/',
  },
  {title: 'Dice-Game',
    description: 'A simple dice rolling game built with React.',
    tags: ['React'],
    link: 'https://dice-game-chi-eight.vercel.app',
  },
  
]

function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-accent text-sm block text-center mb-4"
      >
        03 — Projects
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold mb-16 text-center"
      >
        Some of my work
      </motion.h2>

      {/* max-w container — cards is width tak restricted rahenge */}
      <div className="max-w-3xl mx-auto flex flex-col gap-24">
        {projects.map((project, i) => (
          <StackCard key={project.title} index={i} total={projects.length}>
            <span className="font-mono text-xs text-muted">0{i + 1}</span>

            <h3 className="font-display text-2xl font-semibold mt-2 mb-3">
              {project.title}
            </h3>

            <p className="font-body text-muted text-base mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 rounded-full bg-accent2/10 text-accent2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline inline-flex items-center gap-1"
            >
              View live →
            </a>
          </StackCard>
        ))}
      </div>

      {/* Extra bottom spacing zaroori hai — taake last card ka
          sticky/scroll effect properly complete ho sake */}
      <div className="h-32" />
    </section>
  )
}

export default Projects