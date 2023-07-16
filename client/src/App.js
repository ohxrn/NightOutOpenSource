import React from "react";

import * as Flowbite from 'flowbite';
// import { ThemeProvider } from "flowbite-react/lib/esm/components/Flowbite/ThemeContext";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Intro from "./Components/Intro";
import User from "./Components/User";
import Company from "./Components/Company";
import CompanyHome from "./Components/CompanyHome";
import UserHome from "./Components/UserHome";
import night2 from "./night2.png";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
</style>;

function App() {
  // const theme = {
  //   colors: {
  //     blue: '#1B0757',//Federal Blue
  //     pink: '#DF2287',//Mexican Pink
  //     purple: '#6600A9',//Grape
  //     gray: '#2B2B2B',//Jet
  //     indigo: '#06BCC1',//Robin Egg Blue
  //   }
  // }
  return (
    <div
      style={{
        position: "sticky",
        backgroundColor: "#212121",
        border: "8px solid border-color-pink",
        borderRadius: "66px",
        padding: "10px",
        height: "834px",
      }}
    >
      <Navbar style={{ position: "sticky" }} />
      <Router>
        <hr style={{ borderColor: "#fe2d8c" }}></hr>
        <Routes>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/home" element={<Welcome />}></Route>
          <Route path="/userform" element={<User />}></Route>
          <Route path="/companyform" element={<Company />}></Route>
          <Route path="/companyhome/:id" element={<CompanyHome />}></Route>
          <Route path="/main/:context" element={<UserHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
