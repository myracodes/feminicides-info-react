import React from 'react';
// import DataCopy from './DataCopy';
import Data from './Data';
import KillerRelationWithVictim from "../components/Charts-components/KillerRelationWithVictim";

function DataComponents() {
    return (
        <div>
            <Data/>
            <hr/>
            <KillerRelationWithVictim/>
            {/* <DataCopy/> */}
        </div>
    )
}

export default DataComponents;
