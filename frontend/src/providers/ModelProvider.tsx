import React, { useState } from 'react';
import * as THREE from 'three';
import ModelContext from '../contexts/ModelContext';
import { SphereInfo } from '../types/types';

interface ModelProviderProps {
  children: React.ReactNode;
}

const ModelProvider: React.FC<ModelProviderProps> = ( { children } ) => {
  const [model, setModel] = useState({});
  const [spheres, setSpheres] = useState<SphereInfo[]>([]);
  const [scene, setScene] = useState<THREE.Scene>(new THREE.Scene);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer);

  const saveModel = (model: any) => {
    setModel(model);
  };

  const saveSpheres = (spheres: SphereInfo[]) => {
    setSpheres(spheres);
  };

  const saveScene = (scene: THREE.Scene) => {
    setScene(scene);
  };

  const saveRenderer = (renderer: THREE.WebGLRenderer) => {
    setRenderer(renderer);
  };

  const context = {
    model,
    spheres,
    scene,
    renderer,
    saveModel,
    saveSpheres,
    saveScene,
    saveRenderer
  };

  return (
    <ModelContext.Provider value={context}>
      {children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
