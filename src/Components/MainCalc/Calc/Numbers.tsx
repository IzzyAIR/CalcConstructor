import React from 'react';
import styles from './Calc.module.scss';

const numbers: String[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];

const Numbers = () => {
	return (
		<div className={styles.numbers_container}>
			{numbers.map((item, i) => {
				return (
					<div className={styles.number_input} key={i}>
						{item}
					</div>
				);
			})}
		</div>
	);
};
export default Numbers;
