import React from "react";
import TotalNumber from "../components/Total-Events/TotalNumber"
import "./../styles/global.css"
import "./../styles/Home.css"

class Home extends React.Component {
  render() {
    return (
      <div className="flex">

        <div>Text</div>

      <div className="flex">

        <div className="absolute">
        <TotalNumber />
        </div>
      
        <img className="relative" src="https://res.cloudinary.com/dcbzfldni/image/upload/v1617270285/mapFrance_tlaq0d.png" alt="carte hompage"/>
      </div>
      

       
      </div>
    );
  }
}

export default Home;
