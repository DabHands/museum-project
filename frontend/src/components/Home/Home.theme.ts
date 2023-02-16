import styled, { css } from 'styled-components'
import { Button } from '../toolbox/Buttons';

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

const Spanel = styled.span<{ flip?: boolean, even?:boolean }>`
    display: grid;
    grid-template-columns: ${props => props.flip ? "1fr 3fr" : "3fr 1fr"};
    ${props => props.even && css`
        grid-template-columns: 1.75fr 2.25fr;
    `};
    align-items: center;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;

export {
  PageWrapper,
  PageText,
  Image,
  Spanel,
  StyledButton

};