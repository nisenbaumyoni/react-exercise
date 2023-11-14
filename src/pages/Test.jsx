import { useState,useEffect } from "react";

export function Test(startFrom=1000) {

  const [counter, setCounter] = useState(startFrom);

  // cmp full lifecycle
  useEffect(() => {
    // onMount to DOM
    const int = setInterval(() => {
        setCounter(counter-1);
    }, 1000);
    // return handles onUnmount from DOM
    return () => {
      clearInterval(int);
    };
  }, [counter]);

//   // useEffect listening to changes in 'date'
//   useEffect(() => {
//     setIsDark(!isDark);
//   }, [counter]);

//   // event trigger from DOM
//   function onSeasonClick() {
//     setIsDark(!isDark);
//   }

  return (
    <section className="season-index">
      {counter}
    </section>
  );
}