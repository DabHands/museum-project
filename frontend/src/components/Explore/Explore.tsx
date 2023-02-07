import React, { useState } from 'react'
import { AllEmbroideries } from '../../data/embroideries';
import { MainButton } from '../toolbox/Buttons';
import * as s from './Explore.theme';
import { GridView } from './GridView/GridView';
import { FilterBar } from './FilterBar/FilterBar';
import { SecondaryH1 } from '../toolbox/Labels';

// enum ExploreView {
//     LIST,
//     GRID
// }

export const Explore: React.FC = () => {
    // const [view, setView] = useState(ExploreView.GRID);

    const [viewFilters, setViewFilters] = useState(false);
    
    const [filteredEmbroideries, setFilteredEmbroideries] = useState(AllEmbroideries);

    // const toggleState = () => {
    //     if (view === ExploreView.GRID) {
    //         setView(ExploreView.LIST)
    //     } else {
    //         setView(ExploreView.GRID)
    //     }
    // }


    // const renderToggleButton = () => {
    //     return (
    //         <s.ButtonWrapper>
    //             <MainButton onClick={toggleState}>
    //                 {view === ExploreView.GRID ? "Swap to List View" : "Swap to Grid View"}
    //             </MainButton>
    //         </s.ButtonWrapper>
            
    //     )
    // };

    const renderShowFilterButton = () => {
        return (
            <s.ButtonWrapper>
                <MainButton onClick={()=> setViewFilters(!viewFilters)}>
                    {viewFilters === true ? "Hide Filters" : "Show Filters"}
                </MainButton>
            </s.ButtonWrapper>
            
        )
    };

    

    const renderFilterBar = () => {
        return <FilterBar
            setFilteredEmbroideries={setFilteredEmbroideries}
        />
    };

    // const renderListView = () => {
    //     return (
    //         <ListView
    //             filteredEmbroideries={filteredEmbroideries}
    //         />
    //     )
    // };

    const renderGridView = () => {
        return (
            <GridView
                filteredEmbroideries={filteredEmbroideries}
            /> 
            
        )
    }

    return (
        <s.PageWrapper>
            <s.TopBar>
                <SecondaryH1>Explore</SecondaryH1>
                {renderShowFilterButton()}
                {/* {renderToggleButton()} */}
            </s.TopBar>
            
            {
               viewFilters && renderFilterBar()
            }

            <s.Reminder> Click on the embroideries below to see more information about it!</s.Reminder>

            {renderGridView()}
            
            {/* {view === ExploreView.GRID ?
                renderGridView() : renderListView()} */}
            
        </s.PageWrapper>
    )
};