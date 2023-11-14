// import { useEffect, useState } from "react";
import { useState } from "react";
import { CountDown } from "../cmps/SeasonPreview";
// import React from "react";

// export function SeasonIndex() {
//   // animalService.initiateAnimals()

//   const [isDark, setIsDark] = useState(false);

//   const [date, setDate] = useState(Date.now());

//   // cmp full lifecycle
//   useEffect(() => {
//     // onMount to DOM
//     const int = setInterval(() => {
//       setDate(Date.now());
//     }, 1000);
//     // return handles onUnmount from DOM
//     return () => {
//       clearInterval(int);
//     };
//   }, []);

//   // useEffect listening to changes in 'date'
//   useEffect(() => {
//     setIsDark(!isDark);
//   }, [date]);

//   // event trigger from DOM
//   function onSeasonClick() {
//     setIsDark(!isDark);
//   }

//   return (
//     <section className="season-index">
//       {date}
//       <p>{isDark ? "Dark" : "Light"}</p>
//       <button onClick={onSeasonClick}>Click</button>
//       {/* <SeasonPreview isDark={isDark} date={date} /> */}
//     </section>
//   );
// }

  export function SeasonIndex() {

    return (
        <CountDown startFrom={10} onDone={()=>{console.log("Done!")}}/>
    )
  }