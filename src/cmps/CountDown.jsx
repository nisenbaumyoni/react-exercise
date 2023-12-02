import '../css/CountDown.css'
import { useEffect, useState,useRef } from 'react';

// eslint-disable-next-line react/prop-types
export function CountDown({startFrom, onDone}) {

  const [time, setTime] = useState(startFrom)
  const intervalIdRef = useRef()
  const classNameParameter= (time>6) ? 'default-countdown' : 'last-seconds-countdown'
  const seconds = time % 60
  const minutes = Math.floor((time % 3600) / 60)
  const hours = Math.floor(time / 3600)
  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
    
    if (time >0){
        setTime((prevTime) => prevTime - 1)
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
    <section className='countdown-section'>
      <p className={classNameParameter}>{clockStr}</p>
    </section>
  );
}
