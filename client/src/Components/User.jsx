import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const User = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [interest, setInterest] = useState("");

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const theData = {
      firstname: first,
      lastname: last,
      interest: interest,
    };
    axios
      .post("http://localhost:8000/api/nights", theData)
      .then((serverResponse) => {
        console.log("🍾🍾🍾 THIS IS THE SERVER RESPONSE", serverResponse.data);
        nav("/main/" + theData.interest);
      })
      .catch((err) => {
        console.log("❌THROW DID NOT WORK", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div style={{ textAlign: "center", marginTop: "85px" }}>
          <h2
            style={{
              margin: "10px",
              padding: "0",
              fontFamily: "'Righteous'",
              color: "#fe2d8c",
            }}
          >
            First name
          </h2>
          <input
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
            type="text"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              margin: "10px",
              padding: "0",
              fontFamily: "'Righteous'",
              color: "#fe2d8c",
            }}
          >
            Last name
          </h2>
          <input
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
            type="text"
            value={last}
            onChange={(e) => {
              setLast(e.target.value);
            }}
          ></input>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              margin: "10px",
              padding: "0",
              fontFamily: "'Righteous'",
              color: "#fe2d8c",
            }}
          >
            Your interest
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
            value={interest}
            onChange={(e) => {
              setInterest(e.target.value);
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
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
