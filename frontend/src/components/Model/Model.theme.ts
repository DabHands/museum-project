import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 1rem 1rem;
`;

const ModelWrapper = styled.div`
  // display: inline-block;
  // margin-right: 1rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  position: relative;
`;

const ModelCanvas = styled.canvas`
  box-shadow: 0px 0px 20px #212529;
  background-image: linear-gradient(#000000, #343a40);
`;


export {
  PageWrapper,
  ModelWrapper,
  ModelCanvas
};