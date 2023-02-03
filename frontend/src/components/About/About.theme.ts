import styled from 'styled-components'

const ArtistsBio = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

`;

const ArtistName = styled.div`
    font-size: ${props => props.theme.fonts.size.MEDIUM};
    color: ${props => props.theme.colours.MAIN};
    border-bottom: solid 1.5px ${props => props.theme.colours.SECONDARY};
    margin-bottom: 1rem;
    padding-top: 0.5rem;
`;

const ArtistDescription = styled.div`
    font-size: ${props => props.theme.fonts.size.SMALL};
    padding-bottom: 1rem;
`;



const BlogLink = styled.a``;

const TopBar = styled.div`
    display: flex;
    grid-auto-flow: column;
    //box-shadow: ${props => props.theme.BOX_SHADOW};
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
`;

         
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0px 2rem 2rem 2rem;
`;

const MainPanel = styled.div`
    min-width: 10rem;
    padding: 1rem;
`;

const AuthorPanel = styled.div`
    min-width: 10rem;
    max-width: 30rem;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER};
    padding: 2rem;
`;

const Headshot = styled.img`
    max-width: 20%;
    height: auto;
    object-fit: cover;
    //border-radius: 100%;
    border: solid 3px ${props => props.theme.colours.SECONDARY};
`;

const SponsorPanel = styled.div`

    display: flex;
    flex-direction: column;
`;

const Funders = styled.img`
    max-width: 80%;
    min-width: 10rem;
    height: auto;
`;

const SponsorTitle = styled.div`
    font-size: ${props => props.theme.fonts.size.MEDIUM};
    border-bottom: solid 1.5px ${props => props.theme.colours.SECONDARY};
    margin-bottom: 1rem;
    padding-top: 0.5rem;
    width: fit-content;
`;

export {
    ArtistsBio,
    TopBar,
    AuthorPanel,
    MainContent,
    MainPanel,
    ArtistName,
    ArtistDescription,
    Headshot,
    BlogLink,
    SponsorPanel,
    SponsorTitle,
    Funders
};