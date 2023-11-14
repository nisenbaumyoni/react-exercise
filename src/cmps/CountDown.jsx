import { useEffect, useState,useRef } from "react";

// eslint-disable-next-line react/prop-types
export function CountDown({startFrom, onDone}) {

  const [time, setTime] = useState(startFrom)
  const intervalIdRef = useRef()
  let classNameParameter='default-countdown'

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
    
    if (time >0){
        setTime((prevTime) => prevTime - 1)
        console.log(time)
    } else {
        clearInterval(intervalIdRef.current)
        onDone()
    }
  }, 1000)

  if(time<6){
    // eslint-disable-next-line react-hooks/exhaustive-deps
    classNameParameter = 'last-seconds-countdown'
  } 

  return () => {
    clearInterval(intervalIdRef.current)
}

})
  return (
    <section >
      <p>Counter is</p>
      <p className={classNameParameter}>{time}</p>
    </section>
  );
}
