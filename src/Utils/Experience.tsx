import * as THREE from "three";
import Sizes from "./Sizes"
import Camera from "./Camera";
import Renderer from "./Renderer"
import { ReactThreeFiber } from "@react-three/fiber";

export default class Experience {
    static instance: Experience;
    canvas: any;
    sizes: Sizes;
    scene: THREE.Scene;
    camera: Camera;
    renderer: Renderer;
    constructor (canvas: any) {
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this;
        this.sizes = new Sizes();
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        console.log("THis shit better fucking work jesus h christ.")
        
    }
}