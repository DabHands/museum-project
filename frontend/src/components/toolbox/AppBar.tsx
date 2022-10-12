/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const AppBar = ({ className, children }: any) => {
  return (
  <StyledDiv>
    <StyledSection>
      <button aria-label="Home">Home</button>
    </StyledSection>
    <StyledSection role="toolbar">
      <button aria-label="About">About</button>
    </StyledSection>
  </StyledDiv>
  );
};

const StyledSection = styled.section`
display: inline;
`;

const StyledDiv = styled.div`
background-color: purple;
`;

export const StyledAppBar = styled(AppBar)`
color: palevioletred;
font-weight: bold;
`;
