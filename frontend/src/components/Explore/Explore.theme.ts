import styled from 'styled-components'

const PageWrapper = styled.div`
    
`;

const ButtonWrapper = styled.div`
margin-right: 2rem;
`;

const Title = styled.h1`
    padding-left: 1em;
    font-size: ${props => props.theme.fonts.size.LARGE};
`;

const TopBar = styled.div`
   display: flex;
    grid-auto-flow: column;
    box-shadow: ${props => props.theme.BOX_SHADOW};
    align-items: center;
    justify-content: space-between;
`;

const Reminder = styled.div`
    border: solid 2px ${props => props.theme.colours.SECONDARY} 0.8;
    border-radius: 5px;
    //box-shadow: ${props => props.theme.BOX_SHADOW};
    font-style: italic;
    padding: 5px 5px 3px 5px;

    max-width: fit-content;
    display: flex;
    justify-self: center;
    
`;



export {
    PageWrapper,
    ButtonWrapper,
    Title,
    TopBar,
    Reminder
};