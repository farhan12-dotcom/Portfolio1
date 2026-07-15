import { useRef } from 'react'
// useFrame: har animation frame pe chalne wala hook (jaise ek game loop)
import { useFrame } from '@react-three/fiber'

function TestCube() {
  // ref: is mesh (3D object) ko directly access karne k liye, taake hum ise rotate kar saken
  const meshRef = useRef()

  // useFrame har frame pe (usually 60 times per second) ye function chalata hai
  useFrame((state, delta) => {
    // delta: pichle frame se ab tak kitna time guzra (seconds mein)
    // isse rotation speed frame-rate independent rehti hai (slow/fast computer pe same speed)
    meshRef.current.rotation.y += delta * 0.5
    meshRef.current.rotation.x += delta * 0.2
  })

  return (
    // mesh = ek 3D object (geometry + material ka combo)
    <mesh ref={meshRef}>
      {/* geometry: shape define karta hai — yahan box (cube) */}
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      {/* material: surface kaisa dikhega — color, shine, etc. */}
      <meshStandardMaterial color="#FFB454" wireframe />
    </mesh>
  )
}

export default TestCube