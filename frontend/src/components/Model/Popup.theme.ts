import styled, { css } from 'styled-components'

const PopupContainer = styled.div<{ mobile: boolean }>`
  margin: 0;
  padding: 0;

  padding: 1rem 1rem;
  background-color: #212529;
  border-radius: 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 40px 1px #495057;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  ${props => props.mobile && css`
    max-width: 70vw;
  `}
  ${props => !props.mobile && css`
    max-width: 50vw;
    top: 6rem;
  `}  
`;

const ImageContainer = styled.div<{mobile: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${props => !props.mobile && css`
    max-height: 20%;
  `}
`;

const EmbroideryImage = styled.img`
  max-width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const AuthorName = styled.p<{ mobile: boolean }>`
  margin: 0;
  padding: 0;

  ${props => props.mobile && css`
  font-size: 1.1rem;
  `}

  ${props => !props.mobile && css`
  font-size: 1.3rem;
  `}
`;

const AnatomyName = styled.h5<{ mobile: boolean}>`
  margin: 0;
  padding: 0;

  text-align: center;

  ${props => props.mobile && css`
  font-size: 1.1rem;
  `}

  ${props => !props.mobile && css`
  font-size: 1.3rem;
  `}

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  gap: 1rem;
  // flex-direction: column;
`;

const Button = styled.button<{ mobile: boolean}>`
  background-color: #CFC1B1;
  cursor: pointer;
  padding: 0.7rem 1.4rem;
  border-radius: 0.7rem;
  &:hover {
    background-color: #a88e71;
  }
  ${props => props.mobile && css`
  font-size: 1.1rem;
  `}

  ${props => !props.mobile && css`
  font-size: 1.3rem;
  `}

`;


export {
  PopupContainer,
  ImageContainer,
  TextContainer,
  EmbroideryImage,
  AuthorName,
  AnatomyName,
  ButtonContainer,
  Button
};