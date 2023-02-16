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
        In the museum, youll see the sculpture of the hand, with 
        various embroideries made by artists from across Manchester all over it.
      </s.PageText>
      <s.StyledButton onClick={navigationContext.navigateToModelPage}>
        See the 3D Model </s.StyledButton>
      <s.PageText> Online, you can view the 3D model, or explore each embroidery
        and the information behind each anatomy. Learn about the Hand, and the Story
        of how this whole project came to be.
      </s.PageText>
      <s.StyledButton onClick={navigationContext.navigateToExplorePage}>
        Explore the Embroideries </s.StyledButton>
      <CaptionedImage image={embr} caption="One of the many embroideries on show at the exhibit." />
      <s.StyledButton onClick={navigationContext.navigateToStoryPage}>
        The Story of the Sculpture </s.StyledButton>
      <s.PageText>
        This is but one of the pieces in the wider Dab Hands Collection, 
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
            In the museum, you&apos;ll see the sculpture of the hand, with 
            various embroideries made by artists from across Manchester all over it.
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
            and the information behind each anatomy. Learn about the Hand, and the Story
            of how this whole project came to be.
          </s.PageText>
          <s.StyledButton onClick={navigationContext.navigateToExplorePage}>
            Explore the Embroideries </s.StyledButton>
          
          <s.StyledButton onClick={navigationContext.navigateToStoryPage}>
            The Story of the Sculpture </s.StyledButton>
          <s.PageText>
            This is but one of the pieces in the wider Dab Hands Collection, 
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
        <MainH1 style={{ width: 'auto' }}>
          Dab Hands: That&apos;ll Need Stitching
        </MainH1>
        {renderMobileView()}
      </MediaQuery>
    </s.PageWrapper>
  )
}