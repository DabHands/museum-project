import React from 'react';
import * as s from './Popup.theme';
import cat from './cat.jpg';
import { PopupEmbroideryInfo } from '../../types/types';

interface Props {
  handleOnClickButton: () => void,
  embroideryInfo: PopupEmbroideryInfo
}

export const Popup: React.FC<Props> = ({ handleOnClickButton, embroideryInfo }) => {
  console.log(embroideryInfo.embroideryFileName);

  const fileName = embroideryInfo.embroideryFileName as string;
  const fileNamee = "favicon-16x16.png";
  return (
    <s.PopupContainer>
      <s.ImageContainer>
        {fileName && <s.EmbroideryImage src={fileName} alt="Embroidery Image" />}
      </s.ImageContainer>
      <s.AuthorName>Author Name: {embroideryInfo.authorName}</s.AuthorName>
      <s.AnatomyName>Embroidery Name: {embroideryInfo.anatomyName}</s.AnatomyName>
      <s.BackToModelButtonContainer>
        <s.BackToModelButton onClick={handleOnClickButton}>Back to Model</s.BackToModelButton>
      </s.BackToModelButtonContainer>
    </s.PopupContainer>)
}