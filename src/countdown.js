import React, { useState, useRef } from 'react'

function Countdown() {
        const [startPoint, setStartPoint] = useState(60)
        const [any, setAny] = useState(0)
        const [startButton, setStartButton] = useState("start")
        const startTime = useRef(Date.now())
        const intervalRef = useRef(null)


        const handleStart = () => {
            startTime.current = Date.now()
           // setStartPoint(50)
        intervalRef.current = setInterval(() => {
            
          setAny(Date.now())
        }, 10);
      }
        const handleStop = () => {
       console.log(intervalRef.current);
          clearInterval(intervalRef.current)
          //startTime.current = 0;
          
          //setStartButton("start")
        }

        let sec = (Date.now()-startTime.current)/1000
        let secWhole = sec.toFixed(0)
        let countdown;
        startPoint - secWhole > -1 ? countdown = startPoint - secWhole: handleStop()

       

  return (
    <div>
        <input type="text" name = "countdown"/>
        <label htmlFor="countdown"> Start time</label>
        <button onClick = {handleStart}>{startButton}</button>
        <button onClick = {handleStop}>stop</button>
        <h3>countdown: {countdown}</h3>
    </div>
  )
}

export default Countdown