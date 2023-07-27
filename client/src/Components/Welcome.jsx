import React from "react";
import { useNavigate } from "react-router-dom";
import night2 from "../night2.png";
import "../App.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
</style>;

function Welcome() {
  const nav = useNavigate();

  return (
    <div className="h-screen">
      <h1 className="m-4 mt-24 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-indigo text-center">
        Always Know What's{" "}
        <span className="text-gradient-animation text-pop-up-top">Poppin!</span>
      </h1>
      <button
        className=""
        type="button"
        onClick={() => {
          nav("/intro");
        }}
      >
        <img src={night2} alt="NightOutLogo" className="flicker-in-1" />
      </button>
      <p className="m-4 text-lg font-semibold text-indigo text-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Here at{" "}
        <span className="text-reverse-gradient-animation">NightOut</span> our
        goal is to provide you with the best bar hopping experience. Always know
        who's hot and who's not!
      </p>
    </div>
  );
}

export default Welcome;
