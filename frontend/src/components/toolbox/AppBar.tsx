/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components'

const AppBar = ({ className, children }: any) => {
  return (
    <span className={className}>
      {children}
    </span>
  );
};

export const StyledAppBar = styled(AppBar)`
color: palevioletred;
font-weight: bold;
`;
