import React from 'react';
import { LOCALHOST_HOME_PAGE, LOCALHOST_ABOUT_PAGE } from '../../constants/links';
import * as s from './Home.theme';
import { AppBar } from '../toolbox/AppBar';

export const Home = () => {
    return <>
        <AppBar homeHref={LOCALHOST_HOME_PAGE} aboutHref={LOCALHOST_ABOUT_PAGE}/>
        <p> Welcome to the homepage!</p>
        <s.HomeButton>I do nothing!</s.HomeButton>
    </>
}