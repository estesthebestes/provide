import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TopNav from './components/topNav';

function App() {
	{
		return (
			<div>
				<TopNav />
			</div>
		);
	}
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
