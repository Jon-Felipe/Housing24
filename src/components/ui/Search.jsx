import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

const Search = ({ type, placeholder }) => {
  return (
    <SearchWrapper>
      <FiSearch />
      <input type={type} placeholder={placeholder} />
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--grey-50);
  padding: 13px 35px;
  border-radius: 30px;
  width: 100%;
  input {
    border: transparent;
    background-color: transparent;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
  svg {
    position: absolute;
    left: 13px;
    top: 13px;
    color: var(--grey-500);
  }
`;
