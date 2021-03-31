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
import FeminicideMetho from "../components/Data-components/FeminicideMetho";
import IntroData from "../components/Data-components/IntroData";
import AverageComplaints from "../components/Data-components/AverageComplaints";

function DataComponents() {
  return (
    <div className="page-container">
      <h1 className="title-1">Données chiffrées</h1>
      <IntroData /> <AverageAge />
      <div className="chart-grid">
        <AgesChart />
        <div className="method">
          <AgesMetho />
        </div>
      </div>
      <div className="chart-grid">
        <RelationshipChart />
        <div className="method">
          <RelationshipMetho />
        </div>
      </div>
      <div className="chart-grid">
        <CondamnationChart />
        <div className="method">
          <CondamnationMetho />
        </div>
      </div>
      <div className="chart-grid">
        <MonthsChart />
        <div className="method">
          <FeminicideMetho />
        </div>
      </div>
      <AverageComplaints />
    </div>
  );
}

export default DataComponents;
