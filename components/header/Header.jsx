import React from 'react';
import {
	BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import Overons from "../about/Overons.jsx";
import Cases from "../cases/Cases.jsx";
import Contact from "../contact/Contact.jsx";
import Expertise from '../expertise/Expertise.jsx';
import Home from "../home/Home.jsx";
import Logo from "../images/logo.rostudio.svg";
import './Header.css';

const Header = () => {
		
	const quotebanner = ("VISUAL DESIGNER & FRONT-END DEVELOPER").split(" ");
	
	window.onscroll = function(){
		const navbar = document.querySelector('.navbar');
		let top = window?.scrollY;
		
		if (!navbar.classList?.contains('active') && top >= 750){
			navbar.classList?.add('active');
		} else if (navbar.classList?.contains('active') && top <= 750){
			navbar.classList?.remove('active');
		}
	};

	return(
		<Router>
				<header>
					<div className="header-container">
						<nav className="navbar">
								<Link to="/"><img className="logo" src={Logo} alt="."/></Link>
									<ul className="navigatie">
										{/* <li>
											<Link to="/">Home</Link>
										</li> */}
										<li>
											<Link to="/overons">Over mij</Link>
										</li>
										<li>
											<Link to="/cases">Cases</Link>
										</li>
										<li>
											<Link to="/expertise">Diensten</Link>
										</li>
										<li>
											<Link to="/contact">Contact</Link>
										</li>
									</ul>
						</nav> 
						<div className="quote-contact">
							<div className="quote-blok">
								<h1>{quotebanner.map(item => <span className="quotebanner">{item + " "}</span>)}</h1>
								<div className="quote-homepage">
									<h2>* LET'S GET CREATIVE</h2>
								</div>
							</div>
						</div>
						<div classname="down-scroll-animation">
							<Link to="/contact">
								<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
								<path id="arrow-1" d="M678.16 269.44a27.18 27.18 0 01-19.27-8L491.55 94.11a27.25 27.25 0 0138.54-38.54l148.07 148.08L826.23 55.57a27.26 27.26 0 1138.54 38.55L697.43 261.47a27.21 27.21 0 01-19.27 7.97z"/>
								<path id="arrow-2" d="M678.16 491.3a27.22 27.22 0 01-19.27-8L491.55 316a27.26 27.26 0 0138.54-38.55L678.16 425.5l148.07-148.07A27.25 27.25 0 01864.77 316L697.43 483.32a27.18 27.18 0 01-19.27 7.98z"/>
								<path id="arrow-3" d="M678.16 713.15a27.18 27.18 0 01-19.27-8L491.55 537.82a27.25 27.25 0 1138.54-38.54l148.07 148.08 148.07-148.08a27.26 27.26 0 0138.54 38.55L697.43 705.18a27.21 27.21 0 01-19.27 7.97z"/>
								</svg>
							</Link>
						</div>
					</div>
				</header> 
				<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/overons" component={Overons}/>
						<Route path="/cases" component={Cases}/>
						<Route path="/expertise" component={Expertise}/>
						<Route path="/contact" component={Contact}/>
				</Switch>
		</Router>
		);
	};

export default Header;