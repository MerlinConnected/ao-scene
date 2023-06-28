import { Canvas } from '@react-three/fiber'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { OrbitControls, Center, Gltf, Sky, BakeShadows } from '@react-three/drei'

export default function App() {
	return (
		<Canvas shadows gl={{ antialias: false }} camera={{ position: [10, 10, 0] }}>
			<color attach='background' args={['#dcdcdc']} />
			<ambientLight intensity={0.2} />
			<directionalLight
				color='white'
				intensity={2}
				angle={0.2}
				penumbra={1}
				position={[10, 5, 10]}
				castShadow
				shadow-mapSize={1024}
				shadow-bias={0}
			>
				<orthographicCamera attach='shadow-camera' args={[-15, 15, 10, -5, 1, 100]} />
			</directionalLight>

			<OrbitControls />

			<Center>
				<boxGeometry args={[1, 1, 1]} color={'hotpink'} />
				<Gltf
					castShadow
					receiveShadow
					scale={0.1}
					src='/camargue.glb'
					inject={<meshStandardMaterial color='white' />}
				/>
			</Center>

			<EffectComposer disableNormalPass multisampling={8}>
				<N8AO aoRadius={50} distanceFalloff={0.3} intensity={6} screenSpaceRadius />
			</EffectComposer>
			{/* <BakeShadows /> */}

			{/* <Sky /> */}
		</Canvas>
	)
}
