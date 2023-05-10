import React from "react";
import image from "../image/robot.jpg";

function Home() {
  return (
    <div className="home">
      <img src={image} alt="Main Image" />
      <div className="home_title">
        <h1>This is my Portfolio!!</h1>
      </div>
    </div>
  );
}

export default Home;
