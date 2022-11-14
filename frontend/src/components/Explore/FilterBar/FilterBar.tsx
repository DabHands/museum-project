import React, { useEffect, useState } from 'react';
import { AllEmbroideries } from '../../../data/embroideries';
import { Embroidery, OriginTypes } from '../../../types/types';
//import * as s from './FilterBar.theme';
import { OriginFilter } from './OriginFilter/OriginFilter';

interface Props {
    filteredEmbroideries: Embroidery[],
    setFilteredEmbroideries: React.Dispatch<React.SetStateAction<Embroidery[]>>
}

export const FilterBar: React.FC<Props> = (
    { filteredEmbroideries, setFilteredEmbroideries }
) => {

    const [origins, setOrigins] = useState<OriginTypes[]>();

    //Use Effect to filter Filtered Embroideries
    useEffect(() => {
        setFilteredEmbroideries(AllEmbroideries)
        if (origins && origins.length > 0) {
            setFilteredEmbroideries(
                filteredEmbroideries.filter(e => 
                    origins?.includes(e.authorOrigin)
                )
            )
        }
        
    }, [origins]);
    
    return (
        <>
            <p>Filter Bar</p>
            <OriginFilter setOrigins={setOrigins}/>
        </>
    )
    
}