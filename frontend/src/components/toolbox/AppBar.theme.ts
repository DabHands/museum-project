import styled from 'styled-components'

const AppBarSection = styled.section`
  display: inline;
  margin: 0px 5px 0px 5px;
`;

const AppBarBody = styled.div`
  background-color: ${props => props.theme.APPBAR_BACKGROUND};
  color: ${props => props.theme.APPBAR_TEXT};
  height: 45px;
  border-radius: 0px;
  display: flex;
  flex-direction: row;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.BOX_SHADOW};
`;

const AppBarHomePageWrapper = styled.div`
  display: inline;
  height: 100%;
`;

const AppBarPagesWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
`;

const AppBarLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const AppBarButton = styled.button`
  font-family: ${props => props.theme.FONT_FAMILY};
  font-size: ${props => props.theme.APPBAR_FONT_SIZE};
  background-color : ${props => props.theme.APPBAR_BACKGROUND};
  color: ${props => props.theme.APPBAR_TEXT};
  width: fit-content;
  cursor: pointer;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:hover{
    color: ${props => props.theme.APPBAR_BUTTON_HOVER_STATE_COLOR};
  }
`;

const AppBarBarsButton = styled.button`
  background-color : ${props => props.theme.APPBAR_BACKGROUND};
  color: ${props => props.theme.APPBAR_BARS_BUTTON_COLOR};
  border: none;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`;

export {
    AppBarSection,
    AppBarBody,
    AppBarHomePageWrapper,
    AppBarPagesWrapper,
    AppBarLogo,
    AppBarButton,
    AppBarBarsButton
  };