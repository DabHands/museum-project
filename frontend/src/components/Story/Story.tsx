import React from 'react'
import * as s from './Story.theme';
import { TertiaryH1 } from '../toolbox/Labels';


export const Story: React.FC = () => {

    return (
        <s.PageWrapper>
            <TertiaryH1 toPad>{"‘That’ll Need Stitching’ Embroidered Sculpture: The Embroideries."}</TertiaryH1>
        </s.PageWrapper>
       
    )
};