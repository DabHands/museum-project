import styled from 'styled-components'

const PageWrapper = styled.div`
    padding: 1rem;
    
`;

const PageText = styled.p`
`;

const Quote = styled.p`
`;

const AccompanyImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
    //border-radius: 100%;
    //border: solid 3px ${props => props.theme.colours.SECONDARY};
`;

const Spanel = styled.span<{ flip?: boolean }>`
    display: grid;
    grid-template-columns: ${props => props.flip ? "1fr 3fr" : "3fr 1fr"};
    align-items: center;
`;


export {
    PageWrapper,
    PageText,
    Quote,
    AccompanyImage,
    Spanel,
};