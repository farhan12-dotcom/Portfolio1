import { useRef } from 'react'
// useMotionValue: ek value jo track hoti hai but re-render trigger nahi karti (performant)
// useTransform: ek value ko doosri value mein convert karta hai (mapping)
import { motion, useMotionValue, useTransform } from 'framer-motion'

function TiltCard({ children }) {
  const cardRef = useRef()

  // Mouse ki x, y position card k andar track karne k liye
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // x/y values (jo -0.5 se 0.5 range mein honge) ko rotation degrees mein convert kar rahe hain
  // useTransform(source, [input range], [output range])
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])  // ऊपर-neeche mouse -> tilt
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])  // left-right mouse -> tilt

  function handleMouseMove(e) {
    // Card ka actual position aur size screen pe
    const rect = cardRef.current.getBoundingClientRect()

    // Mouse ki position ko card k andar 0-1 range mein convert kiya, phir -0.5 se 0.5 kiya
    // (taake center = 0, left/top edge = -0.5, right/bottom edge = 0.5)
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    // Mouse hatte hi card wapas seedha (flat) ho jaye, smoothly
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,           // dynamically calculated tilt
        rotateY,
        transformStyle: 'preserve-3d', // zaroori: taake children bhi 3D space mein rehen
      }}
      className="relative rounded-2xl border border-white/10 bg-surface p-6 cursor-pointer"
    >
      {children}
    </motion.div>
  )
}

export default TiltCard