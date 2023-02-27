import React, { useState } from 'react';
import ModelContext from '../contexts/ModelContext';

interface ModelProviderProps {
  children: React.ReactNode;
}

const ModelProvider: React.FC<ModelProviderProps> = ( { children } ) => {
  const [model, setModel] = useState({});

  const saveModel = (model: any) => {
    setModel(model);
  };

  const getModel = () => {
    return model;
  };

  const context = {
    model,
    saveModel,
    getModel
  };

  return (
    <ModelContext.Provider value={context}>
      {children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
