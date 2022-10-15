import styled from 'styled-components'

const PageWrapper = styled.div`
`;

const ButtonWrapper = styled.div`
margin-right: 2rem;
`;

const Title = styled.h1`
    padding-left: 1em;
    font-size: 20pt;
`;

const TopBar = styled.div`
   display: flex;
    grid-auto-flow: column;
    box-shadow: ${props => props.theme.BOX_SHADOW};
    align-items: center;
    justify-content: space-between;
`;



export {
    PageWrapper,
    ButtonWrapper,
    Title,
    TopBar,
};