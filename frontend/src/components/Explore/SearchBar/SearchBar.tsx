/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { AllEmbroideries } from '../../../data/embroideries';
import { Embroidery } from '../../../types/types';
import * as s from './SearchBar.theme';

interface SearchBarProps {
  setResultEmbroideries: React.Dispatch<React.SetStateAction<Embroidery[]>>
}

export const SearchBar: React.FC<SearchBarProps> = (
  { setResultEmbroideries }
) => {
  const [searchInput, setSearchInput] = useState<string>();

  const searchInputHandler = (event: any) => {
    setSearchInput(event.target.value);
  };

  // search for matching embroideries on each submit
  const submitHandler = (event: any) => {
    event?.preventDefault();

    //Reset the filter
    let currentFilter = AllEmbroideries

    if (searchInput && searchInput.length > 0) {
      //Set the current filtered values with
      currentFilter = currentFilter.filter(e =>
        (e.authorOrigin.toLowerCase().includes(searchInput.toLowerCase()) || e.authorName.toLowerCase().includes(searchInput.toLowerCase()) || 
        e.anatomyName.toLowerCase().includes(searchInput.toLowerCase()))
      );

    }

    //Finally set the actual filtered embroideries
    setResultEmbroideries(currentFilter);
  };

  return (
    <s.SearchForm onSubmit={submitHandler}>
      <s.SearchInput type='text' onChange={searchInputHandler} value={searchInput} />
      <s.SearchButton type='submit'>
        <s.SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </s.SearchIcon>
      </s.SearchButton>
    </s.SearchForm>
  )
};