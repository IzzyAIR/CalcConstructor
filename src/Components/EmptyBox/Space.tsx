import React from 'react';
import Switcher from '../Switcher/Switcher';
import styles from './Space.module.scss';
import { useState } from 'react';

const Space = () => {
	const [calcItem, setCalcItem] = useState([]);
	return (
		<div className={styles.container_space}>
			{!!calcItem.length ? (
				calcItem.map((item, i) => <div key={i}>{item}</div>)
			) : (
				<div className={styles.empty}>
					<img src='img/empty.png' />
					<p className={styles.title_empty}>Перетащите сюда</p>
					<p className={styles.subtitle_empty}>любой элемент из левой панели</p>
				</div>
			)}
		</div>
	);
};
export default Space;
