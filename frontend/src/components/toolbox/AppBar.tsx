/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const AppBar = ({ className, children }: any) => {
  return (
  <StyledDiv>

    <StyledSection>
      <StyledA href='http://localhost:3000/'>Home</StyledA>
    </StyledSection>

    <StyledSection>
      <span>|</span>
    </StyledSection>

    <StyledSection>
      <StyledA href='http://localhost:3000/about'>About</StyledA>
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
  color: white;
  text-decoration: none;
`;
