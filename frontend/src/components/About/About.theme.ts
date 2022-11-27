import styled from 'styled-components'

const ArtistsBio = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ArtistName = styled.div`
    font-size: 18pt;
    color: ${props => props.theme.colours.MAIN};
    border-bottom: solid 1.5px ${props => props.theme.colours.SECONDARY};
    margin-bottom: 1rem;
    padding-top: 0.5rem;
`;

const ArtistDescription = styled.div`
    font-size: 12pt;
    line-height: 1.6;
    padding-bottom: 1rem;
`;

const BlogLink = styled.a``;
         
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 2rem;
`;

const MainPanel = styled.div`
    min-width: 10rem;
    padding: 1rem;
`;

const AuthorPanel = styled.div`
    min-width: 10rem;
    max-width: 24rem;
    border-radius: 5px;
    border: ${props => props.theme.ROW_DIVIDER};
    padding: 2rem;
`;

const Headshot = styled.img`
    max-width: 30%;
    height: auto;
    object-fit: cover;
    border-radius: 100%;
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
    font-size: 18pt;
    color: ${props => props.theme.colours.MAIN};
    border-bottom: solid 1.5px ${props => props.theme.colours.SECONDARY};
    margin-bottom: 1rem;
    padding-top: 0.5rem;
    width: fit-content;
`;

export {
    ArtistsBio,
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