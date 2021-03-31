import React from 'react';
import { Line } from "react-chartjs-2";
// import moment from "moment";

const MonthsChart = () => {

  const startDate = new Date(2021, 0, 1);
  const labels = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  // for (let i = 0; i < 6; i++) {
  //   const date = moment(startDate)
  //     .add(i, "months")
  //     .format("YYYY-MM");
  //   labels.push(date.toString());
  // }
  
  const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
      backgroundColor: gradient,
      labels,
      datasets: [
        // note: l'année en cours a une bordure plus épaisse, est en rouge, et le champ fill est en true, dans un but de lisibilité du graphique
        {
          // note my : j'ai hardcodé, puisque c'est statique pour les années précédentes. Eventuellement, rendre dynamique l'année en cours plus tard
          label: "2021",
          data: [6, 9, 9],
          borderWidth: 3,
          fill: true,
          // fillColor: "rgba(255, 99, 99, 0.2)",
          borderColor: "red"
        },{
          // note My : ces chiffres-là sont bons, je les ai revérifiés
          label: "2020",
          data: [11, 3, 7, 10, 8, 10, 9, 6, 6, 8, 2, 10, 10],
          borderWidth: 2,
          fill: false,
          borderColor: "green"
        },
        {
          // note My : ces chiffres-là sont mis au hasard pour faire le bon total, donc à corriger avec les vrais 
          label: "2019",
          data: [13, 9, 15, 8, 11, 14, 12, 10, 11, 13, 16, 18],
          borderWidth: 2,
          fill: false,
          borderColor: "purple"
        }
      ]
    };
  };
    
      return (
        <div className="chart">
          {/* <Line data={monthsData} /> */}
          <h1>Nombre de féminicides par an et par mois</h1>
          <Line data={data}/>
          
        </div>
      );
}

export default MonthsChart;