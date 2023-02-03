import styled from 'styled-components'

export const MainH1 = styled.h1<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.MAIN};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;

export const SecondaryH1 = styled.h1<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.SECONDARY};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;

export const TertiaryH1 = styled.h1<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.TERTIARY};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;


export const MainH2 = styled.h2<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.MAIN};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;

export const SecondaryH2 = styled.h2<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.SECONDARY};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;

export const TertiaryH2 = styled.h2<{ toPad?: boolean }>`
    font-size: ${props => props.theme.fonts.size.LARGE};
    font-weight: bolder;
    background-color: ${props => props.theme.colours.TERTIARY};
    padding: 10px 10px;
    width: max-content;
    font-family: 'Secular One';
    margin-left: ${props => props.toPad ? "1rem" : "0rem"};
`;
