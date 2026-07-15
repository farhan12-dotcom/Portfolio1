import { motion } from 'framer-motion'
import LogoLoop from '../components/LogoLoop'
import {
  SiHtml5, SiCss, SiJavascript, SiCplusplus,
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
} from 'react-icons/si'

// MERN stack k hisaab se categories — frontend, backend, database, tooling
const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Mongoose', 'Aggregation Pipelines'],
  },
  {
    category: 'Tooling & Deployment',
    items: ['Git', 'Docker', 'Vercel', 'Render', 'Postman'],
  },
]
// LogoLoop ko diya jane wala data — har item ek icon, uska naam, aur (optional) link
const techLogos = [
  { node: <SiHtml5 />, title: 'HTML' },
  { node: <SiCss />, title: 'CSS' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiCplusplus />, title: 'C++' },
  { node: <SiReact />, title: 'React' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiExpress />, title: 'Express' },
  { node: <SiMongodb />, title: 'MongoDB' },
]

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-8 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-accent text-sm block mb-10"
        >
          02 — Skills
        </motion.span>

        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-surface p-6"
            >
              <h3 className="font-mono text-accent2 text-sm mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-3 py-1.5 rounded-lg bg-white/5 text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Scrolling logo strip — bento grid k neeche */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-10"
  style={{ height: '80px' }} // height dena zaroori hai, warna component 0px reh jayega
>
  <LogoLoop
    logos={techLogos}
    speed={60}
    direction="left"
    logoHeight={36}
    gap={56}
    fadeOut
    fadeOutColor="#0B0E14"
    scaleOnHover
    ariaLabel="Technology skills"
  />
</motion.div>
      </div>
    </section>
  )
}

export default Skills