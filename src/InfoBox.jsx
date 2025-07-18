import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INI_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=MyYLgJ9NKAGMGh69lTW1r03_f91pozcmrZyPo9Oqcu8=";

    const HOT_URL= "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=612x612&w=0&k=20&c=jj-m92mxK3r7b8KgAPlUa6vq3r22S2iflhmJSTkOT0Y=";
    const COLD_URL= "https://media.istockphoto.com/id/2155725480/photo/morning-bonfire-warmth.jpg?s=612x612&w=0&k=20&c=AjT8Pabg8nLb56h7mj_wD1ujjbGtU3VcESNxFvR9z4A=";
    const RAIN_URL= "https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.jpg?s=612x612&w=0&k=20&c=Y1pr13ov2-qNt03p7JPHV8UZaqNsJt4Vw14dJjc21TE="

    return(
        <div className="weatherInfo">
            <h2 className='h3'>Weather Info:</h2>
            <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ? <ThunderstormIcon />: 
          (info.temp > 15) 
          ? <SunnyIcon /> : 
          <AcUnitIcon />
          } 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temprature: {info.temp}&deg;C</div>
          <div>Humidity: {info.humidity}</div>
          <div>TempMin: {info.tempMin}&deg;C</div>
          <div>Max Temprature: {info.tempMax}&deg;C</div>
          <div>weather can be described as : <i>{info.weather}</i></div>
          <div>Feels Like: {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}