import styled from 'styled-components'

const AppBarSection = styled.section`
  display: inline;
  margin: 0px 5px 0px 5px;
`;

const AppBarBody = styled.div`
  background-color: ${props => props.theme.BACKGROUND_COLOUR};
  color: ${props => props.theme.APPBAR_TEXT};
  height: 30px;
  padding: 10px;
  border-radius: 0px;
  display: flex;
  grid-auto-flow: column;
  box-shadow: ${props => props.theme.BOX_SHADOW};
  align-items: center;
  justify-content: flex-end;
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

export {
    AppBarSection,
    AppBarBody,
    AppBarButton
};