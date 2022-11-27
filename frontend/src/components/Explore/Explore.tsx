import React, { useState } from 'react'
import { AllEmbroideries } from '../../data/embroideries';
import { MainButton } from '../toolbox/Buttons';
import * as s from './Explore.theme';
import { GridView } from './GridView/GridView';
import { ListView } from './ListView/ListView';
import { FilterBar } from './FilterBar/FilterBar';
import { SearchBar } from './SearchBar/SearchBar';

enum ExploreView {
  LIST,
  GRID
}

export const Explore: React.FC = () => {
  const [view, setView] = useState(ExploreView.GRID);

  const [filteredEmbroideries, setFilteredEmbroideries] = useState(AllEmbroideries);
  const [searchedEmbroideries, setSearchedEmbroideries] = useState(AllEmbroideries);

  const toggleState = () => {
    if (view === ExploreView.GRID) {
      setView(ExploreView.LIST)
    } else {
      setView(ExploreView.GRID)
    }
  }

  const renderToggleButton = () => {
    return (
      <s.ButtonWrapper>
        <MainButton onClick={toggleState}>
          {view === ExploreView.GRID ? "Swap to List View" : "Swap to Grid View"}
        </MainButton>
      </s.ButtonWrapper>
    )
  };

  const renderFilterBar = () => {
    return <FilterBar
      setFilteredEmbroideries={setFilteredEmbroideries}
    />
  };

  const renderSearchBar = () => {
    return <SearchBar 
      setSearchedEmbroideries={setSearchedEmbroideries}
    />
  }

  const renderListView = () => {
    return (
      <ListView
        filteredEmbroideries={filteredEmbroideries}
      />
    )
  };

  const renderGridView = () => {
    return (
      <GridView
        filteredEmbroideries={filteredEmbroideries}
      />

    )
  };

  console.log(searchedEmbroideries);

  return (
    <s.PageWrapper>
      {
        renderFilterBar()
      }
      <s.SearchToggleViewContainer>
        {
          renderSearchBar()
        }
        {
          renderToggleButton()
        }
      </s.SearchToggleViewContainer>
      {view === ExploreView.GRID ?
        renderGridView() : renderListView()}

    </s.PageWrapper>
  )
};