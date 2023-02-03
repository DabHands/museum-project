import styled from 'styled-components';

const PageLayout = styled.div`
  max-width: 60rem;
  margin: 6rem auto;

  display: grid;
  grid-template-columns: 1fr 15rem 1fr;
  grid-template-rows: 18rem 18rem 18rem 18rem;

  row-gap: 8rem;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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

const TextHeading = styled.h3`
  margin: 0;
  padding: 0;

  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 600;
  color: ${props => props.theme.homepage_colours.HEADING};
  margin-bottom: 1.5rem;
  letter-spacing: 1;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-size: ${props => props.theme.fonts.size.SMALL};
  line-height: 1.6;
  margin-bottom: 1.4rem;

  color: ${props => props.theme.homepage_colours.TEXT};
`;

const TextButton = styled.button`
  border: none;
  background: none;
  background-color: ${props => props.theme.homepage_colours.BUTTON};
  color: ${props => props.theme.homepage_colours.TEXT_BUTTON};
  cursor: pointer;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  padding: 0.7rem 1.4rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: ${props => props.theme.homepage_colours.BUTTON_HOVER};
    color: ${props => props.theme.homepage_colours.TEXT_BUTTON_HOVER};
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
  ImagesContainer,
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