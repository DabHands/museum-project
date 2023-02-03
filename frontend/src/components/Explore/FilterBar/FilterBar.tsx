import React, { useEffect, useState } from 'react';
import { AllEmbroideries } from '../../../data/embroideries';
import { Embroidery } from '../../../types/types';
import { AuthorFilter } from './AuthorFilter/AuthorFilter';
import * as s from './FilterBar.theme';
import { AnatomyFilter } from './AnatomyFilter/AnatomyFilter';


interface Props {
  setFilteredEmbroideries: React.Dispatch<React.SetStateAction<Embroidery[]>>
}

export const FilterBar: React.FC<Props> = (
  { setFilteredEmbroideries }
) => {

  const [authors, setAuthors] = useState<string[]>();
  const [anatomies, setAnatomies] = useState<string[]>();

  //Use Effect to filter Filtered Embroideries
  useEffect(() => {
    //Reset the filter
    let currentFilter = AllEmbroideries

    //Only filter if we have authors
    if (authors && authors.length > 0) {
      //Set the current filtered values with
      currentFilter = currentFilter.filter(e =>
        authors?.includes(e.authorName)
      )
    }

    //Only filter if we have authors
    console.log('anatomies', anatomies);
    if (anatomies && anatomies.length > 0) {
      //Set the current filtered values with
      currentFilter = currentFilter.filter(e =>
        anatomies?.includes(e.anatomyName)
      )

      console.log('current filter', currentFilter);
      console.log('anatomies', anatomies);
    }

    //Finally set the actual filtered embroideries
    setFilteredEmbroideries(currentFilter)
  }, [authors, anatomies]);

  return (
    <s.FilterWrapper>
      <s.Title>Filters</s.Title>

      <s.Filter>
        <AuthorFilter setAuthors={setAuthors} />
      </s.Filter>

      <s.Filter>
        <AnatomyFilter setAnatomies={setAnatomies} />
      </s.Filter>

    </s.FilterWrapper>
  )

}