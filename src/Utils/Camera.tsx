import Experience from "./Experience";
import Sizes from "./Sizes";
import * as THREE from "three"

export default class Camera{
    experience: Experience;
    sizes: Sizes;
    scene: any;
    canvas: any;
    perspectiveCamera: THREE.PerspectiveCamera;
    orthographicCamera: THREE.OrthographicCamera;
    frustrum: number;
    constructor(){
        this.experience = new Experience(null);
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        console.log(this.experience, this.sizes, this.scene, this.canvas)

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
    }

    createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum)/2,
            (this.sizes.aspect * this.sizes.frustrum)/2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum /2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera);
    }

    resize(){
        //updating perspective camera on view resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        //updating orthographic camera on view resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update(){
        
    }
}