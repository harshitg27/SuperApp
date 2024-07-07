import axios from "axios";

const WEATHER_API = 'dac089b70463498fb65212624240707';

export const fetchWeatherData = async () => {
    const { data, status } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=Delhi`
    );
    if (status == 200) {
        return data.current;
    }
};