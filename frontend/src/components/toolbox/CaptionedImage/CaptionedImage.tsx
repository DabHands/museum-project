import React from 'react'
import * as s from './CaptionedImage.theme';

interface Props {
    image: string,
    caption: string
    size?: "small" | "wide" | "auto"
}

export const CaptionedImage: React.FC<Props> = (
  { image, caption, size }
) => {


    
    return (
        <s.Wrapper size={size}>
            <s.Image
                src={image}
                draggable={false}
                loading="lazy"
            />
            <s.Caption>{caption}</s.Caption>
        </s.Wrapper> 
    )
};