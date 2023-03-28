import React from 'react';
import styles from './Calc.module.scss';

const Output = () => {
	return (
		<div className={styles.output_container}>
			<div className={styles.output}>
				<span className={styles.output_text}>0</span>
			</div>
		</div>
	);
};
export default Output;
