import styled from 'styled-components'

const IMAGE_SIZE = '10rem'
const CAROUSEL_SIZE = '50%'

const Wrapper = styled.section<{ width?: string }>`
    
    width: ${props => props.width ? props.width : CAROUSEL_SIZE};
    height: auto;
    border: solid 3px ${props => props.theme.colours.SECONDARY};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;


`;

const SlideImage = styled.img<{ current?: boolean; width?: string }>`
    opacity: ${props => props.current ? "1" : "0"};
    height: ${props => props.width ? props.width : IMAGE_SIZE};
    width: 100%;
    object-fit: scale-down;
    transition-duration: 300s ease;
    
`;

const SlideWrapper = styled.div`
    
`;


const IconButton = styled.button<{ side?: string }>`
    width: auto;
    outline: none;
    border: none;
    background-color: unset;
    font-size: larger;
    
    //float: ${props => props.side? props.side : 'none'};;
`;



export {
    Wrapper,
    IconButton,
    SlideImage,
    SlideWrapper
};