import { useEffect, useState,useRef } from "react";

export function SimpleTimer() {
  const [time, setTime] = useState(0)
  const intervalIdRef = useRef()

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 1)
    console.log(time)
  }, 1000)


  return () => {
    clearInterval(intervalIdRef.current)
}

})
  return (
    <section className="season-index">
      <p>{time}</p>
      <button>stop</button>
    </section>
  );
}
