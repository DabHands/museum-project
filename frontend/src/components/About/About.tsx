import React from 'react'
import * as s from './About.theme';
import pic from '../../util/artist/headshot.jpg'
import lucy1 from '../../util/artist/dabhands_1.jpg'
import lucy2 from '../../util/artist/dabhands_2.jpg'
import lucy3 from '../../util/artist/dabhands_3.jpg'
import funders from '../../util/artist/funders.jpg'
import { TertiaryButton } from '../toolbox/Buttons';
import { MainH1, SecondaryH2 } from '../toolbox/Labels';
import MediaQuery from 'react-responsive';

export const About: React.FC = () => {

   const renderArtistsBio = () => {
      return (
         <>
            <s.ArtistsBio>
                  <SecondaryH2>Meet The Artist</SecondaryH2>
               <s.Headshot
                  draggable={false}
                  loading="lazy"
                  src={pic} />

               <s.ArtistName> Lucy Burscough </s.ArtistName>

               <s.ArtistDescription> 
                  For almost fifteen years, Lucy Burscough has designed and delivered ambitious arts for health projects collaborating with hospitals, museums and galleries, educational establishments, and charitable organisations. Lucy creates art with medical and social themes in public and clinical spaces with the intention of boosting health and wellbeing and telling patients’ stories.
               </s.ArtistDescription>

               
               <s.Spanel>
                  <s.ArtistDescription>
                     Lucy has been Artist in Residence at Manchester Museum since Spring of 2020 and has been making artworks in this space during the pandemic when lockdowns allowed and throughout the Museum’s period of closure for renovation.
                     <br></br><br></br>
                     Previous projects have been given an award for ‘Outstanding Contribution to the Promotion of Arts for Health’ from The Royal Society of Public Health, have featured in national newspapers, and won a Manchester Culture Award. Lucy has spoken internationally about her work with museums and galleries at the invitation of The British Council. Her paintings are held by corporate collections and have been exhibited at the National Portrait Gallery and on London Underground.
                  </s.ArtistDescription>
                  <s.AccompanyImage
                     draggable={false}
                     loading="lazy"
                     src={lucy3} />
               </s.Spanel>

               <s.BlogLink href='https://www.lucysart.co.uk/' target="_blank">
                  <TertiaryButton> 
                     Visit Lucy&apos;s Website 
                  </TertiaryButton>
               </s.BlogLink>
            </s.ArtistsBio>
         </>
      )
   }

   const renderProjectInfo = (desktop:boolean) => {
      return (
         <>
            {desktop ?
               <s.Spanel>
                  <s.ArtistDescription>
                     Human hands are remarkably sophisticated and adaptable tools, unparalleled in the natural world for the breadth of their capability. From the eloquent finesse of a sign language user in full flow, to the nimble picking of a Spanish guitar, the speedy reactions of a teenage texter, or the life-saving precision of microsurgery, our hands are truly phenomenal instruments. Whatever use we put them to, they act as our primary interface with the physical world and with each other.  
                  </s.ArtistDescription>
                  <s.AccompanyImage
                     draggable={false}
                     loading="lazy"
                     src={lucy1} />
               </s.Spanel>
               : <div>
                  <s.ArtistDescription>
                     Human hands are remarkably sophisticated and adaptable tools, unparalleled in the natural world for the breadth of their capability. From the eloquent finesse of a sign language user in full flow, to the nimble picking of a Spanish guitar, the speedy reactions of a teenage texter, or the life-saving precision of microsurgery, our hands are truly phenomenal instruments. Whatever use we put them to, they act as our primary interface with the physical world and with each other.  
                  </s.ArtistDescription>
                  <s.AccompanyImage
                     draggable={false}
                     loading="lazy"
                        src={lucy1} />
               </div>}
            
            {desktop ?
               <s.Spanel flip>
                  <s.AccompanyImage
                     draggable={false}
                     loading="lazy"
                     src={lucy2} />
                  <>
                     <s.ArtistDescription pad>
                        We use our hands to nurture, to love, to pray, to dance, to calm, to fight, to restrain, to cling, to connect.
                        <br></br>
                        <br></br>
                        Dab Hands celebrates the extraordinary relationship that we have with our hands and the value of the manual skills that can be acquired by repetition and practice, whilst acknowledging the grief and frustration that can disrupt that relationship when illness, trauma, or old age affects our dexterity.
                        <br></br>
                        <br></br>
                        The Dab Hands Collection was created in residence at Manchester Museum by artist Lucy Burscough and her collaborative partners.  
                     
                     </s.ArtistDescription>
                  </>
               </s.Spanel>
               : <div>
                  <>
                     <s.ArtistDescription pad>
                        We use our hands to nurture, to love, to pray, to dance, to calm, to fight, to restrain, to cling, to connect.
                        <br></br>
                        <br></br>
                        Dab Hands celebrates the extraordinary relationship that we have with our hands and the value of the manual skills that can be acquired by repetition and practice, whilst acknowledging the grief and frustration that can disrupt that relationship when illness, trauma, or old age affects our dexterity.
                        <br></br>
                        <br></br>
                        The Dab Hands Collection was created in residence at Manchester Museum by artist Lucy Burscough and her collaborative partners.  
                     
                     </s.ArtistDescription>
                  </>
                  <s.AccompanyImage
                     draggable={false}
                     loading="lazy"
                     src={lucy2} />
               </div>
               }
            

            {desktop &&
               <s.SponsorPanel>   
                  <s.SponsorTitle> Funded By </s.SponsorTitle>
                  <s.Funders src={funders}/>
               </s.SponsorPanel>
            }
            
         </>
         
      )
   }

   const renderDesktopView = () => {
      return (
         <s.MainContent>
            <s.MainPanel>
               <MainH1> About </MainH1>
                  {renderProjectInfo(true)}
            </s.MainPanel>
            <s.AuthorPanel>
               {renderArtistsBio()}
            </s.AuthorPanel>
         </s.MainContent>)
   }

   const renderMobileView = () => {
      return (<>
         <MainH1 toPad> About Dab Hands </MainH1>
            
         <s.MainPanel mobile>
            {renderProjectInfo(false)}
            <s.MobileArtist>
               {renderArtistsBio()}
            </s.MobileArtist>
            <s.SponsorPanel>   
               <s.SponsorTitle> Funded By </s.SponsorTitle>
               <s.Funders src={funders}/>
            </s.SponsorPanel>
         </s.MainPanel>
      </>)
      
   }

   return (<>

         <MediaQuery minWidth={800}> {/*The LARGE ONE*/}
         {renderDesktopView()}
         </MediaQuery>

         <MediaQuery maxWidth={799}> {/*The SMALL ONE*/}
         {renderMobileView()}
         </MediaQuery>
         
         
            
      
      
      
      
   </>)
}