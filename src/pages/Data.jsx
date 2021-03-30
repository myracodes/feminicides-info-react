import React from "react";
// import DataCopy from './DataCopy';
import AgesChart from "../components/Data-components/AgesChart";
import CondamnationChart from "../components/Data-components/CondamnationChart";
import RelationshipChart from "../components/Data-components/RelationshipChart";
import AverageAge from "../components/Data-components/AverageAge";
import MonthsChart from "../components/Data-components/MonthsChart";
import AgesMetho from "../components/Data-components/AgesMetho";
import RelationshipMetho from "../components/Data-components/RelationshipMetho";
import CondamnationMetho from "../components/Data-components/CondamnationMetho";
import FeminicideMetho from "../components/Data-components/FeminicideMetho";
import IntroData from "../components/Data-components/IntroData";
import AverageComplaints from "../components/Data-components/AverageComplaints";

function DataComponents() {
  return (
    <div>
      <IntroData/>
      <AverageComplaints/>
      <AverageAge/>
      <hr />
      <AgesChart />
      <AgesMetho />
      <hr />
      <RelationshipChart />
      <RelationshipMetho />
      <hr />
      <CondamnationChart />
      <CondamnationMetho />
      <hr />
      <MonthsChart />
      <FeminicideMetho/>
    </div>
  );
}

export default DataComponents;
