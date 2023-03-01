import styled, { css } from 'styled-components';

const AnatomyWindowOuterContainer = styled.div<{ mobile: boolean }>`
  position: absolute;
  background-color: #212529;
  border: 1px solid #CFC1B1;
  border-radius: 0.7rem;
  box-shadow: 2px 2px 40px 1px #343a40;
  position: absolute;

  color: rgba(255, 255, 255, 0.8);
  width: 90%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.mobile && css`
    top: 5rem;
    width: 90%;
  `}
`;

const AnatomyWindowInnerContainer = styled.div`
  margin: 1rem;
  padding: 1rem;

  border: 1px solid #CFC1B1;
  border-radius: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 70%;
`;

const EmbroideryImage = styled.img`
  width: 30%;
`;

const AnatomyName = styled.h4<{ mobile: boolean}>`
  padding: 0;
  margin: 0;

  text-align: center;
  font-size: 1.5rem;

  ${props => props.mobile && css`
    font-size: 1.3rem;
  `}
`;

const AuthorName = styled.h5`
  padding: 0;
  margin: 0;

  text-align: center;
  font-size: 1.3rem;
`;

const AnatomyDescription = styled.p<{ mobile: boolean }>`
  padding: 0;
  margin: 0;

  font-size: 1.5rem;
  line-height: 1.4;

  ${props => props.mobile && css`
    font-size: 1.3rem;
  `}
`;

const BackToModelButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackToModelButton = styled.button`
  cursor: pointer;

  background-color: #CFC1B1;
  padding: 0.7rem 1.4rem;
  border-radius: 0.7rem;
  font-size: 1.3rem;

  &:hover {
    background-color: #a88e71;
  }
`;

export {
  AnatomyWindowOuterContainer,
  AnatomyWindowInnerContainer,
  HeaderContainer,
  HeaderTextContainer,
  EmbroideryImage,
  AnatomyName,
  AuthorName,
  AnatomyDescription,
  BackToModelButtonContainer,
  BackToModelButton
};