import styled, { css } from 'styled-components'

const PageWrapper = styled.div`
  padding: 10px;
  `;

const PageText = styled.p`

`;

const Image = styled.img<{ centre?: boolean, individual?: boolean }>`
    max-width: 100%;
    height: auto;
    object-fit: scale-down;
    margin-bottom: 10px;
    ${props => props.centre && css`
        display: block; 
        margin-left: auto; 
        margin-right: auto; 
        width: 50%;
    `};

    ${props => props.individual && css`
        width: 50vw;
    `};
    
`;

export {
  PageWrapper,
  PageText,
  Image,
};