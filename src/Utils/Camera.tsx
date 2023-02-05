import Experience from "./Experience";
import Sizes from "./Sizes";

export default class Camera{
    experience: Experience;
    sizes: Sizes;
    scene: any;
    canvas: any;
    constructor(){
        this.experience = new Experience("");
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        console.log(this.sizes, this.scene, this.canvas)
    }
}