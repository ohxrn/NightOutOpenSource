import React from "react";
import * as Flowbite from 'flowbite';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Intro from "./Components/Intro";
import User from "./Components/User";
import Company from "./Components/Company";
import CompanyHome from "./Components/CompanyHome";
import UserHome from "./Components/UserHome";
import BtmNavBar from "./Components/BtmNavBar";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
</style>;

function App() {
  //   colors: {
  //     blue: '#1B0757',//Federal Blue
  //     pink: '#DF2287',//Mexican Pink
  //     purple: '#6600A9',//Grape
  //     gray: '#2B2B2B',//Jet
  //     indigo: '#06BCC1',//Robin Egg Blue
  return (
    <div className='bg-gray'>
      <Navbar />
      <Router>
        <BtmNavBar />
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
