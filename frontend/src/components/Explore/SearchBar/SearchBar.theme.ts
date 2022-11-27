import styled from "styled-components";

const SearchForm = styled.form`
  font-size: 1.2rem;
  margin: 1rem 2rem;

  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  font-size: 1.2rem;
  border: 0.1rem solid #000;
  outline-color: ${(props) => props.theme.colours.MAIN};
`;

const SearchButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export {
    SearchForm,
    SearchInput,
    SearchButton,
    SearchIcon,
  };
