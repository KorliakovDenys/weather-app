import {Request} from "./request";

export default class WeatherDataProcessor {
    convertToAMPM = (hours) => {
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

    convertToCelsius(kelvins) {
        return Math.round(kelvins - 273.15);
    }

    convertWindSpeed(windSpeed) {
        return (windSpeed * 3.6).toFixed(1);
    }

    convertWindDirection(windDeg) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(windDeg / 22.5) % directions.length;
        return directions[index];
    }

    calculateDayDuration(sunriseTimestamp, sunsetTimestamp) {
        const sunrise = new Date(sunriseTimestamp * 1000);
        const sunset = new Date(sunsetTimestamp * 1000);

        const durationInMillis = sunset.getTime() - sunrise.getTime();

        const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    }

    getWeatherIcon(iconCode) {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    }

    async getCurrentGeoLocation() {
        try {
            let geoLocation = await this.#getCurrentGeoLocationByGps();

            if (geoLocation === null) geoLocation = await this.#getCurrentGeoLocationByIpAddress();

            return geoLocation;
        } catch (error) {
            return null;
        }
    }

    async #getCurrentGeoLocationByGps() {
        let location = null;
        try {
            const result = await navigator.permissions.query({name: 'geolocation'});

            if (result.state === 'granted') {
                await navigator.geolocation.getCurrentPosition(geolocationPos => {
                    const coords = geolocationPos.coords;

                    location = {lat: coords.latitude, lon: coords.longitude};
                });
            }

        } catch (error) {
            console.error(error.message)
        }
        return location;
    }

    async #getCurrentGeoLocationByIpAddress() {
        try {
            const locationRequest = new Request('https://ipinfo.io/');

            const geoLocation = await locationRequest.get(new URLSearchParams({
                token: "59b538dd73bc39"
            }));
            const gLStrSplit = geoLocation.loc.split(',');

            return {lat: gLStrSplit[0], lon: gLStrSplit[1]};

        } catch (error) {
        }
        return null;
    }
}