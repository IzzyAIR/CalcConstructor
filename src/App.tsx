import React from 'react';
import MainCalc from './Components/MainCalc/MainCalc';
import Space from './Components/EmptyBox/Space';
import Switcher from './Components/Switcher/Switcher';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<div className='header_swicher'>
					<Switcher />
				</div>
				<div className='container_main'>
					<MainCalc />
					<Space />
				</div>
			</div>
		</div>
	);
}

export default App;
