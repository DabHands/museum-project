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
    max-width: 90vw;
    max-height: 100vh;
    

`;

const SlideImage = styled.img<{ current?: boolean; width?: string }>`
    height: ${props => props.width ? props.width : IMAGE_SIZE};
    width: 100%;
    object-fit: scale-down;
    transition: all 2s ease;
    border-radius: 10px;
    max-height: 100vh;
    
`;

const SlideWrapper = styled.div`
    
`;


const IconButton = styled.button<{ side?: string }>`
    width: auto;
    outline: none;
    border: none;
    background-color: unset;
    font-size: 3rem;
    
    //float: ${props => props.side? props.side : 'none'};;
`;



export {
    Wrapper,
    IconButton,
    SlideImage,
    SlideWrapper
};