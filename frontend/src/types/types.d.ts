
export type Embroidery = {

    id: string,
    fileName: string,
    authorOrigin: OriginTypes,
    authorName: string,
    anatomyName: string,
    position?: Coordinates
}

export type OriginTypes = 'BW' | 'Guild' | 'Med' | 'Misc';

export type Coordinates = { //This is for Adelina to mess with later
    x: number,
    y: number,
    z: number
}

export type Anatomy = {
    name: string,
    description: string
}
