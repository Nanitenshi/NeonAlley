import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

let scene, camera, renderer;

export function initScene(){
  const canvas = document.getElementById("threeCanvas");

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070a);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry(10,10,10);
  const material = new THREE.MeshBasicMaterial({color:0x00ffff, wireframe:true});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  animate();
}
