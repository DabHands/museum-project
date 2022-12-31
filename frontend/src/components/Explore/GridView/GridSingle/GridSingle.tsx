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
        <s.PageLink to={`/explore/${embroidery.id}`} >
            <s.Box>
                <s.Thumbnail src={require(`../../../../images/embroideries/${embroidery.fileName}`)} />

                <s.Details>
                    <s.Name> {embroidery.authorName} </s.Name>
                    <s.Anatomy> {embroidery.anatomyName} </s.Anatomy>
                    <s.Origin> {embroidery.authorOrigin} </s.Origin>
                    
                </s.Details>
            </s.Box>
        </s.PageLink>
    )
}