import styled from "styled-components";

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
`;


export { GridBox, };