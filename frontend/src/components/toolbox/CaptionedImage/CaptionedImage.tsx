import React from 'react'
import * as s from './CaptionedImage.theme';

interface Props {
    image: string,
    caption: string
}

export const CaptionedImage: React.FC<Props> = (
  { image, caption }
) => {


    
    return (
        <s.Wrapper>
            
            <s.Image
                src={image}
                draggable={false}
                loading="lazy"
            />
            <p>{caption}</p>
        </s.Wrapper> 
    )
};