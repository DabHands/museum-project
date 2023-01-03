import React from 'react'
import { Embroidery } from '../../../types/types'
import { GridSingle } from './GridSingle/GridSingle';
import * as s from './GridView.theme';


interface Props {
    filteredEmbroideries: Embroidery[]
}

export const GridView: React.FC<Props> = (
    { filteredEmbroideries }
) => {

    return (
        <s.GridBox>
            {filteredEmbroideries.map(e =>
                <GridSingle key={e.id} embroidery={e}/>
            )}
        </s.GridBox>
        )
}