import React from 'react';
import style from './Weather.module.scss';

function Weather({ weather }) {
	return (
		<div className={style['weather-info']}>
			{weather.name ?
				<div className={style['weather-info__all']}>
					<div className={style['weather-info__title']}>Погода в {weather.name}</div>
					<div className={style['weather-info__temperature']}>{weather.temp} °C</div>
					<div className={style['weather-info__desctiption']}>{weather.weatherDescription}</div>
					<div className={style['weather-info__pressure']}>Давление: {weather.pressure} гПа</div>
					<div className={style['weather-info__wind_speed']}>Скорость ветра: {weather.windSpeed} км/ч</div>
				</div> :
				weather.error ? <p>{weather.error}</p> : null
			}
		</div>
	)
}

export default Weather;