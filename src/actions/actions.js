import axios from 'axios';

export const addToCart = (item) => {
    return {
        type: 'add',
        item
    };
}

export const loading = () => {
    return {
        type: "loading"
    }
}

export const finishLoading = (weather) => {
    return {
        type: "finishLoading",
        weather
    }
}


export const fetchWeatherAsync = () => {
    const city = "Oceanside"
    return {
        type: 'fetchWeather',
        city
    };
}

export const fetchWeather = () => {
    console.log("is it working?");
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            const weather = {};
            axios.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + "Oceanside", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "CsnQC0v2Z8mshebeRSE12ssavaRvp1gSSQOjsnpCBe80cTfCI1"
                },
                "type": "JSON"
            }).then(res => {
                weather.conditions = res.data.list[0].weather[0].main;
                weather.description = res.data.list[0].weather[0].description;
                weather.lowTemp = res.data.list[0].main.temp_min;
                weather.highTemp = res.data.list[0].main.temp_max;
                weather.currentTemp = res.data.list[0].main.temp;
                weather.humidity = res.data.list[0].main.humidity;
            })
            dispatch(finishLoading(weather));
        }, 5000)
    }
}