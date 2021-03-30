import React from 'react';
// import DataCopy from './DataCopy';
import AgesChart from '../components/Data-components/AgesChart';
import CondamnationChart from '../components/Data-components/CondamnationChart';
import RelationshipChart from "../components/Data-components/RelationshipChart";
import ListOfData from "../components/Data-components/ListOfData";
import MonthsChart from "../components/Data-components/MonthsChart";

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
            <hr/>
            <MonthsChart/>
        </div>
    )
}

export default DataComponents;