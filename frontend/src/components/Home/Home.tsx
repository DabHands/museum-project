import React from 'react';
import * as s from './Home.theme';

export const Home: React.FC = () => {
  return (
    <s.PageLayout>
      <s.ImagesContainer>
        <s.Image
          src="../homepage/needle.jpg"
          alt="Needle"
        />
      </s.ImagesContainer>
      <s.ModelTextContainer>
        <s.TextWrapper>
          <s.TextHeading>3D Model</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
            quibusdam maiores ex non corporis quos.
          </s.Text>
          <s.TextButton>View 3D Model</s.TextButton>
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
          <s.TextButton>Scan An Image</s.TextButton>
        </s.TextWrapper>
      </s.ScanImageTextContainer>
      <s.ImagesContainer>
        <s.Image
          src="../homepage/embr.jpg"
          alt="Embroidery"
        />
      </s.ImagesContainer>

      <s.ImagesContainer>
        <s.Image
          src="../homepage/needle.jpg"
          alt="Needle"
        />
      </s.ImagesContainer>
      <s.ExploreTextContainer>
        <s.TextWrapper>
          <s.TextHeading>Explore</s.TextHeading>
          <s.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            itaque minus quae iste hic modi corrupti aut recusandae harum, ipsam
            quibusdam maiores ex non corporis quos facilis consequatur eligendi.
            Veritatis!
          </s.Text>
          <s.TextButton>Check Out All Embroideries</s.TextButton>
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
          <s.TextButton>See More About The Artist</s.TextButton>
        </s.TextWrapper>
      </s.AboutTextContainer>
      <s.ImagesContainer>
        <s.Image
          src="../homepage/embr.jpg"
          alt="Embroidery"
        />
      </s.ImagesContainer>
    </s.PageLayout>
  )
}