import React from "react";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className = "d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
				</div>
				<Footer/>

		</div>
	);
};

export default Home;
