import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelCanvas = styled.canvas`
  box-shadow: 0px 0px 20px #212529;
  background-image: linear-gradient(#000000, #343a40);
  width: 100vw;
  height: 100vh;
`;

export {
  PageWrapper,
  ModelCanvas
};