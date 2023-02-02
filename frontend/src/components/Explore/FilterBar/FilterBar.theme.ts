import styled from 'styled-components'

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: ${props => props.theme.colours.MAIN};
    box-shadow: ${props => props.theme.BOX_SHADOW};
    color: ${props => props.theme.BUTTON_TEXT};
    padding: 0px 1.5rem 0px 1.5rem;
    border-radius: 25px;
    margin: 10px 1rem 0px 1rem;
    //width: max-content;
    
`;

const Filter = styled.div`
    display: flex;
    width: max-content;
    padding-left: 2%;
    gap: 1rem;
    align-items: center;
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fonts.size.LARGE};
`;

export {
    FilterWrapper,
    Filter,
    Title
};