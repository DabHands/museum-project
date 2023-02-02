import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: ${props => props.theme.appbar_colours.BACKGROUND};
    margin-top: auto;
    color: ${props => props.theme.appbar_colours.TEXT};
    font-size: ${props => props.theme.fonts.size.SMALL};
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;

const MobileView = styled.div`
    font-size: ${props => props.theme.fonts.size.TINY};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;


const Funders = styled.img<{ mobile?: boolean }>`
    width: ${props => props.mobile ? '70%' : '45%'};
    height: ${props => props.mobile ? '70%' : '45%'};
    padding: 10px 5px;
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.appbar_colours.TEXT};
    &:hover {
        color: ${props => props.theme.appbar_colours.TEXT_HOVER};
    }
`;




export {
    Wrapper,
    MobileView,
    Funders,
    FooterLink
};