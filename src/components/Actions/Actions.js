import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import style from './Actions.module.scss';

function Actions() {
	return (
		<div className={style['actions']}>
			<button className={style['actions__link']}>
				<ImFacebook />
			</button>
			<button className={style['actions__link']}>
				<IoLogoTwitter />
			</button>
			<button className={style['actions__link']}>
				<FaLinkedinIn />
			</button>
			<button className={style['actions__link']}>
				<AiOutlineInstagram />
			</button>
		</div>
	)
}

export default Actions;