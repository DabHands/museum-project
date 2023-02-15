import React, { useContext } from 'react';
import * as s from './Home.theme';
import embr from '../../util/homepage/embr.jpg'

import logo from '../../util/logo/wide_logo.jpg'
import { MainH1, SecondaryH1 } from '../toolbox/Labels';
import MediaQuery from 'react-responsive';
import { CaptionedImage } from '../toolbox/CaptionedImage/CaptionedImage';
import { Button } from '../toolbox/Buttons';
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
      <Button onClick={navigationContext.navigateToModelPage}>
        See the 3D Model </Button>
      <s.PageText> Online, you can view the 3D model, or explore each embroidery
        and the information behind each anatomy. Learn about the Hand, and the Story
        of how this whole project came to be.
      </s.PageText>
      <Button onClick={navigationContext.navigateToExplorePage}>
        Explore the Embroideries </Button>
      <CaptionedImage image={embr} caption="One of the many embroideries on show at the exhibit." />
      <Button onClick={navigationContext.navigateToStoryPage}>
        The Story of the Sculpture </Button>
      <s.PageText>
        This is but one of the pieces in the wider Dab Hands Collection, 
        which was created in residence at the Manchester Museum by Lucy
        Burscough and her collaborative partners.
      </s.PageText>
      <Button onClick={navigationContext.navigateToAboutPage}>
        Read more about the Dab Hands Project.</Button>
    </>
  }

  const renderDesktopView = () => {
    return <p>Desktop</p>
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
    
    // <s.PageLayout>
    //   <s.ImagesContainer>
    //     <s.Image
    //       src={needle}
    //       alt="Needle"
    //     />
    //   </s.ImagesContainer>
    //   <s.ModelTextContainer>
    //     <s.TextWrapper>
    //       <s.TextHeading>3D Model</s.TextHeading>
    //       <s.Text>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
    //         itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
    //         quibusdam maiores ex non corporis quos.
    //       </s.Text>
    //       <s.TextButton onClick={navigationContext.navigateToModelPage}>View 3D Model</s.TextButton>
    //     </s.TextWrapper>
    //   </s.ModelTextContainer>

    //   <s.ScanImageTextContainer>
    //     <s.TextWrapper>
    //       <s.TextHeading>Scan Image</s.TextHeading>
    //       <s.Text>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
    //         rerum nam pariatur dolores repellendus ad? Aliquam laborum, dolore
    //         magnam accusamus unde dolores blanditiis sunt expedita corrupti,
    //         repellat minus amet ad?
    //       </s.Text>
    //       <s.TextButton onClick={navigationContext.navigateToScanImagePage}>Scan An Image</s.TextButton>
    //     </s.TextWrapper>
    //   </s.ScanImageTextContainer>
    //   <s.ImagesContainer>
    //     <s.Image
    //       src={embr}
    //       alt="Embroidery"
    //     />
    //   </s.ImagesContainer>

    //   <s.ImagesContainer>
    //     <s.Image
    //       src={needle}
    //       alt="Needle"
    //     />
    //   </s.ImagesContainer>
    //   <s.ExploreTextContainer>
    //     <s.TextWrapper>
    //       <s.TextHeading>Explore</s.TextHeading>
    //       <s.Text>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
    //         itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
    //         quibusdam maiores ex non corporis quos facilis consequatur eligendi.
    //         Veritatis!
    //       </s.Text>
    //       <s.TextButton onClick={navigationContext.navigateToExplorePage}>Check Out All Embroideries</s.TextButton>
    //     </s.TextWrapper>
    //   </s.ExploreTextContainer>

    //   <s.AboutTextContainer>
    //     <s.TextWrapper>
    //       <s.TextHeading>About</s.TextHeading>
    //       <s.Text>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
    //         rerum nam pariatur dolores repellendus ad? Aliquam laborum, dolore
    //         magnam accusamus unde dolores blanditiis sunt expedita corrupti,
    //         repellat minus amet ad?
    //       </s.Text>
    //       <s.TextButton onClick={navigationContext.navigateToAboutPage}>See More About The Artist</s.TextButton>
    //     </s.TextWrapper>
    //   </s.AboutTextContainer>
    //   <s.ImagesContainer>
    //     <s.Image
    //       src={embr}
    //       alt="Embroidery"
    //     />
    //   </s.ImagesContainer>
    // </s.PageLayout>
  )
}