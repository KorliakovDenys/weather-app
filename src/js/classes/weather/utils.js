import _ from 'lodash'

export default class WeatherUtils{
    static ICON_PLACEHOLDER = '{{icon-code}}';
    static WEATHER_ICON_URL_PLACEHOLDER = `https://openweathermap.org/img/wn/${WeatherUtils.ICON_PLACEHOLDER}.png`;

    static convertToAMPM = (hours) => {
        let period = 'AM';
        let adjustedHours = hours;

        if (hours >= 12) {
            period = 'PM';
            adjustedHours = hours === 12 ? 12 : hours - 12;
        }

        if (adjustedHours === 0) {
            adjustedHours = 12;
        }

        return `${adjustedHours} ${period}`;
    }

    static convertToCelsius(kelvins) {
        return Math.round(kelvins - 273.15);
    }

    static convertWindSpeed(windSpeed) {
        return (windSpeed * 3.6).toFixed(1);
    }

    static convertWindDirection(windDeg) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(windDeg / 22.5) % directions.length;
        return directions[index];
    }

    static calculateDayDuration(sunriseTimestamp, sunsetTimestamp) {
        const sunrise = new Date(sunriseTimestamp * 1000);
        const sunset = new Date(sunsetTimestamp * 1000);

        const durationInMillis = sunset.getTime() - sunrise.getTime();

        const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    }

    static getWeatherIcon(iconCode) {
        return _.replace(
            WeatherUtils.WEATHER_ICON_URL_PLACEHOLDER,
            WeatherUtils.ICON_PLACEHOLDER,
            iconCode
        );
    }
}