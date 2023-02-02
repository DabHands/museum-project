import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    display: grid;
    grid-auto-flow: rows;
    grid-template-columns: 1fr 1fr;
    padding: 2em;
    margin: 1em;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER} ;
    box-shadow: ${props => props.theme.BOX_SHADOW};
    background-color: rgb(250, 239, 229);  
    height: max-content;
`;

const Thumbnail = styled.img`
    max-width: 100%;
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
    font-size: ${props => props.theme.fonts.size.MEDIUM};
    color: ${props => props.theme.colours.MAIN};
`;

const Anatomy = styled.div`
    font-size: ${props => props.theme.fonts.size.SMALL};
`;

const Origin = styled.div`
    font-size: ${props => props.theme.fonts.size.SMALL};
    color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
`;

const PageLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.BUTTON_BASIC_TEXT};;
`;

export { Box, Details, Name, Anatomy, Origin, Thumbnail, PageLink };