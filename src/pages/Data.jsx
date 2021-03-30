import React from 'react';
// import DataCopy from './DataCopy';
import AgesChart from '../components/Charts-components/AgesChart';
import CondamnationChart from '../components/Charts-components/CondamnationChart';
import RelationshipChart from "../components/Charts-components/RelationshipChart";
import MonthsChart from "../components/Charts-components/MonthsChart";

function DataComponents() {
    return (
        <div>
            <AgesChart/>
            <hr/>
            <RelationshipChart/>
            <hr/>
            <CondamnationChart/>
            <hr/>
            <MonthsChart/>
        </div>
    )
}

export default DataComponents;