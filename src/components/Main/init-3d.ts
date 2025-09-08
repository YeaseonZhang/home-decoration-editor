import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const init3D = (dom: HTMLElement) => {
  const scene = new THREE.Scene();

  const axesHelper = new THREE.AxesHelper(5000);
  scene.add(axesHelper);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(500, 400, 300);
  scene.add(directionalLight);

  const width = window.innerWidth;
  // 减去header组件高度
  const height = window.innerHeight - 60;

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(500, 1000, -500);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });

  renderer.setSize(width, height);
  renderer.setClearColor('lightyellow');

  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();

  dom.append(renderer.domElement);

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight - 60;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  const controls = new OrbitControls(camera, renderer.domElement);

  return {
    scene,
  };
};
