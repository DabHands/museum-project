import React from 'react';
import * as s from './AuthorFilter.theme';
import Select, { MultiValue } from 'react-select'
import { AllEmbroideries } from '../../../../data/embroideries';

interface Props {
    setAuthors: React.Dispatch<React.SetStateAction<string[] | undefined>>
}

export const AuthorFilter: React.FC<Props> = (
    { setAuthors }
) => {

    
    const options = AllEmbroideries.map(e => { return {
            value: e.authorName, label: e.authorName }
    })
        
    const handleSelectChange = (
        newValue: MultiValue<{
            value: string;
            label: string;
        }>
    ) => {
        setAuthors(newValue.map(val => val.label))
    }
    

    return (<>
        <s.Name>Authors</s.Name>
        <s.Select>
            <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder='Select Authors'
            onChange={handleSelectChange}
            options={options}
            isMulti
        />
        </s.Select>
        
    </>
    )
    
}