import styled from 'styled-components'

export const MainH1 = styled.h1`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.MAIN};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
`;

export const SecondaryH1 = styled.h1`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.SECONDARY};
    padding: 10px 10px;
    font-family: 'Secular One';
`;

export const TertiaryH1 = styled.h1`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.TERTIARY};
    padding: 10px 10px;
    font-family: 'Secular One';
`;
