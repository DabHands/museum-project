import styled from 'styled-components'


const EmbroideryName = styled.h1`
    padding-left: 1em;
    font-size: 20pt;
    padding-bottom: 0.25rem;
    border-bottom: ${props => props.theme.ROW_DIVIDER};
`;

const AuthorName = styled.h2`
    padding-left: 1em;
    font-size: 20pt;
    padding-top: 0.25rem;
`;

const AuthorOrigin = styled.div`
    padding-left: 2rem;
    color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
`;

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 2em;
    padding: 1em;
`;

const LeftSide = styled.div`
    min-width: 50%;
`;

const RightSide = styled.div`
    min-width: 50%;
`;

const Thumbnail = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    object-fit: cover;
    border: solid 3px ${props => props.theme.BUTTON_BASIC};
    box-shadow: ${props => props.theme.BOX_SHADOW};
`;

const Description = styled.div`
`;

const BelowImageBox = styled.div`
    display: flex;
    align-items: baseline;
`;

export {
    EmbroideryName,
    AuthorName,
    PageWrapper,
    LeftSide,
    RightSide,
    Thumbnail,
    Description,
    AuthorOrigin,
    BelowImageBox,
};