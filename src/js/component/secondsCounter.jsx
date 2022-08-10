import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";

const SecondsCounter = () => {

const [seconds, setSeconds] = useState(0);
const [play, setPlay] = useState (false);
const [secondsString, setsecondsString] = useState([]);

useEffect (() => {
    let interval;
    if (play) {interval = setInterval (() => {
        setSeconds((magic)=> magic + 1);
    }, 1000);
} else if (!play) {
    clearInterval(interval);}
    return () => clearInterval (interval);
}, [play]);
useEffect (() => {setPlay (true);
}, []);
useEffect(()=> {setsecondsString(seconds.toString().split("").reverse());}, [seconds]);

return (
<div className="digits d-flex justify-content-center bg-dark bg-gradient">
      <i className="fa-regular fa-clock"/>
      <Cards digit={secondsString[5]} />
      <Cards digit={secondsString[4]} />
      <Cards digit={secondsString[3]} />
      <Cards digit={secondsString[2]} />
      <Cards digit={secondsString[1]} />
      <Cards digit={secondsString[0]} />
    </div>
  );
};

export default SecondsCounter;