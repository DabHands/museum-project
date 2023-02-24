import styled from 'styled-components'
import { Button } from '../toolbox/Buttons';


const EmbroideryName = styled.div`
    display: block;
    margin: 0.5rem 0 0.7rem 0;
    max-width: 90vw;
    font-size: ${props => props.theme.fonts.size.LARGE};
    border-bottom: ${props => props.theme.ROW_DIVIDER};
`;

const AuthorName = styled.span`
    font-size: ${props => props.theme.fonts.size.LARGE};
    background-color: ${props => props.theme.colours.TERTIARY};
    color: ${props => props.theme.colours.LIGHT};
    padding: 5px 5px;
    margin: 0px 5px;
    width: max-content;
    font-family: 'Secular One';
`;

const AuthorOrigin = styled.div`
    padding-left: 2rem;
    color: ${props => props.theme.BUTTON_SECONDARY_HOVER};
`;

const SplitPage = styled.div`
    @media (max-width: 768px){

    } 
    @media (min-width: 769px){
        display: grid;
        grid-template-columns: 45% 55%;
    } 
`; 

const PageWrapper = styled.div`
    padding: 1rem;
`;


const Thumbnail = styled.img`
    width: auto;
    height: 50vh;
    margin: 0;
    padding: 0;
    object-fit: scale-down;
    border: solid 3px ${props => props.theme.colours.TERTIARY};
    box-shadow: ${props => props.theme.BOX_SHADOW};

`;
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const DescWrapper = styled.div`
    padding: 10px;
`;

const Description = styled.div`
    font-size: ${props => props.theme.fonts.size.MEDIUM};
`;

const BelowImageBox = styled.div`
    display: flex;
    align-items: baseline;
`;

const IconButton = styled(Button)`
    display: flex;  
    align-items: center;
    height: 3.25rem;
    padding: 10px 10px;
`;

const TitleBox = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    align-items: center;
`;

export {
    EmbroideryName,
    AuthorName,
    PageWrapper,
    Thumbnail,
    Description,
    AuthorOrigin,
    BelowImageBox,
    SplitPage,
    ImageWrapper,
    DescWrapper,
    IconButton,
    TitleBox,
};