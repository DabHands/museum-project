import React from 'react';
import { MainH1 } from '../toolbox/Labels';
import * as s from './Model.theme';

export const Model: React.FC = () => {
    return (<s.PageWrapper>
        <MainH1> Model </MainH1>
        <p>
            Here you can find the 3D Model of the
            That&apos;ll Need Stitching sculpture.
        </p>
    </s.PageWrapper>)
}