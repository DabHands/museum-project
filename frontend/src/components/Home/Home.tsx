import React from 'react';
import * as s from './Home.theme';

export const Home: React.FC = () => {
    return <>
        <p> Welcome to the homepage!</p>
        <s.HomeButton>I do nothing!</s.HomeButton>
    </>
}