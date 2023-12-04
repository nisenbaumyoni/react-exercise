import { useEffect, useState } from 'react'
import '../css/Mouse.css'

export function Mouse() {

const [isOn,setIsOn] = useState(true)
const [pos,setPos] = useState({x: 0 , y: 0})

useEffect (() =>{

    isOn ? addListeners() : removeListeners()

    return () => {
        if (isOn) removeListeners()
    }
},[isOn])

function updatePos(ev){
    console.log('ison', isOn);
    if(!isOn) return
    console.log('after if')
    setPos({x: ev.clientX, y: ev.clientY})
}

function addListeners(){
    document.addEventListener('mousemove',updatePos)

}

function removeListeners(){
    document.removeEventListener('mousemove',updatePos)
}

return(
    <section className='mouse-section'>
        <h2>Mouse Position</h2>
        <p>x: {pos.x}, y: {pos.y}</p>

        <button className='mouse-button' onClick={()=>setIsOn((prev) => !prev)}>{isOn ? 'Pause' : 'Resume'}</button>

    </section>
)

}
