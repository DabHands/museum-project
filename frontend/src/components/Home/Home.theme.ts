import styled from 'styled-components';

const PageLayout = styled.div`
  font-family: Inter, sans-serif;
  max-width: 45rem;
  margin: 6rem auto;

  display: grid;
  grid-template-columns: 1fr 10rem 1fr;
  grid-template-rows: 16rem 16rem 16rem 16rem;

  row-gap: 8rem;
`;

const LeftImagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const RightImagesContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

`;

const Image = styled.img`
  height: 100%;
  border-radius: 0.3rem;
`;

const ModelTextContainer = styled.div`
  grid-column: 2 / -1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div``;

const TextHeading = styled.div`
  margin: 0;
  padding: 0;

  font-size: 18pt;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colours.MAIN};
  border-bottom: solid 2.5px ${props => props.theme.colours.SECONDARY};
  margin-bottom: 1.5rem;
  letter-spacing: 1;
  display: inline-block;
  width: fit-content;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-size: 13pt;
  line-height: 1.6;
  margin-bottom: 1.4rem;

  color: ${props => props.theme.homepage_colours.TEXT};
`;

const TextButton = styled.button`
  border: none;
  background: none;
  background-color: ${props => props.theme.homepage_colours.TEXT_BUTTON};
  color: ${props => props.theme.homepage_colours.BUTTON};
  background-color : ${props => props.theme.colours.SECONDARY};
  cursor: pointer;
  font-size: 15pt;
  font-weight: 500;
  letter-spacing: -0.5px;
  padding: 0.7rem 1.4rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
  }
`;

const ScanImageTextContainer = styled.div`
  grid-column: 1 / 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExploreTextContainer = styled.div`
  grid-column: 2 / -1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutTextContainer = styled.div`
  grid-column: 1 / 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  PageLayout,
  LeftImagesContainer,
  RightImagesContainer,
  Image,
  ModelTextContainer,
  TextWrapper,
  TextHeading,
  Text,
  TextButton,
  ScanImageTextContainer,
  ExploreTextContainer,
  AboutTextContainer
};