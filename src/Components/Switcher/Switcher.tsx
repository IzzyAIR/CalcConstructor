import React from 'react';
import { FC } from 'react';
import styles from './Switcher.module.scss';
const Switcher: FC = () => {
	const [isActive, setIsActive] = React.useState(false);
	return (
		<div className={styles.switcher}>
			<div className={styles.switcher_main}>
				<button
					className={isActive ? styles.active : styles.disable}
					onClick={() => setIsActive(isActive === false ? !isActive : isActive)}
				>
					<img src={isActive ? 'img/runOn.png' : 'img/runOff.png'} />
					Runtime
				</button>
				<button
					className={isActive ? styles.disable : styles.active}
					onClick={() => setIsActive(isActive === true ? !isActive : isActive)}
				>
					<img src={isActive ? 'img/constOff.png' : 'img/constOn.png'} />
					Constructor
				</button>
			</div>
		</div>
	);
};
export default Switcher;
