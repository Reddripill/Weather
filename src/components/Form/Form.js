import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import style from './Form.module.scss';

export class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.gettingWeather} className={style['weather-form']}>
				<input className={style['weather-form__input']} name='city' placeholder='Search...' />
				<button className={style['weather-form__button']}><BiSearch /></button>
			</form>
		)
	}
}

export default Form;