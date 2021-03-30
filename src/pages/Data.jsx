import React from 'react';
// import DataCopy from './DataCopy';
import AgesChart from '../components/Data-components/AgesChart';
import CondamnationChart from '../components/Data-components/CondamnationChart';
import RelationshipChart from "../components/Data-components/RelationshipChart";
import ListOfData from "../components/Data-components/ListOfData";


function DataComponents() {
    return (
        <div>
            <AgesChart/>
            <hr/>
            <RelationshipChart/>
            <hr/>
            <CondamnationChart/>
            <hr/>
            <ListOfData/>

        </div>
    )
}

export default DataComponents;