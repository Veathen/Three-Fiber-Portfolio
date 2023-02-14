/* eslint-disable */
import * as THREE from 'three';
import * as React from 'react';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import CatWeb from "./CatWeb"


export default function App() {
  return (
    <Canvas>
      <OrbitControls></OrbitControls>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <React.Suspense fallback = {null}>
        <CatWeb></CatWeb>
      </React.Suspense>
    </Canvas>
  )
}
