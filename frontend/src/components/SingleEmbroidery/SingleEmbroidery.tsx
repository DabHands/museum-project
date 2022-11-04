import React from 'react'
import { useParams } from 'react-router-dom';
import { AllAnatomies } from '../../data/anatomies';
import { AllEmbroideries } from '../../data/embroideries';
import * as s from './SingleEmbroidery.theme';

export const SingleEmbroidery: React.FC = () => {
    const { id } = useParams();

    //Now to get the emboidery itself
    const em = AllEmbroideries.find(e => e.id === id)
    //And get the anatomy that uses it
    const an = em ? AllAnatomies.find(a => a.name === em.anatomy_name) : null;

    const renderLeftPanel = () => {
        return (
            <>
                {em
                    ? <s.Thumbnail src={process.env.PUBLIC_URL + em.file_path} />
                    : <p>No Image Found</p>
                }
                <s.BelowImageBox>
                    <s.AuthorName>{em ? em.author_name : 'No author found'}</s.AuthorName>
                    <s.AuthorOrigin>{em ? em.author_origin : ' '}</s.AuthorOrigin>
                </s.BelowImageBox>
                
                
            </>
            )
    }
    const renderRightPanel = () => {
        return (
            <>
                <s.EmbroideryName>{an ? an.name : 'No anatomy found'}</s.EmbroideryName>
                <s.Description> {an ? an.description : 'No anatomy found'}</s.Description>
            </>
        )
    }

    return (
        <s.PageWrapper>
            <s.LeftSide>
              {renderLeftPanel()}
            </s.LeftSide>
            <s.RightSide>
                {renderRightPanel()}
            </s.RightSide>
        </s.PageWrapper>
        
    )
};