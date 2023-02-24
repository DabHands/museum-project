import React from 'react'
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';
import { AllAnatomies } from '../../data/anatomies';
import { AllEmbroideries } from '../../data/embroideries';
import { Button } from '../toolbox/Buttons';
import { SecondaryH1 } from '../toolbox/Labels';
import {BsArrowLeftShort} from 'react-icons/bs'
import * as s from './SingleEmbroidery.theme';

export const SingleEmbroidery: React.FC = () => {
    const { id } = useParams();

    //Now to get the emboidery itself
    const em = AllEmbroideries.find(e => e.id === id)
    //And get the anatomy that uses it
    const an = em ? AllAnatomies.find(a => a.name === em.anatomyName) : null;

    const getName = () => {
        if (an) {
            if (an.longName) {
                return an.longName
            } 
            return an.name
        }
        return "No Anatomy Found"
        // {an ? an.name : 'No anatomy found'}
    }

    const renderImage = () => {
        return (
            <s.ImageWrapper> {
                em
                    ? <s.Thumbnail src={require(`../../images/standard/${em.fileName}`)} />
                    : <p>No Image Found</p>
                }

            </s.ImageWrapper>
        )
    }

    const renderDescription = () => {
        return (
            <s.DescWrapper>
                <s.EmbroideryName> Further Information on {getName()}? </s.EmbroideryName>
                <s.Description> {an ? an.description : 'No anatomy found'}</s.Description>
            </s.DescWrapper>
           
        )
    }

    const renderBackButton = () => {
        return (
            <s.IconButton> 
                <BsArrowLeftShort/> Back to Explore
            </s.IconButton>
        )
    }

    const renderMobileView = () => {
        return (
            <>
                {renderBackButton()}
                <SecondaryH1> {getName()}</SecondaryH1>
                <p>
                    Embroidered By
                    <s.AuthorName> {em ? em.authorName : 'No author found'}</s.AuthorName>
                </p>
                {renderImage()}
                {renderDescription()}

            </>
            
        )
    }
    const renderDesktopView = () => {
        return (
            <>
                <s.TitleBox>
                    <SecondaryH1> {getName()}</SecondaryH1>
                    {renderBackButton()}
                </s.TitleBox>
                
                
                
                 <s.SplitPage>
                    
                    <div>
                        <p>
                            Embroidered By
                            <s.AuthorName> {em ? em.authorName : 'No author found'}</s.AuthorName>
                        </p>
                        {renderImage()}
                        
                    </div>
                    
                    {renderDescription()}

                 </s.SplitPage>
            </>
        )
        
        
    }

    return (
        <s.PageWrapper>
            <MediaQuery minWidth={800}> 
                {renderDesktopView()}
            </MediaQuery>

            <MediaQuery maxWidth={799}>
                {renderMobileView()}
            </MediaQuery>
        </s.PageWrapper>
    )
};