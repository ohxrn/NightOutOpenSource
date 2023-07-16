import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { useNavigate } from "react-router-dom";
import Intro from "./Intro";

import night2 from "../night2.png";
import "../App.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
</style>;

function Welcome() {
  const nav = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#2B2B2B",
        height: "750px",
        width: "390px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="App"
    >
      <img
        style={{
          width: "130%",
          margin: "0 auto",
          position: "absolute",
          top: "120px",
        }}
        src={night2}
      ></img>
      <button
        onClick={() => {
          nav("/intro");
        }}
        style={{
          color: "#fe2d8c",
          border: "4px solid #fe2d8c",
          borderRadius: "7px",
          width: "80%",
          height: "45px",
          backgroundColor: "#2B2B2B",
          position: "relative",
          top: "45px",
        }}
      >
        Find what's popular
      </button>
    </div>
  );
}

export default Welcome;
