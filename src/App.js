import React, { useState, useEffect } from "react";
import { FaCloudSun, FaCloudShowersHeavy, FaCloud, FaTemperatureHigh } from '../node_modules/react-icons/fa';
import './App.css';
const App = () => {
    const [api, setApi] = useState(0);
    const [search, setSearch] = useState("Jabalpur");

    useEffect(() => {
        try {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3a880954b5c55791d4998a1ece695d92`).then((res) => res.json())
                .then((actualData) => {setApi(actualData)})
        } catch (error) {
            console.log(error)
        }

    }, [search])


    return (
        <>
            <div className='weather_header'>
                <h1>Weather App</h1>
                <input type='text' placeholder='Search City' id='search_bar'
                    onChange={(e) => setSearch(e.target.value) } />
                <h1>{search}</h1>

                { 
                
                (!api||api.cod=="404"||search==0) ? (
                    <p>No Data Found</p>
                ) :(
                  <>
                    
                    <div className='temp'><FaCloudShowersHeavy /></div>
                    <p>Wind:{api.wind.speed}</p>
                    <p>Temp:{api.main.temp}</p>
                    <p>Humidity :{api.main.humidity}</p>  
                </>)
                }
            </div>
        </>
    )
}
export default App