import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {

    const INIT_URL = "https://media.istockphoto.com/id/1965168998/photo/amazing-sunset-sky-cloudscape.jpg?s=612x612&w=0&k=20&c=aWtVSCJmIR22l8MmxojY25JHTi8dUaGScZ-aCNSmxjc="

    const HOT_URL = "https://media.istockphoto.com/id/1257088461/photo/glowing-sun-on-orange-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=VVQer6KRs36E9CHMTr6Qb9ySQHEyq4vziQj4B9bD2HI="

    const COLD_URL = "https://media.istockphoto.com/id/937203292/photo/spiti-valaley-in-winter.webp?a=1&b=1&s=612x612&w=0&k=20&c=9rq96vdzgT7FxA4Pgefkige6JAAZVyhM2lyqzU-tR3I="

    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="


    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 100 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 90 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}