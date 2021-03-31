import React from "react";
import { Line } from "react-chartjs-2";

const MonthsChart = () => {
  const startDate = new Date(2021, 0, 1);
  const labels = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const data = (canvas) => {
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
          borderColor: "purple",
        },
        {
          // note My : ces chiffres-là sont bons, je les ai revérifiés
          label: "2020",
          data: [11, 3, 7, 10, 8, 10, 9, 6, 6, 8, 2, 10, 10],
          borderWidth: 2,
          fill: false,
          borderDash: [2,2],
          borderColor: "indigo",
        },
        {
          // note My : ces chiffres-là sont mis au hasard pour faire le bon total, donc à corriger avec les vrais
          label: "2019",
          data: [13, 9, 15, 8, 11, 14, 12, 10, 11, 13, 16, 18],
          borderWidth: 2,
          borderDash: [12,5],
          fill: false,
          borderColor: "rgb(199, 150, 217)",
        },
      ],
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          duration: 2000,
          easing: "easeInQuad",
        },
        title: {
          display: true,
          position: "bottom",
          fontSize: 18,
          fontFamily: "Lato",
          text:
            "Âge moyen des victimes et des coupables ou assassins présumés - 2021",
        },
        legend: {
          labels: {
            defaultFontFamily: "Lato",
          }
        }
      },
    };
  };

  return (
    <div className="chart">
      {/* <Line data={monthsData} /> */}
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 2000,
            easing: "easeInQuad",
          },
          title: {
            display: true,
            position: "bottom",
            fontSize: 18,
            fontFamily: "Lato",
            text:
              "Nombre de féminicides par an et par mois - réalisé en 2021",
          },
        }}
      />
    </div>
  );
};

export default MonthsChart;
