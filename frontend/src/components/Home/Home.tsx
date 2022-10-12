import React from 'react';
import * as s from './Home.theme';
import { AppBar } from '../toolbox/AppBar'

export const Home = () => {
    return <>
        <AppBar />
        <p> Welcome to the homepage!</p>
        <s.HomeButton>I do nothing!</s.HomeButton>
    </>
}