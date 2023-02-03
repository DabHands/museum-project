import styled from 'styled-components';

const AppBarContainer = styled.nav`
  background-color: ${props => props.theme.appbar_colours.BACKGROUND};
  height: 6rem;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.appbar_colours.TEXT};
`;

const HomeButton = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-size: ${props => props.theme.fonts.size.LARGE};
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: ${props => props.theme.appbar_colours.TEXT};
  cursor: pointer;
  height: 100%;
  line-height: 100%;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover{
  color: ${props => props.theme.appbar_colours.TEXT_HOVER};
  }
`;

const HomeButtonImage = styled.img`
  height: 100%;
`;

const HomeButtonText = styled.span``;

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
  color: ${props => props.theme.appbar_colours.TEXT};
  cursor: pointer;

  &:hover{
  color: ${props => props.theme.appbar_colours.TEXT_HOVER};
  }
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  margin-right: 0.5rem;

  &:hover {
  color: ${props => props.theme.appbar_colours.TEXT_HOVER};
  }
`;

const MenuButtonIcon = styled.svg`
  height: 2.5rem;
  width: 2.5rem;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  color: ${props => props.theme.appbar_colours.BARS_BUTTON_ICON};

  &:hover {
  color: ${props => props.theme.appbar_colours.TEXT_HOVER};
  }
`;

const Menu = styled.div`
  background-color: ${props => props.theme.appbar_colours.BACKGROUND};
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  border-top: 0.05rem solid ${props => props.theme.appbar_colours.MENU_BORDER};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`;

const MenuPageButton = styled.button`
  border: none;
  background: none;
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: ${props => props.theme.appbar_colours.TEXT};
  text-align: center;
  //cursor: pointer;
  border-bottom: 0.05rem solid ${props => props.theme.appbar_colours.MENU_BORDER};
  padding: 1.5rem 2rem;
  flex: 1;

  display: inline-block;
  width: 100%;

  &:hover {
    color: ${props => props.theme.appbar_colours.TEXT_HOVER};
    }

  &:last-child {
    border-bottom: none;
    }
`;

const Dates = styled.p<{ mobile?: boolean }>`
  font-size: ${props => props.mobile ? props.theme.fonts.size.TINY : props.theme.fonts.size.SMALL};
  color: ${props => props.theme.colours.LIGHT};
  padding-top: 10px;
  justify-content: baseline;
  padding-right: ${props => props.mobile ? 'none' : '5%'};
  padding-left: ${props => props.mobile ? '10px' : 'unset'};

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
    Dates
  };