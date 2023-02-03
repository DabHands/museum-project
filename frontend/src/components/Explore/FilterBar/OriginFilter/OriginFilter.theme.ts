import styled from 'styled-components'

const Select = styled.div`
    color: ${props => props.theme.BUTTON_BASIC_TEXT};
    font-size: ${props => props.theme.fonts.size.TINY};
`;

const Name = styled.p`
    font-size: ${props => props.theme.fonts.size.SMALL};
`;

export {
    Select,
    Name
};