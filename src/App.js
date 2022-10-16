import React from "react";
import Actions from "./components/Actions/Actions";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import style from './App.module.scss';

const API_KEY = '53924782dfb021f8669a0d008a24a4dd';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temp: undefined,
			name: undefined,
			pressure: undefined,
			weatherDescription: undefined,
			windSpeed: undefined,
			error: undefined,
		}
	}
	gettingWeather = async (event) => {
		event.preventDefault();
		const city = event.target.elements.city.value;
		if (city) {
			const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`;
			try {
				const response = await fetch(api_url);
				const weather = await response.json();
				this.setState({
					temp: Math.round(weather.main.temp * 10) / 10,
					name: weather.name,
					pressure: weather.main.pressure,
					weatherDescription: weather.weather[0].description,
					windSpeed: weather.wind.speed,
					error: undefined,
				})
			} catch (err) {
				this.setState({
					temp: undefined,
					name: undefined,
					pressure: undefined,
					weatherDescription: undefined,
					windSpeed: undefined,
					error: 'Введенный город не найден'
				})
			}
		}
	}
	render() {
		return (
			<div className={style['weather-block']}>
				<Form gettingWeather={this.gettingWeather} />
				<Weather weather={this.state} />
				<Actions />
			</div>
		);
	}
}

export default App;
