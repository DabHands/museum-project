/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const ModelContext = createContext({
  model: {},
  saveModel: (model: any) => { },
  getModel: () => { },
});

export default ModelContext;