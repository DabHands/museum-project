import React from 'react';
import * as s from './AnatomyFilter.theme';
import Select, { MultiValue } from 'react-select'
import { AllEmbroideries } from '../../../../data/embroideries';

interface Props {
    setAnatomies: React.Dispatch<React.SetStateAction<string[] | undefined>>
}

export const AnatomyFilter: React.FC<Props> = (
    { setAnatomies }
) => {

    
    const options = AllEmbroideries.map(e => { return {
            value: e.anatomyName, label: e.anatomyName }
    })
        
    const handleSelectChange = (
        newValue: MultiValue<{
            value: string;
            label: string;
        }>
    ) => {
        setAnatomies(newValue.map(val => val.label))
    }
    

    return (<>
        <s.Name>Anatomies</s.Name>
        <s.Select>
            <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder='Select By Anatomy'
            onChange={handleSelectChange}
            options={options}
            isMulti
        />
        </s.Select>
    </>
    )
    
}