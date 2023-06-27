import _ from "lodash"
import {Request} from "../request";
import {value} from "lodash/seq";

export default class WeatherAPI {
    static NAVIGATOR_QUERY_NAME = 'geolocation';
    static NAVIGATOR_GRANTED_STATE = 'granted';

    #weatherRequest;
    #weatherLocationRequest;
    #nearbyWeatherRequest;
    #locationRequest;
    #currentLocation;

    constructor() {
        this.#weatherRequest = new Request(APP_CONFIG.weatherApiUrl, APP_CONFIG.weatherApiPath);
        this.#weatherRequest.setParams({
            appid: APP_CONFIG.weatherApiKey,
            units: 'metrics'
        });

        this.#nearbyWeatherRequest = new Request(APP_CONFIG.weatherApiUrl, APP_CONFIG.nearbyWeatherApiPath);
        this.#nearbyWeatherRequest.setParams({
            appid: APP_CONFIG.weatherApiKey,
            units: 'metrics'
        });

        this.#weatherLocationRequest = new Request(APP_CONFIG.weatherApiUrl, APP_CONFIG.weatherApiGeoPath);
        this.#weatherLocationRequest.setParams({
            appid: APP_CONFIG.weatherApiKey,
            limit: 1
        });

        this.#locationRequest = new Request(APP_CONFIG.ipInfoLocationUrl);
        this.#locationRequest.setParams({
            token: APP_CONFIG.ipInfoLocationToken
        });

        this.#currentLocation = {
            lat: 0,
            lon: 0
        };
    }

    async getDataByLocation(location = null) {
        if (location) {
            this.#setCurrentLocation(location.lat, location.lon);
        }

        if (this.#currentLocationIsEmpty()) {
            await this.#retrieveCurrentLocation();
        }
        const weatherData = await this.#weatherRequest.setParams(this.#currentLocation).get();
        const nearby = await this.#nearbyWeatherRequest.setParams(this.#currentLocation).get();

        return {...weatherData, nearby};
    }

    async getCityLocation(city) {
        return await this.#weatherLocationRequest.setParams({
            q: encodeURIComponent(city)
        }).get();
    }

    #currentLocationIsEmpty() {
        return _.every(this.#currentLocation, value => value === 0)
    }

    #setCurrentLocation(lat, lon) {
        return this.#currentLocation = {lat, lon};
    }

    async #retrieveCurrentLocation(){
        try {
            await this.#getCurrentLocationByGps();

            if(this.#currentLocationIsEmpty()){
                await this.#getCurrentLocationByIpAddress();
            }
        }catch (error){
            console.error(error.message);
        }
    }

    async #getCurrentLocationByGps(){
        try {
            const navigatorPermission = await navigator.permissions.query({
                name: WeatherAPI.NAVIGATOR_QUERY_NAME
            });

            if (navigatorPermission.state === WeatherAPI.NAVIGATOR_GRANTED_STATE) {
                navigator.geolocation.getCurrentPosition(geolocationPos => {
                    this.#setCurrentLocation(
                        geolocationPos.coords.latitude,
                        geolocationPos.coords.longitude
                    );
                });
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    async #getCurrentLocationByIpAddress() {
        try {
            const geoLocation = await this.#locationRequest.get();

            const [lat, lon] = _.split(geoLocation.loc, ',');

            this.#setCurrentLocation(lat, lon);
        } catch (error) {
            console.error(error.message);
        }
    }
}