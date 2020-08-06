import React from "react";
import cloud1 from "../styles/imgs/cloud1.png";
import cloud2 from "../styles/imgs/cloud2.png";
import cloud3 from "../styles/imgs/cloud3.png";
import cloud4 from "../styles/imgs/cloud4.png";
import cloud5 from "../styles/imgs/cloud5.png";

const Clouds = () => {
  return (
    <div className="banner">
      <div className="clouds">
        <img src={cloud1} style={{ "--i": 1 }} alt="cloud1" />
        <img src={cloud2} style={{ "--i": 2 }} alt="cloud2" />
        <img src={cloud3} style={{ "--i": 3 }} alt="cloud3" />
        <img src={cloud4} style={{ "--i": 4 }} alt="cloud4" />
        <img src={cloud5} style={{ "--i": 5 }} alt="cloud5" />
      </div>
    </div>
  );
};

export default Clouds;
