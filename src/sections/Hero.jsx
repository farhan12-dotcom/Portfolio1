import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ComponentGrid from '../three/ComponentGrid'

function Hero() {
  return (
    // relative: taake 3D canvas ko absolute position se andar rakh sakein
    <section id="hero" className="relative h-screen overflow-hidden">

      {/* 3D Canvas — poore section ko background ki tarah cover karega */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }} // camera 6 units door, medium zoom
          dpr={[1, 2]}                                // performance: pixel ratio cap
        >
          {/* Suspense: agar koi asset load ho raha ho to crash na ho, wait kare */}
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[3, 3, 3]} intensity={1.2} color="#FFB454" />
            <pointLight position={[-3, -2, -3]} intensity={0.6} color="#5EEAD4" />
            <ComponentGrid />
          </Suspense>
        </Canvas>
      </div>

      {/* Text content — absolute/relative z-index se canvas k UPAR rahega */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 px-4 pointer-events-none">
        {/* pointer-events-none: taake text k peeche wala 3D canvas mouse events
            (parallax) sahi se receive kare, text isme rukawat na bane */}

        

        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="font-display text-5xl md:text-7xl font-bold text-center leading-tight"
>
  Hi, I'm <span className="text-accent">Farhan Ilyas</span> <br />
  a MERN stack developer.
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-muted text-lg max-w-xl text-center"
        >
          I turn ideas into fast, accessible, and visually engaging web experiences.
        </motion.p>

        {/* pointer-events-auto: button ko wapas clickable banana zaroori hai,
            kyunke parent div mein humne pointer-events-none laga rakha hai */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 font-mono text-sm px-6 py-3 rounded-full bg-accent text-bg font-medium pointer-events-auto"
        >
          View my work →
        </motion.a>
      </div>
    </section>
  )
}

export default Hero