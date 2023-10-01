import React, { useRef, useState } from 'react'

function Stopwatch() {

    const [now, setNow] = useState(null)
    const [lap, setLap] = useState([])
    const intervalRef = useRef(null)
    const startTime = useRef(Date.now())
    const [startButton, setStartButton] = useState("start")
    

    //let startTime
    
    const handleStart = () => {
        if(sec*1000>0){
            startTime.current = Date.now()-(sec*1000)
        }else{
        startTime.current = Date.now()}
        intervalRef.current = setInterval(() => {
            
            setNow(Date.now)
        }, 10);
        
    }
    
    const handleStop = () => {
       
        clearInterval(intervalRef.current)
        //startTime.current = 0;
        sec=0
        setStartButton("start")

    }
    const handleLap = () => {
            setLap([...lap, sec.toFixed(2)])
    }
    const handlePause = () => {
        clearInterval(intervalRef.current)
        
        intervalRef.current-=1
        setStartButton("continue")
        
    }

    let sec = (Date.now()-startTime.current)/1000
       
  return (
    <div>
        <h2>Time: {sec.toFixed(2)}</h2>
        <h3></h3>
        <h3>Lap: {lap[0]}</h3>
        <button onClick={handleStart}>{startButton}</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleLap}>Lap</button>
        <section>
            {lap.length > 0 && <h3>{lap.map(l=> <p key = {l}>{l}</p>)}</h3>} 
            </section>
    </div>
  )
}
// pause

//countdown timer

export default Stopwatch