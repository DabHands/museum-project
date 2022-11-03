import styled from 'styled-components'

const AppBarSection = styled.section`
  display: inline;
  margin: 0px 5px 0px 5px;
`;

const AppBarBody = styled.div`
  background-color: ${props => props.theme.colours.MAIN};
  color: ${props => props.theme.colours.LIGHT};
  margin: 7px 10px 0px 10px;
  padding: 10px;
  border-radius: 0px;
`;

const AppBarHrefLink = styled.a`
  font-family: ${props => props.theme.FONT_FAMILY};
  color: ${props => props.theme.APPBAR_TEXT};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.APPBAR_TEXT_HOVER};
  }
`;

export {
    AppBarSection,
    AppBarBody,
    AppBarHrefLink
};