import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jabalpur",
        feelsLike: 28.98,
        humidity: 37,
        temp: 29.64,
        tempMax: 29.64,
        tempMin: 29.64,
        weather: "scattered clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Shivansh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}