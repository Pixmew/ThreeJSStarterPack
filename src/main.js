import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Scene
const scene = new THREE.Scene();
//Camera
const Camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight , 0.1 , 1000);
scene.add(Camera);
Camera.position.set(0,0,50);
//Renderer
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('canvas#BasicBallScene')});
renderer.setSize(innerWidth , innerHeight);

//Geometry
const boxgeo = new THREE.BoxGeometry(10,10,10)

//Materials
const boxmat = new THREE.MeshPhysicalMaterial({color :0xffffff , metalness : 0 , roughness : 0})

//Mesh
const box = new THREE.Mesh(boxgeo , boxmat)
scene.add(box)

/*----
Lighting
----*/

//pointLight1
const pointlight1 = new THREE.PointLight( 0xff00ff, 1, 1000 );
pointlight1.position.set( 25, 10, 10);
scene.add( pointlight1 );
const pointLightHelper1 = new THREE.PointLightHelper(pointlight1 , 1)
scene.add(pointLightHelper1);

//pointLight2
const pointlight2 = new THREE.PointLight( 0xffff00, 1, 1000 );
pointlight2.position.set( -25, 20, 10);
scene.add( pointlight2 );
const pointLightHelper2 = new THREE.PointLightHelper(pointlight2 , 1)
scene.add(pointLightHelper2);

//pointLight3
const pointlight3 = new THREE.PointLight( 0x00ffff, 1, 1000 );
pointlight3.position.set( 0, -20, 10);
scene.add( pointlight3 );
const pointLightHelper3 = new THREE.PointLightHelper(pointlight3 , 1)
scene.add(pointLightHelper3);



//Controls
const controls = new OrbitControls(Camera, renderer.domElement)
controls.enableDamping = true


/*----
Animations Section
----*/
function Animate(){

  //Update ControlSystem
  controls.update();

  //Rendere the Scene
  renderer.render(scene , Camera)

  box.rotation.y += 0.01;
  box.rotation.x += 0.01;
  
  requestAnimationFrame(Animate);
}
//StartAnimation
Animate();