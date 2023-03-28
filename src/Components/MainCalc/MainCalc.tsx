import React from 'react';
import styles from './MainCalc.module.scss';

import Numbers from './Calc/Numbers';
import BtnRes from './Calc/BtnRes';
import MathSymbols from './Calc/MathSymbols';
import Output from './Calc/Output';

const MainCalc = () => {
	const [itemList, setItemList] = React.useState([
		{ id: 1, component: <Output /> },
		{ id: 2, component: <MathSymbols /> },
		{ id: 3, component: <Numbers /> },
		{ id: 4, component: <BtnRes /> },
	]);
	const [currenItem, setCurrenItem] = React.useState([]);
	function dragStartHandler(e: React.DragEvent<HTMLDivElement>, item: any): void {
		console.log('drag', currenItem);
		setCurrenItem(item);
	}

	function dragEndHendler(e: React.DragEvent<HTMLDivElement>): void {}

	function dragOverHendler(e: React.DragEvent<HTMLDivElement>): void {
		e.preventDefault();
	}

	function dropHandler(
		e: React.DragEvent<HTMLDivElement>,
		item: { id: number; component: JSX.Element },
	): void {
		e.preventDefault();

		console.log('drop', currenItem);
	}

	return (
		<div className={styles.container_calc}>
			{itemList.map((item) => (
				<div
					className={styles.item}
					onDragStart={(e) => dragStartHandler(e, item)}
					onDragLeave={(e) => dragEndHendler(e)}
					onDragEnd={(e) => dragEndHendler(e)}
					onDragOver={(e) => dragOverHendler(e)}
					onDrop={(e) => dropHandler(e, item)}
					draggable={true}
					key={item.id}
				>
					{item.component}
				</div>
			))}
		</div>
	);
};
export default MainCalc;
/*: { id: number; order: number; component: JSX.Element } */
