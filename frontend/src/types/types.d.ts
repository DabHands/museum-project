
export type Embroidery = {

    id: string,
    fileName: string,
    authorOrigin: OriginTypes,
    authorName: string,
    anatomyName: string,
    centreCoordinates: number[],
    endPointCoordinates: number[]
}

export type OriginTypes = 'BW' | 'Guild' | 'Med' | 'Misc';

export type Anatomy = {
    name: string,
    description: string,
    longName?: string
}

export type SphereInfo = {
    embroideryId: string,
    sphere: THREE.Object3D
}

export type PopupEmbroideryInfo = {
    authorName: string | undefined,
    anatomyName: string | undefined,
    embroideryFileName: string
}

export type ModelContextType = {
    model: any,
    spheres: SphereInfo[],
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    saveModel: (model: any) => void,
    saveSpheres: (spheres: SphereInfo[]) => void,
    saveScene: (scene: THREE.Scene) => void,
    saveRenderer: (renderer: THREE.WebGLRenderer) => void,
    saveCamera: (camera: THREE.PerspectiveCamera) => void,
  };
