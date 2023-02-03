import styled from 'styled-components'

const PageWrapper = styled.div`
    
`;

const ButtonWrapper = styled.div`
margin-right: 2rem;
`;



const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    //box-shadow: ${props => props.theme.BOX_SHADOW};
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
`;

const Reminder = styled.div`
    border: solid 2px ${props => props.theme.colours.MAIN};
    border-radius: 5px;
    //box-shadow: ${props => props.theme.BOX_SHADOW};
    font-style: italic;
    padding: 5px 5px 3px 5px;
    margin: 0.5rem 2rem;

    max-width: fit-content;
    display: flex;
    justify-self: center;
    font-size: ${props => props.theme.fonts.size.TINY};
`;



export {
    PageWrapper,
    ButtonWrapper,
    TopBar,
    Reminder
};