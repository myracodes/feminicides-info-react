import React from 'react';
// import DataCopy from './DataCopy';
import AgesChart from '../components/Charts-components/AgesChart';
import RelationshipChart from "../components/Charts-components/RelationshipChart";

function DataComponents() {
    return (
        <div>
            <AgesChart/>
            <hr/>
            <RelationshipChart/>
            {/* <DataCopy/> */}
        </div>
    )
}

export default DataComponents;