import React from 'react';
import Contact from '../contact/Contact.jsx';
import Carousel from '../carousel/Carousel.jsx';
import './Home.css';

const Home = () => {

	const quote = ("Happy People Make Happy Profit").split(" ");

	return(
		<React.Fragment>   
			<Contact />
				<div className="wie-ben-ik-block">
					<div>
						<h1>Hi, Ik ben Ronan</h1>
					</div>
				</div>
				<div className="cases-block">
					<div>
						<h1>Cases</h1>
					</div>
				</div>
			<div className="diensten-landing">
				<div className="heading-position-landing1">
					<h1>Diensten</h1>
				</div>
			</div>
			<div className="carousel-styling" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
				<Carousel 
					show={4}
					infiniteLoop={true}
				>
						<div style={{padding: 5}}>
							<div className="card-frontend">
								<div className="card-container">
									<div>
										<span className="dot"></span>
										<h2>Ux / Ui Design</h2>
										<p>Lorum ipsum dolor sit amet.
										   adipiscing elit, sed do Lorum 
										   ipsum dolor sit amet.
										   adipiscing elit, sed do
										</p>
									</div>
									<div className="read-more">
										<a href="/">Lees verder</a> 
									</div>
								</div>
							</div>
						</div>
					<div>
						<div style={{padding: 5}}>
							<div className="card-frontend">
								<div className="card-container">
									<div>
										<span className="dot"></span>
										<h2>Concept-
										ontwikkeling</h2>
										<p>Lorum ipsum dolor sit amet.
										   adipiscing elit, sed do Lorum 
										   ipsum dolor sit amet.
										   adipiscing elit, sed do
										</p>
									</div>
									<div className="read-more">
										<a href="/">Lees verder</a> 
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div style={{padding: 5}}>
						<div className="card-frontend">
							<div className="card-container">
								<div>
									<span className="dot"></span>
									<h2>Front-End Dev.</h2>
									<p>Lorum ipsum dolor sit amet.
									   adipiscing elit, sed do Lorum 
									   ipsum dolor sit amet.
									   adipiscing elit, sed do
									</p>
								</div>
								<div className="read-more">
									<a href="/">Lees verder</a> 
								</div>
							</div>
						</div>
						</div>
					</div>
					<div>
						<div style={{padding: 5}}>
							<div className="card-frontend">
								<div className="card-container">
									<div>
										<span className="dot"></span>
										<h2>Back-End Dev.</h2>
										<p>Lorum ipsum dolor sit amet.
										   adipiscing elit, sed do Lorum 
										   ipsum dolor sit amet.
										   adipiscing elit, sed do
										</p>
									</div>
									<div className="read-more">
										<a href="/">Lees verder</a> 
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div style={{padding: 5}}>
						<div className="card-frontend">
							<div className="card-container">
								<div>
									<span className="dot"></span>
									<h2>Branding</h2>
									<p>Lorum ipsum dolor sit amet.
									   adipiscing elit, sed do Lorum 
									   ipsum dolor sit amet.
									   adipiscing elit, sed do
									</p>
								</div>
								<div className="read-more">
									<a href="/">Lees verder</a> 
								</div>
							</div>
						</div>
						</div>
					</div>
				</Carousel>
			</div>
			{/* <div className="quote-landing">
				<div className="quote-tekst">
				<h1>{quote.map(item => <span className="quote">{item + " "}</span>)}</h1>
					<p>“Happy People – Happy Profit” is waar HP2 voor staat. 
						Het is belangrijk om op zoek te blijven gaan naar de 
						uitdaging in het (werkende) leven. Daarbij is het 
						belangrijk dat je gelukkig bent en blijft (Happy People) 
						en dat je daarmee toegevoegde waarden kan blijven leveren 
						(Happy Profit).
					</p>
				</div>
			</div> */}
		</React.Fragment>
	);
};

export default Home;