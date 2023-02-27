/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { ModelContextType, SphereInfo } from '../types/types';
import * as THREE from 'three';

const ModelContext = createContext<ModelContextType>({
  model: {},
  spheres: [],
  scene: new THREE.Scene,
  renderer: new THREE.WebGLRenderer,
  saveModel: (model: any) => { },
  saveSpheres: (spheres: SphereInfo[]) => { },
  saveScene: (scene: THREE.Scene) => { },
  saveRenderer: (renderer: THREE.WebGLRenderer) => { }
});

export default ModelContext;