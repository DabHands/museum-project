import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    display: grid;
    
    padding: 2em;
    margin: 1em;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER} ;
    box-shadow: ${props => props.theme.BOX_SHADOW};
    background-color: ${props => props.theme.colours.LIGHT};  
    
    @media (max-width: 768px){
        grid-auto-flow: row;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        align-items: center;

    } 
    @media (min-width: 769px){
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
    } 
`;

const Thumbnail = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    object-fit: scale-down;
    
`;

const Details = styled.div`
    padding-left: 1rem;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    color: ${props => props.theme.colours.SHADING};

`;

const Name = styled.div`
    font-size: ${props => props.theme.fonts.size.MEDIUM};
    color: ${props => props.theme.colours.MAIN};
    @media (min-width: 769px){
        max-width: 150px;
    } 
    
`;

const Anatomy = styled.div`
    @media (min-width: 769px){
        max-width: 150px;
    } 


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