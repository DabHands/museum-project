/* eslint-disable */
import React from 'react';
import * as s from './Popup.theme';
import { PopupEmbroideryInfo } from '../../types/types';
import MediaQuery from 'react-responsive';

interface Props {
  closePopup: () => void,
  openAnatomyWindow: () => void,
  embroideryInfo: PopupEmbroideryInfo,
}

export const Popup: React.FC<Props> = ({ 
  closePopup,
  openAnatomyWindow,
  embroideryInfo
  }) => {

  const fileName = embroideryInfo.embroideryFileName as string;
  const isAuthorNameAvailable = embroideryInfo.authorOrigin !== "missing";

  return (
    <>
      <MediaQuery minWidth={800}>
        <s.PopupContainer mobile={false}>
          <s.ImageContainer mobile={false}>
            {fileName && <s.EmbroideryImage src={fileName} alt="Embroidery Image" />}
          </s.ImageContainer>
          <s.TextContainer>
            <s.AnatomyName mobile={false}>{embroideryInfo.anatomyName}</s.AnatomyName>
            {isAuthorNameAvailable && <s.AuthorName mobile={false}>Made by {embroideryInfo.authorName}</s.AuthorName>}
          </s.TextContainer>
          <s.ButtonContainer>
            <s.Button mobile={false} onClick={openAnatomyWindow}>The Anatomy</s.Button>
            <s.Button mobile={false} onClick={closePopup}>Back to Model</s.Button>
          </s.ButtonContainer>
        </s.PopupContainer>
      </MediaQuery>
      <MediaQuery maxWidth={799}>
        <s.PopupContainer mobile={true}>
          <s.ImageContainer mobile={true}>
            {fileName && <s.EmbroideryImage src={fileName} alt="Embroidery Image" />}
          </s.ImageContainer>
          <s.TextContainer>
            <s.AnatomyName mobile={true}>{embroideryInfo.anatomyName}</s.AnatomyName>
            {isAuthorNameAvailable && <s.AuthorName mobile={true}>Made by {embroideryInfo.authorName}</s.AuthorName>}
          </s.TextContainer>
          <s.ButtonContainer>
            <s.Button mobile={true} onClick={openAnatomyWindow}>The Anatomy</s.Button>
            <s.Button mobile={true} onClick={closePopup}>Back to Model</s.Button>
          </s.ButtonContainer>
        </s.PopupContainer>
      </MediaQuery>
    </>
  )
}