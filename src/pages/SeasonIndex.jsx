import '../css/Season.css'
import { useEffect,useRef,useState } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const seasons = ["Spring", "Summer", "Autumn","Winter"];
const seasonImages = ["spring.png", "summer.png", "autumn.png","winter.png"];

export function SeasonIndex() {

    const [isDark,setIsDark] = useState(false)
    const [d, setD] = useState(new Date())
    const intervalIdRef = useRef()
    
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let season = seasons[(Math.floor(d.getMonth()/4))]
    let seasonImage = seasonImages[(Math.floor(d.getMonth()/4))]
    let classNameParameter = isDark ? "season-preview-dark" : "season-preview-light"

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setD(new Date())
      }, 1000)
    
      return () => {
        clearInterval(intervalIdRef.current)
    }
    
    })

    return (
        <div onClick={()=> {setIsDark(!isDark)}}>
        <div className={`${classNameParameter}`}>
            <p>{`${month}`}</p>
            <p>{`${season}`}</p>
            <img src={`./src/assets/${seasonImage}`}/>
            <p>{`${day}`}</p>
            <p>{`${clockStr}`}</p>
        </div>
        </div>
    )
  }