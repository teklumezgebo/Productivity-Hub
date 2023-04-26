import React, { useEffect, useState } from "react";

function Home() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      
        setInterval(() => {
        setTime(new Date())
      }, 1000)

    }, [])
    
    return(
        <div className="home">
            <h1 className="title">{time.toString()}</h1>
        </div>
    )
}

export default Home