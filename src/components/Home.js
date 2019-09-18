import React, {Component} from 'react';
import axios from 'axios';
import logo from "../logo.svg";

const descriptionPhotos = {
    "clear sky": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743120/clear.jpg'
    },
    "few clouds": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743120/fewclouds.jp' +
                'g'
    },
    "scattered clouds": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743120/fewclouds.jp' +
                'g'
    },
    "broken clouds": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743120/fewclouds.jp' +
                'g'
    },
    "shower rain": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743139/rain.jpg'
    },
    "rain": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743139/rain.jpg'
    },
    "thunderstorm": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743120/tstorm.jpg'
    },
    "snow": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743282/snoww.jpg'
    },
    "mist": {
        photo: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568743119/mist.jpg'
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: '',
            lowTemp: '',
            highTemp: '',
            currentTemp: '',
            humidity: '',
            city: 'Oceanside',
            description: 'clear sky'
        };
    }

    componentDidMount() {
        this.fetchCityWeather(this.state.city);
    }

    fetchCityWeather(city) {
        const path = "Oceanside";

        axios.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + path, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "CsnQC0v2Z8mshebeRSE12ssavaRvp1gSSQOjsnpCBe80cTfCI1"
            },
            "type": "JSON"
        }).then(res => {
            this.setState({
                conditions: res.data.list[0].weather[0].main,
                description: res.data.list[0].weather[0].description,
                lowTemp: this.convertTemp(res.data.list[0].main.temp_min),
                highTemp: this.convertTemp(res.data.list[0].main.temp_max),
                currentTemp: this.convertTemp(res.data.list[0].main.temp),
                humidity: res.data.list[0].main.humidity
            });
        })
    }

    convertTemp(temp) {
        const newTemp = Math.round(((temp - 273.15) * 1.8) + 32);
        return newTemp;
    }

    render() {
        const {
            conditions,
            lowTemp,
            highTemp,
            currentTemp,
            humidity,
            description
        } = this.state;
        const {loading} = this.props;

        return (
            <div>
                <div className="row">
                    <div className="columnBig">
                        <img
                            className="homePic"
                            src="https://res.cloudinary.com/osidekweenyasss/image/upload/v1568671422/IMG_2337.jpg"/>
                    </div>
                    {loading
                        ? <img src={logo} className="App-logo"/>
                        : <div
                            className="columnSmall weatherBox"
                            style={{
                            backgroundImage: `url(${descriptionPhotos[description].photo})`
                        }}>
                            <h2>Weather</h2>
                            <p className="textLeft1">Current</p>
                            <p className="textLeft1 currentTemp">{currentTemp}°F</p>
                            <p className="textLeft2">{conditions}</p>
                            <p className="textLeft2">Low Temp: {lowTemp}°F</p>
                            <p className="textLeft2">High Temp: {highTemp}°F</p>
                            <p className="textLeft2">Humidity: {humidity}%</p>
                        </div>
}
                </div>

            </div>
        );
    }
}

export default Home;