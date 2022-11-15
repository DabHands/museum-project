import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2em;
    margin: 3em 1em 1em 1em;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER} ;
    box-shadow: ${props => props.theme.BOX_SHADOW};
    width: 20rem;
    min-width: 10rem;
    height: auto;
`;

const Thumbnail = styled.img`
    max-width: 30%;
    height: auto;
    margin: 0;
    padding: 0;
    object-fit: cover;
`;

const Details = styled.div`
    padding-left: 1rem;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const Name = styled.div`
    font-size: 16pt;
    color: ${props => props.theme.colours.MAIN};
`;

const Anatomy = styled.div`
    font-size: 12pt;
`;

const Origin = styled.div`
    font-size: 12pt;
    color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
`;

const PageLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.BUTTON_BASIC_TEXT};;
`;

export { Box, Details, Name, Anatomy, Origin, Thumbnail, PageLink };