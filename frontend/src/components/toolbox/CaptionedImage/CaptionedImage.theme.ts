import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ size?: string }>`
    align-items: center;
    justify-content: center;
    padding: 10px;
    ${props => {
        switch (props.size) {
            case 'small':
                return (css`
                    width: 50%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    `)
                break;
            case 'wide':
                return (css`
                    width: 100%;
                    `)
                break;
            default:
                break;
        }
    }}
`;


const Image = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;

const Caption = styled.p`
    text-align: center;
    font-style: italic;
    font-size: ${props => props.theme.fonts.size.SMALL};
`;


export {
    Wrapper,
    Image,
    Caption
};