import React, { useEffect, useState } from 'react';
import { AllEmbroideries } from '../../../data/embroideries';
import { Embroidery, OriginTypes } from '../../../types/types';
import { AuthorFilter } from './AuthorFilter/AuthorFilter';
import * as s from './FilterBar.theme';
import { OriginFilter } from './OriginFilter/OriginFilter';

interface FilterBarProps {
    setResultEmbroideries: React.Dispatch<React.SetStateAction<Embroidery[]>>
}

export const FilterBar: React.FC<FilterBarProps> = (
    { setResultEmbroideries }
) => {

    const [origins, setOrigins] = useState<OriginTypes[]>();
    const [authors, setAuthors] = useState<string[]>();
    
    //Use Effect to filter Filtered Embroideries
    useEffect(() => {
        //Reset the filter
        let currentFilter = AllEmbroideries

        //Only filter if we have origins
        if (origins && origins.length > 0) {
            //Set the current filtered values with
            currentFilter = currentFilter.filter(e => 
                    origins?.includes(e.authorOrigin)
            ) 
        }

        //Only filter if we have authors
        if (authors && authors.length > 0) {
            //Set the current filtered values with
            currentFilter = currentFilter.filter(e => 
                    authors?.includes(e.authorName)
            ) 
        }

        //Finally set the actual filtered embroideries
        setResultEmbroideries(currentFilter)
    }, [origins, authors]);
    
    return (
        <s.FilterWrapper>
            <s.Title>Filters</s.Title>

            <s.Filter>
                <OriginFilter setOrigins={setOrigins}/>
            </s.Filter>

            <s.Filter>
                <AuthorFilter setAuthors={setAuthors}/>
            </s.Filter>
            
        </s.FilterWrapper>
    )
    
}