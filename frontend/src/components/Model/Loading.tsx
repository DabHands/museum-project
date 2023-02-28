/* eslint-disable */
import React from 'react';
import * as s from './Loading.theme';

export const Loading: React.FC = () => {

  return (
    <s.LoadingContainer>
      <s.LoadingWrapper>
        <s.LoadingText>Loading...</s.LoadingText>
      </s.LoadingWrapper>
    </s.LoadingContainer>
  )
}