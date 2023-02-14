import * as THREE from "three";
import Experience from "../Utils/Experience";
import { EventEmitter } from "events";
import Sizes from "../Utils/Sizes";
import Camera from "../Utils/Camera";
import Resources from "../Utils/Resources";
import Theme from "../Utils/Theme";

export default class World extends EventEmitter {
    experience: Experience;
    sizes: Sizes;
    scene: THREE.Scene;
    canvas: any;
    camera: Camera;
    resources: Resources;
    theme: Theme;
    environment: any;
    room: any;
    controls: any;
    constructor() {
        super();
        this.experience = new Experience(null);
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        this.theme = this.experience.theme;

        this.resources.on("ready", () => {
            
            this.emit("worldready");
        });

        this.theme.on("switch", (theme) => {
            this.switchTheme(theme);
        });

    }

    switchTheme(theme: any) {
        if (this.environment) {
            this.environment.switchTheme(theme);
        }
    }

    resize() {}

    update() {
        if (this.room) {
            this.room.update();
        }
        if (this.controls) {
            this.controls.update();
        }
    }
}