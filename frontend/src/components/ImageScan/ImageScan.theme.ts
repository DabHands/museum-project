import styled from 'styled-components'

const ScanButton = styled.button`
    
    background-color : ${props => props.theme.colours.MAIN};
    color: ${props => props.theme.colours.SHADING};
    width: fit-content;
    padding: 1em;

    &:hover{
      background-color: ${props => props.theme.colours.SECONDARY};
    }
`;

export {
    ScanButton
};