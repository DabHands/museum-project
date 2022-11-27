import React from 'react'
import { Embroidery } from '../../../types/types'
import { GridSingle } from './GridSingle/GridSingle';
import * as s from './GridView.theme';


interface Props {
    resultEmbroideries: Embroidery[]
}

export const GridView: React.FC<Props> = (
    { resultEmbroideries }
) => {

    return (
        <s.GridBox>
            {resultEmbroideries.map(e =>
                <GridSingle key={e.id} embroidery={e}/>
            )}
        </s.GridBox>
        )
}