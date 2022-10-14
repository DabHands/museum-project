import React from 'react'
import { Button, MainButton, SecondaryButton } from '../toolbox/Buttons'
import { AppBar } from '../toolbox/AppBar';
import * as s from './About.theme';
import { LOCALHOST_ABOUT_PAGE, LOCALHOST_HOME_PAGE, HOME_TITLE, ABOUT_TITLE } from '../../constants/links';

export const About = () => {

   const renderArtistsBio = () => {
      return (
         <>
         <s.ArtistsBio>
            <p>Hi My Name is Lucy</p>
         </s.ArtistsBio>
         </>
      )
   }

   return (<>
      <AppBar
        homeHref={LOCALHOST_HOME_PAGE}
        aboutHref={LOCALHOST_ABOUT_PAGE}
        homeTitle={HOME_TITLE}
        aboutTitle={ABOUT_TITLE}
      />
      <p> Welcome to the about page!</p>
      <MainButton>Main Button</MainButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <Button>Basic Button</Button>
      {renderArtistsBio()}
   </>)
}