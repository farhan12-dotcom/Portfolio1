import { useRef } from 'react'
// useScroll: current scroll progress track karta hai kisi element k relative
// useTransform: us progress (0 to 1) ko kisi bhi CSS value mein map karta hai
import { motion, useScroll, useTransform } from 'framer-motion'

// index: ye card stack mein kitne number pe hai (0, 1, 2...)
// total: total kitne cards hain (last card ko slightly different treat karte hain)
function StackCard({ children, index,  }) {
  const cardRef = useRef()

  // target: cardRef — scroll progress track hoga JAB TAK ye specific card
  // viewport se guzar raha hai
  // offset: ["start start", "end start"] matlab —
  //   progress 0 = jab card ka TOP, viewport k TOP tak pahunche (sticky hona shuru)
  //   progress 1 = jab card ka BOTTOM, viewport k TOP tak pahunche (agla card cover karna shuru)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  })

  // Jaise progress 0 -> 1 jata hai, card ko chhota (0.9x) aur thoda fade karo
  // taake lage jaise ye "neeche dab gaya" hai naye card k peeche
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    // Har card ka sticky "top" position thoda alag hai (index * 20px)
    // taake stack ho k dikhein card ek doosre k thoda peeche-upar offset ho k,
    // bilkul same jagah pe overlap na karein
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${100 + index * 20}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="rounded-2xl border border-white/10 bg-surface p-8 shadow-2xl origin-top"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default StackCard