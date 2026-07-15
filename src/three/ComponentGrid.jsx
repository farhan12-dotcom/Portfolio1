import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Panel from './Panel'

// Panels ki position, color, aur speed pehle se define kar rahe hain (random har baar nahi,
// taake layout consistent rahe reloads k beech)
const panelsData = [
  { position: [-2.2, 1.2, 0], color: '#FFB454', speed: 0.6 },
  { position: [-1, -0.8, -1], color: '#5EEAD4', speed: 0.8 },
  { position: [0.5, 1.6, -0.5], color: '#FFB454', speed: 0.5 },
  { position: [2, 0.2, 0], color: '#5EEAD4', speed: 0.7 },
  { position: [1.8, -1.3, -1], color: '#FFB454', speed: 0.9 },
  { position: [-2.5, -1.5, -0.5], color: '#5EEAD4', speed: 0.65 },
  { position: [0, -0.2, 1], color: '#FFB454', speed: 0.55 },
  { position: [-0.8, 2, 0.5], color: '#5EEAD4', speed: 0.75 },
]

function ComponentGrid() {
  // groupRef: sab panels ko ek "group" (parent) mein rakhenge, taake unhe
  // ek sath tilt kar sakein mouse move pe (individually nahi karna padega)
  const groupRef = useRef()

  useFrame((state) => {
    // state.pointer: mouse ki current position, -1 se 1 k beech normalize ki hui (x aur y)
    const { x, y } = state.pointer

    // Group ko halka sa tilt karo mouse direction mein — parallax/depth effect
    // Multiply by small number (0.15) taake movement subtle rahe, extreme na ho
    groupRef.current.rotation.y = x * 0.15
    groupRef.current.rotation.x = -y * 0.1

    // Lerp (linear interpolation) use kar sakte the smoother transition k liye,
    // abhi simple direct assignment kaafi hai
  })

  return (
    <group ref={groupRef}>
      {panelsData.map((panel, i) => (
        <Panel key={i} {...panel} />
      ))}
    </group>
  )
}

export default ComponentGrid