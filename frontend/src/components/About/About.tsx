import React from 'react'
import { Button, MainButton, SecondaryButton } from '../toolbox/Buttons'
import * as s from './About.theme';

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
      <p> Welcome to the about page!</p>
      <MainButton>Main Button</MainButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <Button>Basic Button</Button>
      {renderArtistsBio()}
   </>)
}