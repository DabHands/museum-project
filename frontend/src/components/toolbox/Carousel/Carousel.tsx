import React, { useState } from 'react'
import * as s from './Carousel.theme';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'


export type Slide = {
    image: string,
    altText: string,
}

interface Props {
    slides: Slide[],
    imageWidth?: string,
    carouselWidth?: string,
}

export const Carousel: React.FC<Props> = (
  { slides, imageWidth, carouselWidth}
) => {
    {/* Inspired by this Tutorial: https://www.youtube.com/watch?v=l1MYfu5YWHc */}
    
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if (current === slides.length-1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        } 
    }

    const prevSlide = () => {
        if (current === 0) {
            setCurrent(slides.length-1)
        } else {
            setCurrent(current - 1)
        }
    }

    return (
        <s.Wrapper width={carouselWidth}>
            <s.IconButton onClick={prevSlide} side='left'>
                <BsArrowLeftShort/>
            </s.IconButton>
            
            {slides.map(
                (slide, index) => {
                    return (
                    <s.SlideWrapper key={index}>
                            {index=== current && <s.SlideImage 
                                current={index === current}
                                width={imageWidth}
                                src={slide.image}
                            />}
                    </s.SlideWrapper>

                        
                            

                    )
                }
            )}

            <s.IconButton onClick={nextSlide} side='right'>
                <BsArrowRightShort/>
            </s.IconButton>
        </s.Wrapper>
       
    )
};