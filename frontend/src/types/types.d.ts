
export type Embroidery = {

    id: string,
    file_path: string,
    author_origin: OriginTypes,
    author_name: string,
    anatomy_name: string,
    position?: Coordinates
}

export type OriginTypes = 'BW' | 'Guild' | 'Med' |'Misc';

export type Coordinates = { //This is for Adelina to mess with later
    x: number,
    y: number,
    z: number
}

export type Anatomy = {
    name: string,
    description: string
}
