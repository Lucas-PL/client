import React, { useRef } from 'react';
import styles from '../Components/sgSensors.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva'


import { OrbitControls } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/model2.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={3.666}>
        <mesh geometry={nodes.BottleGlass.geometry} material={materials['Glass.002']} position={[-0.049, 0, 0]} castShadow/>
        <mesh geometry={nodes.Glass_1.geometry} material={materials['Glass.001']} position={[-0.015, 0, 0]} rotation={[0, 0.155, 0]} castShadow/>
        <mesh geometry={nodes.Glass_2.geometry} material={materials['Glass.001']} position={[-0.1, 0, 0]} rotation={[0, 0.155, 0]} castShadow/>
        <mesh geometry={nodes.Glass_Water_1.geometry} material={materials['Water.001']} position={[-0.015, 0, 0]} rotation={[0, 0.155, 0]}castShadow />
        <mesh geometry={nodes.Glass_Water_2.geometry} material={materials['Water.001']} position={[-0.1, 0, 0]} rotation={[0, 0.155, 0]} />
        <mesh geometry={nodes.Plastic_White_Stopper.geometry} material={materials['White Plastic']} position={[-0.049, 0, 0]} />
        <mesh geometry={nodes.Water.geometry} material={materials.Water} position={[-0.049, 0, 0]} />
        <mesh geometry={nodes.Wire_holder.geometry} material={materials['Metal Grey']} position={[-0.049, 0, 0]} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Patterned paving']} scale={1.688} receiveShadow />
    </group>
  )
}

useGLTF.preload('/model2.gltf')







// function Box(props) {

//   const meshRef = useRef();
//   const groupRef = useRef();
//   const gltf = useLoader(GLTFLoader, './model2.gltf');

//   useFrame(() => {
//     // Rotate the mesh in the animation loop
//     // meshRef.current.rotation.y += 0.01; // Rotate around Y-axis
//     console.log(meshRef.current.rotation.y)

//     // meshRef.current.rotation.y -= 0.01; 
//     groupRef.current.rotation.y -= 0.01; 
//     // meshRef.current.rotation.x += 0.01; // Rotate around X-axis
//   });

//   return (
//     <group ref={groupRef} position={[0,-2,0]}>
//       <mesh {...props} ref={meshRef}>
//         {/* <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="blue" /> */}
//         <primitive scale={3} object={gltf.scene} position={[-1, 0, 0]} rotation={[0, 1, 0]} />
//       </mesh >
//       <Model />
//       <OrbitControls />
//     </group>

//   );
// }


const Podloga = () => {
  
  const materialProps = useControls({
    thickness: { value: 5, min: 0, max: 20 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
    envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    color: '#ffffff',
    attenuationTint: '#ffe79e',
    attenuationDistance: { value: 0, min: 0, max: 1 }
  })

  return (
    <group>

    {/* <mesh rotation={[-Math.PI * 0.5,0,0]} receiveShadow>
            <planeGeometry attach="geometry"  />
            <meshPhongMaterial attach="material" color="white" />
         </mesh> */}


<mesh scale={0.2} castShadow>
            <boxGeometry attach="geometry"  />
            <meshPhysicalMaterial {...materialProps} attach="material" color="blue" />
         </mesh>
    </group>
  );
};



const SgSensors = () => {



  return (
    <div id={styles.container}>

      <Canvas className={styles.theCanvas} shadows>
        <ambientLight intensity={3} />
        <directionalLight color="white" intensity={10} position={[0, 3, 10]} castShadow
        
        shadow-radius={10}
        
         />
        <Model />
        {/* <Box position={[1, 0, 0]} /> */}
        <Podloga receiveShadow />
        <OrbitControls />




      </Canvas>

    </div>

  );
}


export default SgSensors;