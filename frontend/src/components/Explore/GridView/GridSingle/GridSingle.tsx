import React from 'react'
import { AllAnatomies } from '../../../../data/anatomies';
import { Embroidery } from '../../../../types/types'
import * as s from './GridSingle.theme';

interface Props {
    embroidery: Embroidery
}

export const GridSingle: React.FC<Props> = ({
    embroidery
}) => {
    const an = embroidery ? AllAnatomies.find(a => a.name === embroidery.anatomyName) : null;

    const getName = () => {
        if (an) {
            if (an.longName) {
                return an.longName
            } 
            return an.name
        }
        return "No Anatomy"
    }

    return (
        <s.PageLink to={process.env.PUBLIC_URL + `/explore/${embroidery.id}`} >
            <s.Box>
                <s.Thumbnail
                    src={`thumbnail/${embroidery.fileName}`}
                    draggable={false}
                    loading="lazy" 
                />
                <s.Details>
                    <s.Name> {embroidery.authorName} </s.Name>
                    <s.Anatomy> {getName()} </s.Anatomy>
                </s.Details>
            </s.Box>
        </s.PageLink>
    )
}