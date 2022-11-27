import React, { useContext } from 'react';
import * as s from './Home.theme';
import needle from '../../util/homepage/needle.jpg';
import embr from '../../util/homepage/embr.jpg';
import NavigationContext from '../../contexts/NavigationContext';

export const Home: React.FC = () => {
  const navigationContext = useContext(NavigationContext);

  return (
    <s.PageLayout>
      <s.LeftImagesContainer>
        <s.Image
          src={needle}
          alt="Needle"
        />
      </s.LeftImagesContainer>
      <s.ModelTextContainer>
        <s.TextWrapper>
          <s.TextHeading>3D Model</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
            quibusdam maiores ex non corporis quos.
          </s.Text>
          <s.TextButton onClick={navigationContext.navigateToModelPage}>View 3D Model</s.TextButton>
        </s.TextWrapper>
      </s.ModelTextContainer>

      <s.ScanImageTextContainer>
        <s.TextWrapper>
          <s.TextHeading>Scan Image</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            rerum nam pariatur dolores repellendus ad? Aliquam laborum, dolore
            magnam accusamus unde dolores blanditiis sunt expedita corrupti,
            repellat minus amet ad?
          </s.Text>
          <s.TextButton onClick={navigationContext.navigateToScanImagePage}>Scan An Image</s.TextButton>
        </s.TextWrapper>
      </s.ScanImageTextContainer>
      <s.RightImagesContainer>
        <s.Image
          src={embr}
          alt="Embroidery"
        />
      </s.RightImagesContainer>

      <s.LeftImagesContainer>
        <s.Image
          src={needle}
          alt="Needle"
        />
      </s.LeftImagesContainer>
      <s.ExploreTextContainer>
        <s.TextWrapper>
          <s.TextHeading>Explore</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
            quibusdam maiores ex non corporis quos facilis consequatur eligendi.
            Veritatis!
          </s.Text>
          <s.TextButton onClick={navigationContext.navigateToExplorePage}>Check Out All Embroideries</s.TextButton>
        </s.TextWrapper>
      </s.ExploreTextContainer>

      <s.AboutTextContainer>
        <s.TextWrapper>
          <s.TextHeading>About</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            rerum nam pariatur dolores repellendus ad? Aliquam laborum, dolore
            magnam accusamus unde dolores blanditiis sunt expedita corrupti,
            repellat minus amet ad?
          </s.Text>
          <s.TextButton onClick={navigationContext.navigateToAboutPage}>See More About The Artist</s.TextButton>
        </s.TextWrapper>
      </s.AboutTextContainer>
      <s.RightImagesContainer>
        <s.Image
          src={embr}
          alt="Embroidery"
        />
      </s.RightImagesContainer>
    </s.PageLayout>
  )
}