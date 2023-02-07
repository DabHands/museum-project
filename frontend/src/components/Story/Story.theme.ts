import styled, { css } from 'styled-components'

const PageWrapper = styled.div`
    padding: 1rem;
    
`;

const PageText = styled.p`
`;

const Quote = styled.p`
`;

const AccompanyImage = styled.img<{ centre?: boolean }>`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
    ${props => props.centre && css`
        display: block; 
        margin-left: auto; 
        margin-right: auto; 
        width: 50%;
    `};
    
    //border-radius: 100%;
    //border: solid 3px ${props => props.theme.colours.SECONDARY};
`;

const Spanel = styled.span<{ flip?: boolean, even?:boolean }>`
    display: grid;
    grid-template-columns: ${props => props.flip ? "1fr 3fr" : "3fr 1fr"};
    ${props => props.even && css`
        grid-template-columns: 1.75fr 2.25fr;
    `};
    align-items: center;
`;

const CentreDiv = styled.div`
    display: block; 
    padding-left: 5%;
    `;


export {
    PageWrapper,
    PageText,
    Quote,
    AccompanyImage,
    Spanel,
    CentreDiv
};