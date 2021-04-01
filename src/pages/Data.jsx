import React from "react";
import "../styles/Data.css";
import AgesChart from "../components/Data-components/AgesChart";
import CondamnationChart from "../components/Data-components/CondamnationChart";
import RelationshipChart from "../components/Data-components/RelationshipChart";
import AverageAge from "../components/Data-components/AverageAge";
import MonthsChart from "../components/Data-components/MonthsChart";
import AgesMetho from "../components/Data-components/AgesMetho";
import RelationshipMetho from "../components/Data-components/RelationshipMetho";
import CondamnationMetho from "../components/Data-components/CondamnationMetho";
import FeminicideMetho from "../components/Data-components/MonthsMetho";
import IntroData from "../components/Data-components/IntroData";
import DatasComplaints from "../components/Data-components/DatasComplaints";

function DataComponents() {
  return (
    <div className="page-container">
      <h1 className="title-1">Données chiffrées</h1>
      <IntroData />
      <div className="chart-grid-one">
        <MonthsChart />
        <div className="method">
          <FeminicideMetho />
        </div>
      </div>
      <div className="chart-grid-two">
        <div className="method">
          <AgesMetho />
        </div>
        <AgesChart />
      </div>
      <div>
        <DatasComplaints />
      </div>
      <div className="chart-grid-one">
        <RelationshipChart />
        <div className="method">
          <RelationshipMetho />
        </div>
      </div>
      <div className="chart-grid-two">
        <div className="method">
          <CondamnationMetho />
        </div>
        <CondamnationChart />
      </div>
    </div>
  );
}

export default DataComponents;
