import React, { useRef } from 'react';
import styles from '../Components/CanvasThree.module.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, group, Mesh, PlaneBufferGeometry, MeshBasicMaterial } from '@react-three/fiber';



function Box(props) {

  const meshRef = useRef();
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, './model.gltf');

  useFrame(() => {
    // Rotate the mesh in the animation loop
    // meshRef.current.rotation.y += 0.01; // Rotate around Y-axis
    console.log(meshRef.current.rotation.y)

    // meshRef.current.rotation.y -= 0.01; 
    groupRef.current.rotation.y -= 0.01; 
    // meshRef.current.rotation.x += 0.01; // Rotate around X-axis
  });

  return (
    <group ref={groupRef} position={[0,-2,0]}>
      <mesh {...props} ref={meshRef}>
        {/* <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" /> */}
        <primitive scale={3} object={gltf.scene} position={[-1, 0, 0]} rotation={[0, 1, 0]} />

      </mesh >

    </group>

  );
}


const CanvasThree = () => {



  return (
    <div id={styles.container}>

      <Canvas className={styles.theCanvas}>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 10, 5]} />

        <Box position={[1, 0, 0]} />



      </Canvas>

    </div>

  );
}


export default CanvasThree;