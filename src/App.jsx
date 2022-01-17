import './App.css';
import HomePage from './Components/Home/HomePage';
import './Styles/main.scss';
import { Routes, Route } from "react-router-dom";
import Service from './Components/Service/Service';
import About from './Components/About/About';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<HomePage />}/>
				<Route exact path="/service" element={<Service />}/>
				<Route exact path="/about" element={<About />}/>
			</Routes>
		</>
	);
}

export default App;
