import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Raycaster } from 'three';
import * as s from './Model.theme';

export const Model: React.FC = () => {
  // create a variable to store the object
  let model: any;
  let canvasPositionLeft: number;
  let canvasPositionTop: number;
  let canvasPositionWidth: number;
  let canvasPositionHeight: number;

  // set up the needed variables for the scene
  const rayCaster = new Raycaster();
  // create the scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4;

  const setCanvasPosition = ( canvas: HTMLElement) => {
    canvasPositionLeft = canvas.offsetLeft;
    canvasPositionTop = canvas.offsetTop;
    canvasPositionHeight = canvas.offsetHeight;
    canvasPositionWidth = canvas.offsetWidth;

    return { canvasPositionLeft, canvasPositionTop, canvasPositionHeight, canvasPositionWidth};
  };

  const addModelLights = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, -2, -5);
    scene.add(directionalLight);
  };

  const loadModel = () => {
    // load the materials fot the model, with the model and its texture
    const mtlLoader = new MTLLoader();
    mtlLoader.load("polycam-mesh/poly.mtl", function (materials) {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        'polycam-mesh/poly-meshlab.obj',
        function (object) {
          // load the texture
          model = { ...object };
          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load('polycam-mesh/poly_0_ox0Gp9Nh.jpg');

          // append the texture to the model
          object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.map = texture;
            }
          });
          scene.add(object);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
          console.log('An error happened', error);
        }
      );
    });
  };

  useEffect(() => {
    // position the depth of the camera
    const canvas = document.getElementById('modelCanvas') as HTMLElement;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, });

    // add controls to the able to move and zoom the model
    const controls = new OrbitControls(camera, renderer.domElement);

    // add lights to the model
    addModelLights();

    renderer.setSize(window.innerWidth, window.innerHeight);

    loadModel();

    // show the model
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

  const handleClickOnCanvas = (event: any) => {
    event.preventDefault();

    const canvas = document.getElementById('modelCanvas') as HTMLElement;
    const {canvasPositionLeft, 
      canvasPositionTop, 
      canvasPositionHeight, 
      canvasPositionWidth } = setCanvasPosition(canvas);

    const x = ((event.clientX - canvasPositionLeft) / canvasPositionWidth) * 2 - 1;
    const y = -((event.clientY - canvasPositionTop) / canvasPositionHeight) * 2 + 1;

    const mousePosition = new THREE.Vector2(x, y);

    rayCaster.setFromCamera(mousePosition, camera);
    const intersects = rayCaster.intersectObjects(model.children, true);

    if (intersects.length > 0) {
      console.log(intersects[0].point);
    }
  };

  return (<s.PageWrapper>
    <div style={{ marginTop: "10px" }}>
      <canvas id="modelCanvas" style={{ position: "absolute" }} onClick={handleClickOnCanvas}></canvas>
    </div>
  </s.PageWrapper>)
}