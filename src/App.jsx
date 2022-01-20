import './App.css';
import HomePage from './Components/Home/HomePage';
import './Styles/main.scss';
import { Routes, Route } from "react-router-dom";
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Career from './Components/Career/Career';
import { useEffect } from 'react';

function App() {
	window.scrollTo(0, 0)
	useEffect(()=>{
	},[])
	return (
		<>
			<Routes>
				<Route exact path="/" element={<HomePage />}/>
				<Route exact path="/service" element={<Service />}/>
				<Route exact path="/about" element={<About />}/>
				<Route exact path="/contact" element={<Contact />}/>
				<Route exact path="/career" element={<Career />}/>
			</Routes>
		</>
	);
}

export default App;
