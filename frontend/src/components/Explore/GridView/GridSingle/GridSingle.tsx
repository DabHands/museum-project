import React from 'react'
import { Embroidery } from '../../../../types/types'
import * as s from './GridSingle.theme';


interface Props {
    embroidery: Embroidery
}

export const GridSingle: React.FC<Props> = ({
    embroidery
}) => {

    return (
        <s.Box>
            <s.Thumbnail src={process.env.PUBLIC_URL + embroidery.file_path } />
            <s.Details>
                <s.Name> {embroidery.author_name} </s.Name>
                <s.Anatomy> {embroidery.anatomy_name} </s.Anatomy>
                <s.Origin> {embroidery.author_origin} </s.Origin>
                
            </s.Details>
        </s.Box>
    )
}