import React from 'react'
import * as s from './About.theme';
import pic from '../../util/artist/headshot.jpg'
import funders from '../../util/artist/funders.jpg'
import { SecondaryButton } from '../toolbox/Buttons';
import { MainH1 } from '../toolbox/Labels';

export const About: React.FC = () => {

   const renderArtistsBio = () => {
      return (
         <>
         <s.ArtistsBio>
            <s.Headshot src={pic}/>

            <s.ArtistName> Lucy Burscough </s.ArtistName>

            <s.ArtistDescription> 
               For almost fifteen years, Lucy Burscough has designed and delivered ambitious arts for health projects collaborating with hospitals, museums and galleries, educational establishments, and charitable organisations. Lucy creates art with medical and social themes in public and clinical spaces with the intention of boosting health and wellbeing and telling patients’ stories.
            </s.ArtistDescription>
            <s.ArtistDescription>
               Lucy has been Artist in Residence at Manchester Museum since Spring of 2020 and has been making artworks in this space during the pandemic when lockdowns allowed and throughout the Museum’s period of closure for renovation.
            </s.ArtistDescription>
            <s.ArtistDescription>
               Previous projects have been given an award for ‘Outstanding Contribution to the Promotion of Arts for Health’ from The Royal Society of Public Health, have featured in national newspapers, and won a Manchester Culture Award. Lucy has spoken internationally about her work with museums and galleries at the invitation of The British Council. Her paintings are held by corporate collections and have been exhibited at the National Portrait Gallery and on London Underground.
            </s.ArtistDescription>
            <s.BlogLink href='https://www.lucysart.co.uk/'> <SecondaryButton> Visit Lucy&apos;s Website 
            </SecondaryButton></s.BlogLink>
         </s.ArtistsBio>
         </>
      )
   }

   const renderProjectInfo = () => {
      return (
         <>
            <s.ArtistDescription>
               Human hands are remarkably sophisticated and adaptable tools, unparalleled in the natural world for the breadth of their capability. From the eloquent finesse of a sign language user in full flow, to the nimble picking of a Spanish guitar, the speedy reactions of a teenage texter, or the life-saving precision of microsurgery, our hands are truly phenomenal instruments. Whatever use we put them to, they act as our primary interface with the physical world and with each other.  
            </s.ArtistDescription>
            <s.ArtistDescription>
               We use our hands to nurture, to love, to pray, to dance, to calm, to fight, to restrain, to cling, to connect.
            </s.ArtistDescription>
            <s.ArtistDescription>
               Dab Hands celebrates the extraordinary relationship that we have with our hands and the value of the manual skills that can be acquired by repetition and practice, whilst acknowledging the grief and frustration that can disrupt that relationship when illness, trauma, or old age affects our dexterity.
            </s.ArtistDescription>
            <s.ArtistDescription>
               The Dab Hands Collection was created in residence at Manchester Museum by artist Lucy Burscough and her collaborative partners.     
            </s.ArtistDescription>

            <s.SponsorPanel>   
               <s.SponsorTitle> Funded By </s.SponsorTitle>
               <s.Funders src={funders}/>
            </s.SponsorPanel>
         </>
         
      )
   }

   return (<>
      <s.TopBar>
         <MainH1> About </MainH1>
      </s.TopBar>
      <s.MainContent>
         <s.MainPanel>
            {renderProjectInfo()}
         </s.MainPanel>
         {/* <s.AuthorPanel>
            {renderArtistsBio()}
         </s.AuthorPanel> */}
      </s.MainContent>
      
      
   </>)
}