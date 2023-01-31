import styled from 'styled-components'

const FilterWrapper = styled.div`
    display: flex;
    background-color: ${props => props.theme.colours.MAIN};
    box-shadow: ${props => props.theme.BOX_SHADOW};
    color: ${props => props.theme.BUTTON_TEXT};
    padding: 0px 0rem 0px 1rem;
`;

const Filter = styled.div`
    display: inline-flex;
    width: 35%;
    padding-left: 2%;
    gap: 1rem;
    align-items: center;
`;

const Title = styled.h2``;

export {
    FilterWrapper,
    Filter,
    Title
};