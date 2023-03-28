import React from 'react';
import styles from './Calc.module.scss';

const mathSym: String[] = ['+', '-', 'x', '/'];

const MathSymbols = () => {
	return (
		<div className={styles.math_container}>
			{mathSym.map((item, index) => {
				return (
					<div key={index} className={styles.mathSym}>
						{item}
					</div>
				);
			})}
		</div>
	);
};
export default MathSymbols;
