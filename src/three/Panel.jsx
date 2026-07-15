import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Ek single panel — props se position, size, color, aur speed milegi
// taake har panel thoda alag (organic) behave kare, sab identical na hon
function Panel({ position, color, speed, size = 0.6 }) {
  const meshRef = useRef()

  // Har panel ka apna random-ish offset — taake sab ek sath sync hokar float na karein
  // eslint-disable-next-line react-hooks/purity
  const floatOffset = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() // scene start hone se ab tak ka total time (seconds)

    // Sin wave se smooth up-down floating motion — natural/organic lagta hai
    meshRef.current.position.y = position[1] + Math.sin(t * speed + floatOffset.current) * 0.3

    // Halka continuous rotation — bohot slow, taake distracting na ho
    meshRef.current.rotation.x = Math.sin(t * speed * 0.5) * 0.2
    meshRef.current.rotation.y += 0.002
  })

  return (
    <mesh ref={meshRef} position={position}>
      {/* roundedBox nahi hai default Three.js mein, isliye simple box use kar rahe hain */}
      <boxGeometry args={[size, size, size * 0.15]} />
      {/* meshPhysicalMaterial: glass/plastic jaisa realistic transparent look deta hai */}
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.35}       // semi-transparent — glass jaisa feel
        roughness={0.1}      // kam roughness = zyada shiny/reflective
        metalness={0.2}
        emissive={color}     // object khud thodi si glow karega
        emissiveIntensity={0.15}
      />
    </mesh>
  )
}

export default Panel