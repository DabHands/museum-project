import styled from 'styled-components';

const PageLayout = styled.div`
  max-width: 60rem;
  margin: 6rem auto;

  display: grid;
  grid-template-columns: 1fr 15rem 1fr;
  grid-template-rows: 20rem 20rem 20rem 20rem;

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
  font-size: 1.8rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1.5rem;
  letter-spacing: 1;
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;

  color: #495057;
`;

const TextButton = styled.button`
  border: none;
  background: none;
  background-color: #343a40;
  color: #FBC794;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1.4rem;
  padding: 0.7rem 1.4rem;
  border-radius: 0.3rem;

  &:hover {
    background-color: #495057;
    color: #fad4ad;
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