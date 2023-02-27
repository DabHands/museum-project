import React from 'react';
import * as s from './Popup.theme';
import cat from './cat.jpg';

interface FullName {
  firstName: string;
  lastName: string;
}

export const Popup: React.FC<{handleOnClickButton: () => void}> = ( {handleOnClickButton} ) => {

  return (
    <s.PopupContainer>
      <s.HeaderContainer>
        <s.EmbroideryImageHeader src={cat} alt="DabHands Logo" />
        <s.NameContainer>
          <s.NameHeader>Extensor - Indicis - Proprius Tendon</s.NameHeader>
        </s.NameContainer>
      </s.HeaderContainer>
      <s.MainTextContainer>
        <s.AuthorName>Author: Author Name</s.AuthorName>
        <s.AnatomyName>Anatomy: Anatomy Name</s.AnatomyName>
        <s.AnatomyDescription>Lorem ipsum fhueruhefh rfrueygf ergf fegreugfrue frgue.</s.AnatomyDescription>
      </s.MainTextContainer>
      <s.BackToModelButtonContainer>
        <s.BackToModelButton onClick={handleOnClickButton}>Back to Model</s.BackToModelButton>
      </s.BackToModelButtonContainer>
    </s.PopupContainer>)
}