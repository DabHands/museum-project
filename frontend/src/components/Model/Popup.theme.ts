import styled from 'styled-components'

const PopupContainer = styled.div`
  margin: 0;
  padding: 0;

  padding: 1rem 1rem;
  background-color: #212529;
  border-radius: 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 40px 1px #495057;
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: rgba(255, 255, 255, 0.8);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  max-width: 30vw;
  
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EmbroideryImage = styled.img`
  // height: 30%;
`;

const CloseButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: #343a40;
  border-radius: 0.7rem;
`;

const CloseIcon = styled.svg`
  padding: 0;
  margin: 0;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 0.1rem;
`;

const NameHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
`;

const AuthorName = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

const AnatomyName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
`;

const EmbroideryDescription = styled.p`
  margin: 0;
  padding: 0;
`;

const BackToModelButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
`;

const BackToModelButton = styled.button`
  background-color: #CFC1B1;
  font-size: 1.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: 0.7rem;
`;


export {
  PopupContainer,
  ImageContainer,
  EmbroideryImage,
  CloseButton,
  CloseIcon,
  NameHeader,
  AuthorName,
  AnatomyName,
  EmbroideryDescription,
  BackToModelButtonContainer,
  BackToModelButton
};