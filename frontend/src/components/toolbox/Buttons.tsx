import styled from 'styled-components'

export const Button = styled.button`
    font-family: ${props => props.theme.FONT_FAMILY};
    
    background-color : ${props => props.theme.BUTTON_BASIC};
    color: ${props => props.theme.BUTTON_BASIC_TEXT};
    width: fit-content;
    padding: 1.5%;
    border: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.BUTTON_BASIC_HOVER};
    }
`;

export const MainButton = styled.button`
    font-family: ${props => props.theme.FONT_FAMILY};
    
    background-color : ${props => props.theme.colours.MAIN};
    color: ${props => props.theme.BUTTON_TEXT};
    width: fit-content;
    padding: 1.5%;
    border: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.BUTTON_HOVER};
    }
`;

export const SecondaryButton = styled.button`
    font-family: ${props => props.theme.FONT_FAMILY};
    
    background-color : ${props => props.theme.colours.SECONDARY};
    color: ${props => props.theme.BUTTON_SECONDARY_TEXT};
    width: fit-content;
    padding: 1.5%;
    border: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
    }
`;