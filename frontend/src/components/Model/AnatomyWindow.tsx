/* eslint-disable */
import React from 'react';
import MediaQuery from 'react-responsive';
import { AnatomyWindowInfo } from '../../types/types';
import * as s from './AnatomyWindow.theme';

interface Props {
  anatomyInfo: AnatomyWindowInfo,
  closeAnatomyWindow: () => void,
}

export const AnatomyWindow: React.FC<Props> = ({ anatomyInfo, closeAnatomyWindow }) => {

  return (
    <>
      <MediaQuery minWidth={800}>
        <s.AnatomyWindowOuterContainer mobile={false}>
            <s.HeaderContainer>
              <s.EmbroideryImage src={anatomyInfo.embroideryFileName} />
              <s.HeaderTextContainer>
                <s.AnatomyName mobile={false}>{anatomyInfo.anatomyName}</s.AnatomyName>
                <s.AuthorName>Made by {anatomyInfo.authorName}</s.AuthorName>
              </s.HeaderTextContainer>
            </s.HeaderContainer>
            <s.AnatomyDescription mobile={false}>{anatomyInfo.anatomyDescription}</s.AnatomyDescription>
            <s.BackToModelButtonContainer>
              <s.BackToModelButton onClick={closeAnatomyWindow}>Back to Model</s.BackToModelButton>
            </s.BackToModelButtonContainer>
        </s.AnatomyWindowOuterContainer>
      </MediaQuery>
      <MediaQuery maxWidth={799}>
        <s.AnatomyWindowOuterContainer mobile={true}>
            <s.HeaderContainer>
              <s.EmbroideryImage src={anatomyInfo.embroideryFileName} />
              <s.HeaderTextContainer>
                <s.AnatomyName mobile={true}>{anatomyInfo.anatomyName}</s.AnatomyName>
              </s.HeaderTextContainer>
            </s.HeaderContainer>
            <s.AuthorName>Made by {anatomyInfo.authorName}</s.AuthorName>
            <s.AnatomyDescription mobile={true}>{anatomyInfo.anatomyDescription}</s.AnatomyDescription>
            <s.BackToModelButtonContainer>
              <s.BackToModelButton onClick={closeAnatomyWindow}>Back to Model</s.BackToModelButton>
            </s.BackToModelButtonContainer>
        </s.AnatomyWindowOuterContainer>
      </MediaQuery>
    </>
  )
}