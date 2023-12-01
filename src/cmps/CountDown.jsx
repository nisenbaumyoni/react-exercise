import '../css/CountDown.css'
import { useEffect, useState,useRef } from 'react';

// eslint-disable-next-line react/prop-types
export function CountDown({startFrom, onDone}) {

  const [time, setTime] = useState(startFrom)
  const intervalIdRef = useRef()
  const  classNameParameter= (time>6) ? 'default-countdown' : 'last-seconds-countdown'


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
