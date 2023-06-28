import { Canvas } from '@react-three/fiber'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { OrbitControls, Center, Gltf, Sky, BakeShadows } from '@react-three/drei'
import { Satelite } from './Models'

export default function App() {
	return (
		<>
			<Canvas shadows gl={{ antialias: false }} camera={{ position: [10, 10, 0] }}>
				<color attach='background' args={['#f3f3f3']} />
				<ambientLight intensity={0.3} />
				<directionalLight
					color='white'
					intensity={1}
					angle={0.3}
					penumbra={500}
					position={[10, 5, 10]}
					castShadow
					shadow-mapSize={4096}
					shadow-bias={0}
				>
					<orthographicCamera attach='shadow-camera' args={[-15, 15, 10, -5, 1, 100]} />
				</directionalLight>

				<OrbitControls enableZoom={false} />

				<Center>
					<Satelite scale={0.08} />
				</Center>

				<EffectComposer disableNormalPass multisampling={8}>
					<N8AO aoRadius={50} distanceFalloff={0.2} intensity={3} screenSpaceRadius />
				</EffectComposer>
				{/* <BakeShadows /> */}

				{/* <Sky /> */}
			</Canvas>
		</>
	)
}
