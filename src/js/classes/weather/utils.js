import _ from 'lodash'

export default class WeatherUtils {
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
        return Math.round(kelvins - 273.15).toString() + '\u00B0C';
    }

    static convertWindSpeed(windSpeed) {
        return (windSpeed * 3.6).toFixed(1);
    }

    static convertWindDirection(windDeg) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(windDeg / 22.5) % directions.length;
        return directions[index];
    }

    static convertHectoPascalToMillimetersOfMercury(hPa){
        return (hPa * 0.75006).toFixed(2);
    }

    static calculateDayDuration(sunriseTimestamp, sunsetTimestamp) {
        const sunrise = this.getDate(sunriseTimestamp);
        const sunset = this.getDate(sunsetTimestamp);

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

    static getDate(dateTimestamp) {
        return new Date(dateTimestamp * 1000);
    }

    static getDayOfWeek(date) {
        if (this.isToday(date)) return "TODAY";

        const dayNumber = date.getDay();

        const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

        return daysOfWeek[dayNumber];
    }

    static getMonthName(date) {
        const monthNumber = date.getMonth();

        if (0 > monthNumber > 11) return "";

        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        return months[monthNumber];
    }

    static getDayOfMonth(date) {
        return date.getDate().toString().padStart(2, '0');
    }

    static isToday(date) {
        const now = new Date;

        return (
            date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
        );
    }

    static getFormattedTime = (date) => {
        return date.toLocaleTimeString(
            [],
            {
                hour: 'numeric',
                minute: '2-digit'
            }
        );
    };
}