import styled from 'styled-components';

const AppBarContainer = styled.nav`
  height: 8rem;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colours.LIGHT};
  box-shadow: ${props => props.theme.BOX_SHADOW};
  
`;

const HomeButton = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-size: ${props => props.theme.fonts.size.LARGE};
  font-weight: 500;
  font-family: 'Secular One';
  text-align: left;
  cursor: pointer;
  height: 100%;
  line-height: 100%;
  padding: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  gap: 0.5rem;
  @media (max-width: 425px){   
    font-size: ${props => props.theme.fonts.size.MEDIUM};
  } 
`;

const HomeButtonImage = styled.img`
  background-color: ${props => props.theme.colours.SHADING};
  @media (max-width: 768px){   
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  } 
  @media (min-width: 769px){
    height: 100%;
  } 
`;

const HomeButtonText = styled.div`
`;

const HomeSpan = styled.span`
  background-color: ${props => props.theme.colours.SHADING};
  @media (max-width: 768px){   
    width: 25%;
    height: 100%;
  } 
  @media (min-width: 769px){
    height: 100%;
  } 
`;

const PageButtons = styled.div`
  margin-right: 1.5rem;
  height: 100%;

  display: flex;
  gap: 1.8rem;
`;

const PageButton = styled.button`
  border: none;
  background: none;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  
  cursor: pointer;

  &:hover{
  color: ${props => props.theme.colours.TERTIARY};
  }
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  margin-right: 0.5rem;

  &:hover {
  color: ${props => props.theme.colours.TERTIARY};
  }
`;

const MenuButtonIcon = styled.svg`
  height: 2.5rem;
  width: 2.5rem;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  color: ${props => props.theme.colours.SECONDARY};

  &:hover {
  color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
  }
`;

const Menu = styled.div`
  background-color: ${props => props.theme.colours.SECONDARY};
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  border-top: 0.05rem solid ${props => props.theme.BUTTON_SECONDARY_HOVER};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  width: min-content;
`;

const MenuPageButton = styled.button`
  border: none;
  background: none;
  
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  color: ${props => props.theme.BUTTON_SECONDARY_TEXT};
  text-align: center;
  border-bottom: 0.05rem solid ${props => props.theme.BUTTON_SECONDARY_HOVER};
  padding: 1.5rem 2rem;
  flex: 1;

  display: inline-block;
  width: 100%;

  &:hover {
  background-color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
  text-decoration: underline;
  }

  &:last-child {
    border-bottom: none;
    }
`;

const Dates = styled.p<{ mobile?: boolean }>`
  font-size: ${props => props.theme.fonts.size.TINY};
  color: ${props => props.theme.colours.MAIN};
  padding-top: 10px;
  justify-content: baseline;

`;

export {
    AppBarContainer,
    HomeButton,
    HomeButtonImage,
    HomeButtonText,
    PageButtons,
    PageButton,
    MenuButton,
    MenuButtonIcon,
    Menu,
    MenuPageButton,
    Dates,
    HomeSpan,
  };