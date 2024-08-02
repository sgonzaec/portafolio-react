import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="background-content bg-black w-full h-screen -z-10 fixed top-0">
      <ul className="animated-background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Background;
