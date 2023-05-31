export default class WeatherDataProcessor{
    convertWindSpeed(metersPerSec){
        return metersPerSec * 3.6;
    }

    calculateDayDuration(sunriseTimestamp, sunsetTimestamp){
        const sunrise = new Date(sunriseTimestamp * 1000);
        const sunset = new Date(sunsetTimestamp * 1000);

        const durationInMillis = sunset.getTime() - sunrise.getTime();

        const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}:${minutes}`;
    }

    getWeatherIcon(iconCode){
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
}