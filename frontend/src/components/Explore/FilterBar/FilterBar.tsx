import React, { useEffect, useState } from 'react';
import { AllEmbroideries } from '../../../data/embroideries';
import { Embroidery, OriginTypes } from '../../../types/types';
//import * as s from './FilterBar.theme';
import { OriginFilter } from './OriginFilter/OriginFilter';

interface Props {
    setFilteredEmbroideries: React.Dispatch<React.SetStateAction<Embroidery[]>>
}

export const FilterBar: React.FC<Props> = (
    { setFilteredEmbroideries }
) => {

    const [origins, setOrigins] = useState<OriginTypes[]>();

    const [currentFilter, setCurrentFilter] = useState<Embroidery[]>(AllEmbroideries);

    //Use Effect to filter Filtered Embroideries
    useEffect(() => {
        //Reset the filter
        setCurrentFilter(AllEmbroideries)

        //Only filter if we have origins
        if (origins && origins.length > 0) {

            //Set the current filtered values with
            setFilteredEmbroideries(
                //BUG TO FIX - If i use setCurrentFilter here it doesn't work when I delete/add new origins. State issue?
                currentFilter.filter(e => 
                    origins?.includes(e.authorOrigin)
                )
            )
        }

        //Finally set the actual filtered embroideries
        //setFilteredEmbroideries(currentFilter)
    }, [origins]);
    
    return (
        <>
            <p>Filter Bar</p>
            <OriginFilter setOrigins={setOrigins}/>
        </>
    )
    
}