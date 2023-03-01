/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import * as s from './Model.theme';
import ModelContext from '../../contexts/ModelContext';
import { AllEmbroideries } from '../../data/embroideries';
import { AnatomyWindowInfo, Embroidery, PopupEmbroideryInfo, SphereInfo } from '../../types/types';
import { Popup } from './Popup';
import { Loading } from './Loading';
import { AllAnatomies } from '../../data/anatomies';
import { AnatomyWindow } from './AnatomyWindow';

export const Model: React.FC = () => {
  const modelContext = useContext(ModelContext);

  const [shouldShowPopup, setShouldShowPopup] = useState<boolean>(false);
  const [shouldShowAnatomyWindow, setShouldShowAnatomyWindow] = useState<boolean>(false);
  const [popupEmbroideryInfo, setPopupEmbroideryInfo] = useState<PopupEmbroideryInfo>();
  const [anatomyWindowInfo, setAnatomyWindowInfo] = useState<AnatomyWindowInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let spheresLength: number;
  const spheres: SphereInfo[] = [];

  // create a variable to store the object
  let model: any;
  let canvasPositionLeft: number;
  let canvasPositionTop: number;
  let canvasPositionWidth: number;
  let canvasPositionHeight: number;

  // add variables to store the click positions on mousedown and mouseup events
  // these variables will be needed in order to prevent a popup opening when dragging
  let mouseDownX: number;
  let mouseDownY: number;
  let mouseUpX: number;
  let mouseUpY: number;

  // set up the needed variables for the scene
  const rayCaster = new THREE.Raycaster();
  // create the scene
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xff0000 );
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4;

  const getCanvasPosition = (canvas: HTMLElement) => {
    canvasPositionLeft = canvas.offsetLeft;
    canvasPositionTop = canvas.offsetTop;
    canvasPositionHeight = canvas.offsetHeight;
    canvasPositionWidth = canvas.offsetWidth;

    return { canvasPositionLeft, canvasPositionTop, canvasPositionHeight, canvasPositionWidth };
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
    mtlLoader.load("polycam/poly.mtl", function (materials) {

      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        'polycam/poly.obj',
        function (object) {
          // load the texture
          model = { ...object };
          modelContext.saveModel(model);
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
          // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          if(xhr.loaded / xhr.total < 1) {
            if (!isLoading) {
              setIsLoading(true);
            }
          }
          else {
            setIsLoading(false);
          }
        },
        function (error) {
          console.log('An error happened', error);
        }
      );
    });
  };

  const calculateDistanceBetweenTwoPlanarPoints = (embroideryCentre: number[], embroideryEnd: number[]) => {
    const x = (embroideryEnd[0] - embroideryCentre[0]) * (embroideryEnd[0] - embroideryCentre[0]);
    const y = (embroideryEnd[1] - embroideryCentre[1]) * (embroideryEnd[1] - embroideryCentre[1]);
    const z = (embroideryEnd[2] - embroideryCentre[2]) * (embroideryEnd[2] - embroideryCentre[2]);

    const radius = Math.sqrt(x + y + z);
    return radius;
  };

  const createSphere = (scene: THREE.Scene, embroideryCentre: number[], embroideryEnd: number[]) => {
    const embroideryRadius = calculateDistanceBetweenTwoPlanarPoints(embroideryCentre, embroideryEnd);

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

  const closePopup = () => {
    setShouldShowPopup(false);
  };

  const closeAnatomyWindow = () => {
    setShouldShowAnatomyWindow(false);
  };

  const openAnatomyWindow = () => {
    setShouldShowPopup(false);
    setShouldShowAnatomyWindow(true);
  }

  // render the popup that will show when the user clicks on an embroidery
  const renderPopup = (embroideryInfo: PopupEmbroideryInfo) => {
    return (
        <Popup
          closePopup = {closePopup}
          openAnatomyWindow = {openAnatomyWindow}
          embroideryInfo = {embroideryInfo}
        />        
    )
  };

  const renderAnatomyWindow = (anatomyInfo: AnatomyWindowInfo) => {
    return (
      <AnatomyWindow
        anatomyInfo = {anatomyInfo}
        closeAnatomyWindow = {closeAnatomyWindow}
      />
    )
  }

  const renderLoadingComponent = () => {
    return (
      <Loading />
    )
  };

  // compute which sphere the user clicked on when they clicked on the model
  const computeClickedOnSphere = (rayCaster: THREE.Raycaster, allSpheres: any, model: any) => {

    const intersects = rayCaster.intersectObjects(model.children, true);
    // if(intersects.length > 0) {
    //   console.log('intersects', intersects[0].point);
    // }

    const raycastedSpheres: SphereInfo[] = [];
    let raycastedSpheresLength: number;
    let minimumDistanceToRay = 1000;
    const closestSphere: SphereInfo = { embroideryId: "", sphere: new THREE.Object3D};
    for (let i = 0; i < allSpheres.length; i++) {
      const sphereIntersects = rayCaster.intersectObject(allSpheres[i].sphere);
        if (sphereIntersects.length > 0) {
          raycastedSpheresLength = raycastedSpheres.push(allSpheres[i]);
        }
    }

    for (let i = 0; i < raycastedSpheres.length; i++) {
      const embroideryId = raycastedSpheres[i].embroideryId;
      const embroidery = AllEmbroideries.find(embroidery => embroidery.id == embroideryId) as Embroidery;

      if (intersects.length > 0) {
        const distance = calculateDistanceBetweenTwoPlanarPoints(intersects[0].point.toArray(), embroidery.centreCoordinates);

        if (distance < minimumDistanceToRay) {
          minimumDistanceToRay = distance;

          closestSphere.sphere = raycastedSpheres[i].sphere;
          closestSphere.embroideryId = raycastedSpheres[i].embroideryId;
        }
      }
    }
    return closestSphere;
  };

  const handleMouseDown = (event: any) => {
    mouseDownX = event.clientX;
    mouseDownY = event.clientY;
  }

  const handleMouseUp = (event: any) => {
    mouseUpX = event.clientX;
    mouseUpY = event.clientY;
  };

  useEffect(() => {
    const canvas = document.getElementById('modelCanvas') as HTMLElement;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);

    // add controls to the able to move and zoom the model
    // const controls = new OrbitControls(camera, renderer.domElement);

    // add lights to the model
    addModelLights();

    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    loadModel();

    // create the spheres for the embroideries
    for (let i = 0; i < AllEmbroideries.length; i++) {
      // create the spheres
      const embroidery = AllEmbroideries[i];
      if (embroidery.centreCoordinates.length > 0) {
        const sphere = createSphere(scene, embroidery.centreCoordinates, embroidery.endPointCoordinates);
        spheresLength = spheres.push({ embroideryId: embroidery.id, sphere: sphere });
      }
    }

    // save the generated spheres, camera, scene and renderer as global variables
    modelContext.saveSpheres(spheres);
    modelContext.saveCamera(camera);
    modelContext.saveScene(scene);
    modelContext.saveRenderer(renderer);
  }, []);

  useEffect(() => {
    const controls = new OrbitControls(modelContext.camera, modelContext.renderer.domElement);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // show the model
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      modelContext.renderer.render(modelContext.scene, modelContext.camera);
    }
      animate();
  });

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
    // console.log('camera', camera);
    rayCaster.setFromCamera(mousePosition, modelContext.camera);

    // scene.add(new THREE.ArrowHelper(rayCaster.ray.direction, rayCaster.ray.origin, 300, 0xff0000));
    // const intersects = rayCaster.intersectObjects(modelContext.model.children, true);

    // const sphereIntersects = rayCaster.intersectObject(sphere);

    // if (intersects.length > 0) {
    //   console.log(intersects[0].point);
    //   const scene = modelContext.scene;
    //   scene.add(new THREE.ArrowHelper(rayCaster.ray.direction, rayCaster.ray.origin, 300, 0xff0000));
    // }

    // compute the first sphere that the ray goes through
    const closestSphere = computeClickedOnSphere(rayCaster, modelContext.spheres, modelContext.model);
    const sphereEmbroidery = AllEmbroideries.find(embroidery => embroidery.id == closestSphere.embroideryId);
    const sphereAnatomy = AllAnatomies.find(anatomy => anatomy.name == sphereEmbroidery?.anatomyName);

    let anatomyName = sphereEmbroidery?.anatomyName;
    if (sphereAnatomy?.longName) {
      anatomyName = sphereAnatomy.longName;
    }

    if (sphereEmbroidery && Math.abs(mouseDownX - mouseUpX) < 3 && Math.abs(mouseDownY - mouseUpY) < 3) {
      setPopupEmbroideryInfo({
        authorName: sphereEmbroidery?.authorName, 
        anatomyName: anatomyName,
        embroideryFileName: "thumbnail/" + sphereEmbroidery?.fileName, 
        authorOrigin: sphereEmbroidery.authorOrigin
      });

      setAnatomyWindowInfo({
        authorName: sphereEmbroidery?.authorName, 
        anatomyName: anatomyName,
        embroideryFileName: "thumbnail/" + sphereEmbroidery?.fileName, 
        authorOrigin: sphereEmbroidery.authorOrigin,
        longAnatomyName: sphereAnatomy?.longName,
        anatomyDescription: sphereAnatomy?.description
      });

      setShouldShowPopup(true);
    }
  };

  return (
    <s.PageWrapper>
      {isLoading && renderLoadingComponent()}
      <s.ModelCanvas id="modelCanvas" onClick={handleClickOnCanvas}></s.ModelCanvas>
      {shouldShowPopup && renderPopup(popupEmbroideryInfo as PopupEmbroideryInfo)}
      {shouldShowAnatomyWindow && renderAnatomyWindow(anatomyWindowInfo as AnatomyWindowInfo)}
    </s.PageWrapper>)
}
