import { useEffect, useRef, useState } from "react";

function WeatherTest() {

    const [cityName,setCityName] = useState("")
    const [weather,setWeather] = useState({})

    let useDom = useRef("")
    console.log(useDom)

    

    function handleSearch(){
        let apiKey = "e10e48cd5c1df35f6da8d75df73a8bb5"
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        
            fetch(api).then((res)=>{
                return res.json()
            }).then((data)=>{
                setWeather(data)
            })

            useDom.current.focus()
            useDom.current.style.border = "1px solid red"
        
    }

    

    return ( 
        <>
            <h1 className="text-8xl">Weather:- { weather && weather.name}</h1>
            <h2 className="text-4xl">Temp :- {weather.main && weather.main.temp}</h2>
            <input type="text" className="border border-solid"
                    value={cityName}
                    onChange={(e)=>{setCityName(e.target.value)}}
                    ref={useDom}
            />
            <button onClick={handleSearch} >Search</button>
        </>
     );
}

export default WeatherTest;