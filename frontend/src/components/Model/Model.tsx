import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module';

import * as s from './Model.theme';

export const Model: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;

        const canvas = document.getElementById('myThreeJsCanvas') as HTMLElement;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, });
        const controls = new OrbitControls(camera, renderer.domElement);

        const keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        const fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        const backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(0, -2, -5);
        scene.add(directionalLight);

        // scene.add(keyLight);
        // scene.add(fillLight);
        // scene.add(backLight);

        renderer.setSize(window.innerWidth, window.innerHeight);

        const loader = new GLTFLoader();
        // Load a glTF resource
        loader.load(
            // resource URL
            'test.glb',
            // called when the resource is loaded
            function (glb) {

                scene.add(glb.scene);

                glb.animations; // Array<THREE.AnimationClip>
                glb.scene; // THREE.Group
                glb.scenes; // Array<THREE.Group>
                glb.cameras; // Array<THREE.Camera>
                glb.asset; // Object

            },
            // called while loading is progressing
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function (error) {

                console.log('An error happened', error);

            }
        );


        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0xa16c38 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        const stats = Stats()
        document.body.appendChild(stats.dom)

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    }, []);

    return (<s.PageWrapper>
        <div style={{ marginTop: "10px" }}>
            <canvas id="myThreeJsCanvas" style={{ position: "absolute" }}></canvas>
        </div>
    </s.PageWrapper>)
}