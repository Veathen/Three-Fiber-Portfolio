import Experience from "./Experience";
import Sizes from "./Sizes";
import * as THREE from "three"
import Camera from "./Camera";

export default class Renderer{
    experience: Experience;
    sizes: Sizes;
    scene: any;
    canvas: any;
    perspectiveCamera: THREE.PerspectiveCamera;
    orthographicCamera: THREE.OrthographicCamera;
    frustrum: number;
    camera: Camera;
    renderer: THREE.WebGLRenderer;
    constructor(){
        this.experience = new Experience(null);
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.setRenerer();
        console.log(this.camera, this.camera.perspectiveCamera);

        this.setRenerer();
        
    }

    setRenerer(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });

        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    update(){
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
}