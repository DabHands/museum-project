import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Raycaster } from 'three';
import { AllEmbroideries } from '../../data/embroideries';
import { SphereInfo } from '../../types/types';
import * as s from './Model.theme';

export const Model: React.FC = () => {

  // const embroideryCentre  = [0.2930, -0.3407, 0.2198];
  // const embroideryEnd = [0.2108, -0.3944, 0.1594];

  // let sphereInfo: SphereInfo;

  // // create a variable to store the object
  let model: any;
  // let canvasPositionLeft: number;
  // let canvasPositionTop: number;
  // let canvasPositionWidth: number;
  // let canvasPositionHeight: number;

  // set up the needed variables for the scene
  // const rayCaster = new Raycaster();
  // create the scene
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xff0000 );
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4;

  // const getCanvasPosition = (canvas: HTMLElement) => {
  //   canvasPositionLeft = canvas.offsetLeft;
  //   canvasPositionTop = canvas.offsetTop;
  //   canvasPositionHeight = canvas.offsetHeight;
  //   canvasPositionWidth = canvas.offsetWidth;

  //   return { canvasPositionLeft, canvasPositionTop, canvasPositionHeight, canvasPositionWidth };
  // };

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
        'polycam/poly.obj',
        function (object) {
          // load the texture
          model = { ...object };
          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load('polycam/texture.jpg');

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

  // const calculateSphereRadiusOnEmbroidery = (embroideryCentre: number[], embroideryEnd: number[]) => {
  //   const x = (embroideryEnd[0] - embroideryCentre[0]) * (embroideryEnd[0] - embroideryCentre[0]);
  //   const y = (embroideryEnd[1] - embroideryCentre[1]) * (embroideryEnd[1] - embroideryCentre[1]);
  //   const z = (embroideryEnd[2] - embroideryCentre[2]) * (embroideryEnd[2] - embroideryCentre[2]);

  //   const radius = Math.sqrt(x + y + z);
  //   return radius;
  // };

  // const createSphere = (scene: THREE.Scene, embroideryCentre: number[], embroideryEnd: number[]) => {
  //   const embroideryRadius = calculateSphereRadiusOnEmbroidery(embroideryCentre, embroideryEnd);

  //   const geometry = new THREE.SphereGeometry( embroideryRadius, 32, 16 );
  //   const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  //   const sphere = new THREE.Mesh( geometry, material );
  //   sphere.position.x = embroideryCentre[0];
  //   sphere.position.y = embroideryCentre[1];
  //   sphere.position.z = embroideryCentre[2];

  //   sphere.material.transparent = true;
  //   sphere.material.opacity = 0.0;

  //   scene.add(sphere);
  //   return sphere;
  // };

  // let sphere: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> | THREE.Object3D<THREE.Event>;

  useEffect(() => {
    const canvas = document.getElementById('modelCanvas') as HTMLElement;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);

    // add controls to the able to move and zoom the model
    const controls = new OrbitControls(camera, renderer.domElement);

    // add lights to the model
    addModelLights();

    renderer.setSize(window.innerWidth, window.innerHeight);

    loadModel();
    // sphere = createSphere(scene, embroideryCentre, embroideryEnd);
    // sphereInfo = { embroideryId: "98ef96da-e1d3-49b0-8029-6bc405997dd7",
    // sphere: sphere}

    // show the model
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

  // const handleClickOnCanvas = (event: any) => {
  //   event.preventDefault();

  //   const canvas = document.getElementById('modelCanvas') as HTMLElement;
  //   const { canvasPositionLeft,
  //     canvasPositionTop,
  //     canvasPositionHeight,
  //     canvasPositionWidth } = getCanvasPosition(canvas);

  //   const x = ((event.clientX - canvasPositionLeft) / canvasPositionWidth) * 2 - 1;
  //   const y = -((event.clientY - canvasPositionTop) / canvasPositionHeight) * 2 + 1;

  //   const mousePosition = new THREE.Vector2(x, y);

  //   rayCaster.setFromCamera(mousePosition, camera);
  //   const intersects = rayCaster.intersectObjects(model.children, true);

  //   const sphereIntersects = rayCaster.intersectObject(sphere);

  //   if (intersects.length > 0) {
  //     console.log(intersects[0].point);
  //     // scene.add(new THREE.ArrowHelper(rayCaster.ray.direction, rayCaster.ray.origin, 300, 0xff0000) );
  //   }

  //   if (sphereIntersects.length > 0) {
  //     console.log('ayeeee');
  //   }

  //   // console.log('AllEmbroideries', AllEmbroideries.length);
  //   // const embroidery = AllEmbroideries.find(embroidery => embroidery.id == "98ef96da-e1d3-49b0-8029-6bc405997dd7");
  //   // console.log("embroidery.name", embroidery?.anatomyName);
  // };

  return (
    <s.PageWrapper>
      <s.ModelWrapper>
        <s.ModelCanvas id="modelCanvas"></s.ModelCanvas>
      </s.ModelWrapper>
    </s.PageWrapper>)
}