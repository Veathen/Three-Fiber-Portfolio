import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from 'three/src/Three';
import Experience from './Utils/Experience';

const experience = new Experience(document.querySelector(".experience-canvas"))
function App() {
  return (
    <div className="experience">
      <canvas className="experience-canvas"></canvas>
    </div>
  );
}

export default App;
