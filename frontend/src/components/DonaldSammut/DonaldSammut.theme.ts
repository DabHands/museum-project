import styled, { css } from 'styled-components'

const PageWrapper = styled.div`
    padding: 1rem;
`;


const BlogLink = styled.a`
    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;    
    } 
    @media (min-width: 769px){
        
    } 
    
    text-decoration: none;
    
    font-size: ${props => props.theme.fonts.size.MEDIUM};
`;

const Headshot = styled.img`
    
    height: auto;
    object-fit: cover;
    border: solid 3px ${props => props.theme.colours.SECONDARY};

    @media (max-width: 425px){
        width: 90%; 
        display: block;
    } 
    @media (min-width: 426px){
        width: 90%; 
    } 
`;

const Spanel = styled.span<{ flip?: boolean, even?:boolean }>`
    display: grid;
    grid-template-columns: ${props => props.flip ? "1fr 3fr" : "3fr 1fr"};
    ${props => props.even && css`
        grid-template-columns: 1.75fr 2.25fr;
    `};
    align-items: center;
`;

export {
    PageWrapper,
    BlogLink,
    Headshot,
    Spanel
};