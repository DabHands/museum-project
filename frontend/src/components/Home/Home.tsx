import React from 'react';
import * as s from './Home.theme';
import { AllEmbroideries } from '../../data/embroideries';

export const Home = () => {
    console.log(AllEmbroideries);
    
    return <>
        <p> Welcome to the homepage!</p>
        <s.HomeButton>I do nothing!</s.HomeButton>
    </>
}