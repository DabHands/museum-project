/* eslint-disable */
import React from 'react';
import * as s from './Popup.theme';
import cat from './cat.jpg';
import { PopupEmbroideryInfo } from '../../types/types';
import MediaQuery from 'react-responsive';

interface Props {
  handleOnClickButton: () => void,
  embroideryInfo: PopupEmbroideryInfo
}

export const Popup: React.FC<Props> = ({ handleOnClickButton, embroideryInfo }) => {
  console.log(embroideryInfo.embroideryFileName);

  const fileName = embroideryInfo.embroideryFileName as string;
  const isAuthorNameAvailable = embroideryInfo.authorOrigin !== "missing";
  console.log(isAuthorNameAvailable);
  return (
    <>
      <MediaQuery minWidth={800}>
        <s.PopupContainer mobile={false}>
          <s.ImageContainer mobile={false}>
            {fileName && <s.EmbroideryImage src={fileName} alt="Embroidery Image" />}
          </s.ImageContainer>
          <s.TextContainer>
            {isAuthorNameAvailable && <s.AuthorName mobile={false}>Made by {embroideryInfo.authorName}</s.AuthorName>}
            <s.AnatomyName mobile={false}>{embroideryInfo.anatomyName}</s.AnatomyName>
          </s.TextContainer>
          <s.BackToModelButtonContainer>
            <s.BackToModelButton mobile={false} onClick={handleOnClickButton}>Back to Model</s.BackToModelButton>
          </s.BackToModelButtonContainer>
        </s.PopupContainer>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <s.PopupContainer mobile={true}>
          <s.ImageContainer mobile={true}>
            {fileName && <s.EmbroideryImage src={fileName} alt="Embroidery Image" />}
          </s.ImageContainer>
          <s.TextContainer>
            <s.AuthorName mobile={true}>Made by {embroideryInfo.authorName}</s.AuthorName>
            <s.AnatomyName mobile={true}>{embroideryInfo.anatomyName}</s.AnatomyName>
          </s.TextContainer>
          <s.BackToModelButtonContainer>
            <s.BackToModelButton mobile={true} onClick={handleOnClickButton}>Back to Model</s.BackToModelButton>
          </s.BackToModelButtonContainer>
        </s.PopupContainer>
      </MediaQuery>
    </>
  )
}