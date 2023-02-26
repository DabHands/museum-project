import React, { useEffect } from 'react';
// import MediaQuery from 'react-responsive';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Raycaster } from 'three';
import { AllEmbroideries } from '../../data/embroideries';
import { Embroidery, SphereInfo } from '../../types/types';
import { Popup } from './Popup';
import * as s from './Model.theme';

export const Model: React.FC = () => {

  // create a variable to store the hand model
  let model: any;

  // store the canvas position
  let canvasPositionLeft: number;
  let canvasPositionTop: number;
  let canvasPositionWidth: number;
  let canvasPositionHeight: number;

  // set up the needed variables for the scene
  const rayCaster = new Raycaster();

  // create the scene
  const scene = new THREE.Scene();

  // create the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4;

  // create helper variables for the sphere
  let sphere: THREE.Object3D;
  let spheresLength: number;
  const spheres: SphereInfo[] = [];
  let sphereIntersects: THREE.Intersection<THREE.Object3D<THREE.Event>>[];

  // get the position of the canvas in the viewport
  const getCanvasPosition = (canvas: HTMLElement) => {
    canvasPositionLeft = canvas.offsetLeft;
    canvasPositionTop = canvas.offsetTop;
    canvasPositionHeight = canvas.offsetHeight;
    canvasPositionWidth = canvas.offsetWidth;

    return { canvasPositionLeft, canvasPositionTop, canvasPositionHeight, canvasPositionWidth };
  };

  // add special lights to the model to make it more visible
  const addModelLights = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, -2, -5);
    scene.add(directionalLight);
  };

  // load the model from an .obj file and load its texture
  const loadModel = () => {
    // load the materials fot the model, with the model and its texture
    const mtlLoader = new MTLLoader();
    mtlLoader.load("polycam/final-project.mtl", function (materials) {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        'polycam/poly.obj',
        function (object) {
          // load the texture
          model = { ...object };
          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load('polycam/texture-final-project.jpg');

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

  // calculate the distance between two points in a 3d coordinate system
  const calculateDistanceBetweenPointsInPlane = (firstPoint: number[], secondPoint: number[]) => {
    const x = (secondPoint[0] - firstPoint[0]) * (secondPoint[0] - firstPoint[0]);
    const y = (secondPoint[1] - firstPoint[1]) * (secondPoint[1] - firstPoint[1]);
    const z = (secondPoint[2] - firstPoint[2]) * (secondPoint[2] - firstPoint[2]);

    const distance = Math.sqrt(x + y + z);
    return distance;
  };

  // create a sphere in a given scene, by passing as arguments two points - 
  // the centre of the sphere and one of its end points
  const createSphere = (scene: THREE.Scene, embroideryCentre: number[], embroideryEnd: number[]) => {
    const embroideryRadius = calculateDistanceBetweenPointsInPlane(embroideryCentre, embroideryEnd);

    const geometry = new THREE.SphereGeometry( embroideryRadius, 32, 16 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new THREE.Mesh( geometry, material );
    sphere.position.x = embroideryCentre[0];
    sphere.position.y = embroideryCentre[1];
    sphere.position.z = embroideryCentre[2];

    sphere.material.transparent = true;
    sphere.material.opacity = 0.0;

    scene.add(sphere);
    return sphere;
  };

  // render the popup that will show when the user clicks on an embroidery
  const renderPopup = () => {
    return (
        <Popup />        
    )
  };

  // compute which sphere the user clicked on when they clicked on the model
  const computeClickedOnSphere = (rayCaster: THREE.Raycaster, allSpheres: SphereInfo[]) => {
    const intersects = rayCaster.intersectObjects(model.children, true);

    const raycastedSpheres: SphereInfo[] = [];
    let raycastedSpheresLength: number;
    let minimumDistanceToRay = 1000;
    const closestSphere: SphereInfo = { embroideryId: "", sphere: new THREE.Object3D};

    for (let i = 0; i < allSpheres.length; i++) {
      sphereIntersects = rayCaster.intersectObject(allSpheres[i].sphere);
        if (sphereIntersects.length > 0) {
          raycastedSpheresLength = raycastedSpheres.push(allSpheres[i]);
        }
    }

    for (let i = 0; i < raycastedSpheres.length; i++) {
      const embroideryId = raycastedSpheres[i].embroideryId;
      const embroidery = AllEmbroideries.find(embroidery => embroidery.id == embroideryId) as Embroidery;

      if (intersects.length > 0) {
        const distance = calculateDistanceBetweenPointsInPlane(intersects[0].point.toArray(), embroidery.centreCoordinates);

        if (distance < minimumDistanceToRay) {
          minimumDistanceToRay = distance;

          closestSphere.sphere = raycastedSpheres[i].sphere;
          closestSphere.embroideryId = raycastedSpheres[i].embroideryId;
        }
      }
    }

    return closestSphere;
  };

  useEffect(() => {
    const canvas = document.getElementById('modelCanvas') as HTMLElement;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);

    // add controls to the able to move and zoom the model
    const controls = new OrbitControls(camera, renderer.domElement);

    // add lights to the model
    addModelLights();

    renderer.setSize(window.innerWidth, window.innerHeight);

    // display the model on the screen
    loadModel();

    // create the spheres for the embroideries
    for (let i = 0; i < AllEmbroideries.length; i++) {
      // create the spheres
      const embroidery = AllEmbroideries[i];
      if (embroidery.centreCoordinates.length > 0) {
        sphere = createSphere(scene,embroidery.centreCoordinates, embroidery.endPointCoordinates);
        spheresLength = spheres.push( {embroideryId: embroidery.id, sphere: sphere} );
      }
    }

    // show the model
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  // a function that handles the event in which a user clicks on the canvas
  const handleClickOnCanvas = (event: any) => {
    event.preventDefault();

    const canvas = document.getElementById('modelCanvas') as HTMLElement;
    const { canvasPositionLeft,
      canvasPositionTop,
      canvasPositionHeight,
      canvasPositionWidth } = getCanvasPosition(canvas);

    const x = ((event.clientX - canvasPositionLeft) / canvasPositionWidth) * 2 - 1;
    const y = -((event.clientY - canvasPositionTop) / canvasPositionHeight) * 2 + 1;

    const mousePosition = new THREE.Vector2(x, y);

    rayCaster.setFromCamera(mousePosition, camera);

    const closestSphere = computeClickedOnSphere(rayCaster, spheres);
    console.log(closestSphere.embroideryId);

    // if (intersects.length > 0) {
    //   console.log(intersects[0].point);
    //   scene.add(new THREE.ArrowHelper(rayCaster.ray.direction, rayCaster.ray.origin, 300, 0xff0000));
    // }

  };

  return (
    <s.PageWrapper>
      <s.ModelWrapper>
        <s.ModelCanvas id="modelCanvas" onClick={handleClickOnCanvas}></s.ModelCanvas>
        {renderPopup()}
      </s.ModelWrapper>
    </s.PageWrapper>)
}