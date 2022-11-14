import React, { useState } from 'react';
//import * as s from './FilterBar.theme';
import Select, { ActionMeta, MultiValue} from 'react-select'
import { OriginTypes } from '../../../../types/types';

interface Props {
    setOrigins: React.Dispatch<React.SetStateAction<OriginTypes[] | undefined>>
}

export const OriginFilter: React.FC<Props> = (
    { setOrigins }
) => {

    const options = [
            { value: 'BW', label: 'BW' },
            { value: 'Guild', label: 'Guild' },
            { value: 'Med', label: 'Med' },
            { value: 'Misc', label: 'Misc' }
        ]
    //'BW' | 'Guild' | 'Med' |'Misc';
        
    const handleSelectChange = (
        newValue: MultiValue<{
            value: string;
            label: string;
        }>
    ) => {
        setOrigins(newValue.map(val => val.label as OriginTypes))
    }
    

    return (<><p>Origins</p>
        <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder='Select Origins'
            onChange={handleSelectChange}
            options={options}
            isMulti
        />
    </>
    )
    
}