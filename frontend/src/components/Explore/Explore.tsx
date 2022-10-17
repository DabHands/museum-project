import React, { useState } from 'react'
import { AllEmbroideries } from '../../data/embroideries';
import { MainButton } from '../toolbox/Buttons';
import * as s from './Explore.theme';
import { GridView } from './GridView/GridView';
import { ListView } from './ListView/ListView';

enum ExploreView {
    LIST,
    GRID
}

export const Explore: React.FC = () => {
    const [view, setView] = useState(ExploreView.GRID);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredEmbroideries, setFilteredEmbroideries] = useState(AllEmbroideries);

    const toggleState = () => {
        if (view === ExploreView.GRID) {
            setView(ExploreView.LIST)
        } else {
            setView(ExploreView.GRID)
        }
    }


    const renderToggleButton = () => {
        return (
            <s.ButtonWrapper>
                <MainButton onClick={toggleState}>
                    {view === ExploreView.GRID ? "Swap to List View" : "Swap to Grid View"}
                </MainButton>
            </s.ButtonWrapper>
            
        )
    };

    const renderListView = () => {
        return (
            <ListView
                filteredEmbroideries={filteredEmbroideries}
            />  
        )
    }

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
                <s.Title>Explore</s.Title>
                {renderToggleButton()}
            </s.TopBar>
            {view === ExploreView.GRID ?
                renderGridView() : renderListView()}
        </s.PageWrapper>
    )
};