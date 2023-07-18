import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../style.css";

const Company = () => {
  const [type, setType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");

  const nav = useNavigate();

  const handleCompany = (e) => {
    e.preventDefault();
    const makeCompany = {
      type: type,
      businessName: businessName,
      description: description,
      likes: 0,
    };
    axios
      .post("http://localhost:8000/api/companys", makeCompany)
      .then((serverResponse) => {
        console.log("🍾🍾🍾 THIS IS THE SERVER RESPONSE", serverResponse.data);
        let theId = serverResponse.data.Company._id;
        console.log("TRYING", theId);
        nav("/companyhome/" + theId);
      })
      .catch((err) => {
        console.log("❌THROW DID NOT WORK", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleCompany}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Righteous'", color: "#fe2d8c" }}>
            Business Name
          </h2>
          <input
            type="text"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
            style={{
              width: "80%",
              height: "45px",
              border: "2px solid #fe2d8c",
              backgroundColor: "#212121",
              fontFamily: "'Righteous'",
              fontSize: "2rem",
              color: "#fe2d8c",
              textAlign: "center",
              borderRadius: "5px",
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Righteous'", color: "#fe2d8c" }}>
            Business Type
          </h2>
          <select
            style={{
              width: "80%",
              height: "45px",
              border: "2px solid #fe2d8c",
              backgroundColor: "#212121",
              fontFamily: "'Righteous'",
              fontSize: "1.5rem",
              color: "#fe2d8c",
              textAlign: "center",
              borderRadius: "5px",
            }}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Clubs">Clubs</option>
            <option value="Bars">Bars</option>
            <option value="Restaraunts">Restaraunts</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Righteous'", color: "#fe2d8c" }}>
            Add description for your company
          </h2>
          <textarea
            style={{
              width: "80%",
              height: "45px",
              border: "2px solid #fe2d8c",
              backgroundColor: "#212121",
              fontFamily: "'Righteous'",
              fontSize: "2.1rem",
              color: "#fe2d8c",
              textAlign: "center",
              borderRadius: "5px",
            }}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <input type="text"></input>
        <div style={{ textAlign: "center", margin: "35px" }}>
          <button
            style={{
              marginTop: "75px",
              width: "85%",
              height: "75px",
              backgroundColor: "#212121",
              border: "10px double #fe2d8c",
              fontFamily: "'Righteous'",
              color: "#fe2d8c",
              fontSize: "1.4rem",
            }}
          >
            Add your company
          </button>
        </div>
      </form>
    </div>
  );
};

export default Company;
