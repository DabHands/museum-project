/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const AppBar = ({ className, children }: any) => {
  return (
  <StyledDiv>

    <StyledSection>
      <StyledSpan>Home</StyledSpan>
    </StyledSection>

    <StyledSection>
      <span>|</span>
    </StyledSection>

    <StyledSection role="toolbar">
      <span>About</span>
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

const StyledSpan = styled.span`
  font-family: ${props => props.theme.FONT_FAMILY};
`;
