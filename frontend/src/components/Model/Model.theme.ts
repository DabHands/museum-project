import styled from 'styled-components'

const PageWrapper = styled.div`
  // padding: 1rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 1rem 0 1rem 0;
`;

const ModelWrapper = styled.div`
  // margin: 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: fit-content;
  // height: fit-content;
`;

const ModelCanvas = styled.canvas`
  box-shadow: 0px 0px 20px #212529;
  background-image: linear-gradient(#000000, #343a40);
  width: 100vw;
  height: 100vh;
`;


export {
  PageWrapper,
  ModelWrapper,
  ModelCanvas
};