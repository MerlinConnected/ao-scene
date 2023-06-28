import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Satelite(props) {
	const { nodes } = useGLTF('/satelite.glb')
	const texture = useTexture('/tex/sprite.png')

	return (
		<group {...props} dispose={null}>
			<points geometry={nodes.Earth.geometry}>
				<pointsMaterial color='#9fcdd8' size={0.05} sizeAttenuation={true} map={texture} transparent={true} />
			</points>
			<mesh castShadow receiveShadow geometry={nodes.Earth.geometry} scale={0.999}>
				<meshPhysicalMaterial wireframe={false} flatShading={true} castShadow receiveShadow />
			</mesh>
		</group>
	)
}
