import React from 'react';
import * as s from './Home.theme';
import * as a from '../toolbox/AppBar'


export const Home = () => {
    return <>
        <p> Welcome to the homepage!</p>
        <s.HomeButton>I do nothing!</s.HomeButton>
        <a.StyledAppBar>Hey</a.StyledAppBar>
    </>
}