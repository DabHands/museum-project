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

    let names = AllEmbroideries.map(e => {
        return e.authorName
    });

    //Filter for duplicates
    names = names.filter(
        (element, i) => {
            return i === names.indexOf(element)
        });
    
    //Sort in Alphabetical Order
    names = names.sort((n1,n2) => {
        if (n1 > n2) {
            return 1;
        }
        if (n1 < n2) {
            return -1;
        }
        return 0;
    });
    

    //Map to the correct object
    const options = names.map(e => {
        return {
            value: e, label: e
        }
    }); 
        
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
            placeholder='Select By Stitcher'
            onChange={handleSelectChange}
            options={options}
            isMulti
        />
        </s.Select>
        
    </>
    )
    
}