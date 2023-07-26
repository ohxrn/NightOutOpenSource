import React from "react";
import { Button } from 'flowbite-react';
import User from "./User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const nav = useNavigate();
  return (
    <div class='h-screen'>
      <h1 class='text-center mt-10 text-pink text-xl'>
        Let's find a good fit for you here.
      </h1>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            marginTop: "70px",
            backgroundColor: "#2B2B2B",
            color: "#fe2d8c",
            width: "65%",
            height: "45px",
            border: "5px solid #fe2d8c",
            borderRadius: "20px",
            fontFamily: "Righteous",
            fontSize: "1.2rem",
          }}
          onClick={(e) => {
            e.preventDefault();
            nav("/userform");
          }}
        >
          Join as User
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            margin: "50px",
            backgroundColor: "#2B2B2B",
            color: "#fe2d8c",
            width: "65%",
            height: "45px",
            border: "5px solid #fe2d8c",
            borderRadius: "20px",
            fontFamily: "Righteous",
            fontSize: "1.2rem",
          }}
          onClick={(e) => {
            e.preventDefault();
            nav("/companyform");
          }}
        >
          Join as Company
        </button>
      </div>
    </div>
  );
};

export default Intro;
