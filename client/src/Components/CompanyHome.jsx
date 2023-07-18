import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const CompanyHome = () => {
  const [company, setCompany] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/companys/" + id)
      .then((serverResponse) => {
        console.log("THIS IS WHAT WERE ARE GETTING BACK", serverResponse.data);
        setCompany(serverResponse.data.Company);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {company.businessName}
      <hr></hr>
      {company.description}
      <hr></hr>
      {company.businessName}
      <hr></hr>
      {company.type}
    </div>
  );
};

export default CompanyHome;
