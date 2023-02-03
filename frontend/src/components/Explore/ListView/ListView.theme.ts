import { Link } from "react-router-dom";
import styled from "styled-components";

const EmbroideryTable = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 1em;
    margin: 3em 1em 1em 1em;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER} ;
    box-shadow: ${props => props.theme.BOX_SHADOW};
`;

const EmbroideryTableHeader = styled.div`
    display: grid;
    grid-auto-flow: rows;
    grid-template-columns: 1fr 1fr;
    border-bottom: solid 1.5px rgba(0, 0,0,.50);

`;

const EmbroideryColumnHeader = styled.div`
    display: flex;
    margin: 1em;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fonts.size.MEDIUM};
    font-weight: bold;
`;

const EmbroideryTableRow = styled.div`
    display: grid;
    grid-auto-flow: rows;
    grid-template-columns: 1fr 1fr;
    border-bottom: ${props => props.theme.ROW_DIVIDER};

    &:hover {
        box-shadow: 0 10px 10px rgba(0,0,0,.1);
    }
`;

const EmbroideryTableCell = styled.div<{ toCentre?: boolean }>`
    display: flex;
    padding: 1em; 
    justify-content: ${props => props.toCentre ? 'center' : 'initial'} ;
`;

const PageLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.BUTTON_BASIC_TEXT};
`;

export {
    EmbroideryTable,
    EmbroideryTableHeader,
    EmbroideryColumnHeader,
    EmbroideryTableRow,
    EmbroideryTableCell,
    PageLink,
};