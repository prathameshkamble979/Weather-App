import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import "./WeatherApp.css"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp: 25.05,
        tempMin:25.5,
        tempMax: 25.05,
        humidity:47,
        weather: 'haze',
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);

    }

    return(
        <div className="weatherApp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br /><hr />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}