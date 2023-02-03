import React from 'react';
import * as s from './OriginFilter.theme';
import Select, { MultiValue } from 'react-select'
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
    

    return (<>
        <s.Name>Origins</s.Name>
        <s.Select>
            <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder='Select Origins'
            onChange={handleSelectChange}
            options={options}
            isMulti
        />
        </s.Select>
        
    </>
    )
    
}