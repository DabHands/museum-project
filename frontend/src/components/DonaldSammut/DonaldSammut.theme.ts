import styled from 'styled-components'

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

export {
    PageWrapper,
    BlogLink,
};