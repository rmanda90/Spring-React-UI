import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppMenu from './components/nav/AppMenu';

function App() {
	return (
		<Provider store={store}>
			<div className="container-fluid">
				<AppMenu />
			</div>
		</Provider >
	);
}

export default App;
