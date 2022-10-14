/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const AppBar = ({homeHref, aboutHref, homeTitle, aboutTitle} : any) => {
  return (
  <StyledDiv>

    <StyledSection>
      <StyledA href={homeHref}>{homeTitle}</StyledA>
    </StyledSection>

    <StyledSection>
      <span>|</span>
    </StyledSection>

    <StyledSection>
      <StyledA href={aboutHref}>{aboutTitle}</StyledA>
    </StyledSection>

  </StyledDiv>
  );
};

const StyledSection = styled.section`
  display: inline;
  margin: 0px 5px 0px 5px;
`;

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colours.MAIN};
  color: ${props => props.theme.colours.LIGHT};
  margin: 7px 10px 0px 10px;
  padding: 10px;
  border-radius: 17px;
`;

const StyledA = styled.a`
  font-family: ${props => props.theme.FONT_FAMILY};
  color: ${props => props.theme.APPBAR_TEXT};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.APPBAR_TEXT_HOVER};
  }
`;
