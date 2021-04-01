import React from "react";
import TotalNumber from "../components/Total-Events/TotalNumber";
import "./../styles/global.css";
import "./../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage-canva">
        <div>
          <div>Text</div>

          <div className="map-num-container">
            <div className="home-total-num fade-in">
              <TotalNumber />
            </div>

            <img
              className="home-map"
              src="https://res.cloudinary.com/dcbzfldni/image/upload/v1617270285/mapFrance_tlaq0d.png"
              alt="carte hompage"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
