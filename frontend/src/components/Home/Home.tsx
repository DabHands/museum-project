import React, { useContext } from 'react';
import * as s from './Home.theme';
import embr from '../../util/homepage/embr.jpg'
import logo from '../../util/logo/wide_logo.jpg'
import { MainH1 } from '../toolbox/Labels';
import MediaQuery from 'react-responsive';
import { CaptionedImage } from '../toolbox/CaptionedImage/CaptionedImage';
import NavigationContext from '../../contexts/NavigationContext';


export const Home: React.FC = () => {
  const navigationContext = useContext(NavigationContext);


  const renderMobileView = () => {
    return <>
      <s.PageText>
        “Dab Hands: That&apos;ll Need Stitching” is an exhibition in the
        Manchester Museum, from the 8th March to 31st July 2023. 
      </s.PageText>
      <s.Image src={logo} />
      <s.PageText>
        One of the most exciting artworks in the exhibition is &lsquo;That&apos;ll Need Stitching&rsquo;,
        a large scale sculpture of a hand holding a sewing needle. The skin of the hand is
        made up of hundreds of embroideries of the anatomical drawings of hand surgeon, Donald Sammut.
        The embroideries themselves were sewn by NHS staff, members of the public and school students from Manchester,
        across the UK and beyond.
      </s.PageText>
      <s.StyledButton onClick={navigationContext.navigateToModelPage}>
        See the 3D Model </s.StyledButton>
      <s.PageText> Online, you can view the 3D model, or explore each embroidery
        and the information behind each anatomical drawing. Learn about the hand, and the story
        of how this whole project came to be.
      </s.PageText>
      <s.StyledButton onClick={navigationContext.navigateToExplorePage}>
        Explore the Embroideries </s.StyledButton>
      <CaptionedImage image={embr} caption="One of the many embroideries on show at the exhibit." />
      <s.StyledButton onClick={navigationContext.navigateToStoryPage}>
        The Story of the Sculpture </s.StyledButton>
      <s.PageText>
        This is one of the pieces in the wider Dab Hands Collection, 
        which was created in residence at the Manchester Museum by Lucy
        Burscough and her collaborative partners.
      </s.PageText>
      <s.StyledButton onClick={navigationContext.navigateToAboutPage}>
        Read more about the Dab Hands Project.</s.StyledButton>
    </>
  }

  const renderDesktopView = () => {
    return <>
      <s.Spanel>
        <span>
          <s.PageText>
            “Dab Hands: That&apos;ll Need Stitching” is an exhibition in the
            Manchester Museum, from the 8th March to 31st July 2023. 
            <br></br> <br></br>
            One of the most exciting artworks in the exhibition is &lsquo;That&apos;ll Need Stitching&rsquo;,
            a large scale sculpture of a hand holding a sewing needle. The skin of the hand is
            made up of hundreds of embroideries of the anatomical drawings of hand surgeon, Donald Sammut.
            The embroideries themselves were sewn by NHS staff, members of the public and school students from Manchester,
            across the UK and beyond.
          </s.PageText>
          <s.StyledButton onClick={navigationContext.navigateToModelPage}>
            See the 3D Model </s.StyledButton>
        </span>
        
        <s.Image src={logo} />
      </s.Spanel>
    
      <s.Spanel even>
        <CaptionedImage image={embr} caption="One of the many embroideries on show at the exhibit." />
        <span>
          <s.PageText> Online, you can view the 3D model, or explore each embroidery
            and the information behind each anatomical drawing. Learn about the hand, and the story
            of how this whole project came to be.
          </s.PageText>
          <s.StyledButton onClick={navigationContext.navigateToExplorePage}>
            Explore the Embroideries </s.StyledButton>
          
          <s.StyledButton onClick={navigationContext.navigateToStoryPage}>
            The Story of the Sculpture </s.StyledButton>
          <s.PageText>
            This is one of the pieces in the wider Dab Hands Collection, 
            which was created in residence at the Manchester Museum by Lucy
            Burscough and her collaborative partners.
          </s.PageText>
          <s.StyledButton onClick={navigationContext.navigateToAboutPage}>
            Read more about the Dab Hands Project.</s.StyledButton>
        </span>

      </s.Spanel>
      
      </>
  }

  return (
    <s.PageWrapper>
      <MediaQuery minWidth={800}> {/*The LARGE ONE*/}
        <MainH1> Dab Hands: That&apos;ll Need Stitching</MainH1>
        {renderDesktopView()}
      </MediaQuery>

      <MediaQuery maxWidth={799}> {/*The SMALL ONE*/}
        <MainH1>
          Dab Hands: That&apos;ll Need Stitching
        </MainH1>
        {renderMobileView()}
      </MediaQuery>
    </s.PageWrapper>

  )
}