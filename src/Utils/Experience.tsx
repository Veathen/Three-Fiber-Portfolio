import * as THREE from "three";
import Sizes from "./Sizes"
import Camera from "./Camera";
import Renderer from "./Renderer";
import Resources from "./Resources";
import Time from "./Time";
import Preloader from "./Preloader";
import assets from "./assets";
import Theme from "./Theme";
import World from "../World/World";
import Controls from "./Controls";


export default class Experience {
    static instance: Experience;
    canvas: any;
    sizes: Sizes;
    scene: THREE.Scene;
    camera: Camera;
    renderer: Renderer;
    time: Time;
    resources: Resources;
    theme: Theme;
    world: World;
    preloader: Preloader;
    controls: Controls;
     constructor(canvas: any) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.theme = new Theme();
        this.world = new World();
        this.preloader = new Preloader();

        this.preloader.on("enablecontrols", () => {
            this.controls = new Controls();
        });

        this.sizes.on("resize", () => {
            this.resize();
        });
        this.time.on("update", () => {
            this.update();
        });
    }

    resize() {
        this.camera.resize();
        this.world.resize();
        this.renderer.resize();
    }

    update() {
        this.preloader.update();
        this.camera.update();
        this.world.update();
        this.renderer.update();
        if (this.controls) {
            this.controls.update();
        }
    }
}