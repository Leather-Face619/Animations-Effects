import fragment from "./shaders/fragment.glsl"
import vertex from "./shaders/vertex.glsl"
import './index.css'
import * as THREE from 'three'
class site {
    constructor({ dom }) {
        this.time = 0
        this.container = dom
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.images = [...document.querySelectorAll(".images img")]
        this.imageStore = []
        this.material
        this.startIndex = 0
        this.endIndex = 1

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 100, 2000);
        this.camera.position.z = 200;
        this.camera.fov = 2 * Math.atan((this.height) / 2 / 200) * (180 / Math.PI)
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.renderer.render(this.scene, this.camera)
        this.addImages()
        this.resize()
        this.setupresize()
        this.setPosition()
        this.render()
    }
    resize(){
        this.width = this.container.offsetWidth
        this.height = this.container.offsetHeight
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.window / this.height
        this.camera.updateProjectionMatrix()
        this.setPosition()
    }
    setupresize() {
        window.addEventListener("resize", this.resize.bind(this))
    }
    addImages() {
        const textureLoader = new THREE.TextureLoader()
        const texture = this.images.map((item) => { textureLoader.load(item.src) })
        const uniforms = {
            uTime: { value: 0 },
            uImage: { value: texture[0] }
        }
        this.material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true
        })
        this.images.forEach((img) => {
            const bounds = img.getBoundingClientRect()
            const geometry = new THREE.PlaneGeometry(bounds.width, bounds.height)
            const mesh = new THREE.Mesh(geometry, this.material)
            this.scene.add(mesh)
            this.imageStore.push({
                img: img,
                height: bounds.height,
                width: bounds.width,
                top: bounds.top,
                left: bounds.left,
                mesh: mesh
            })
        })
    }
    setPosition() {
        this.imageStore.forEach((img)=>{
            const bounds = img.img.getBoundingClientRect()
            img.mesh.position.y = bounds.top + this.height /2 - bounds.height/ 2
            img.mesh.position.x = bounds.left - this.width /2 + bounds.width/ 2
        })
    }

    render() {
        this.time++;
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}
new site({
    dom: document.querySelector(".canvas")
})
