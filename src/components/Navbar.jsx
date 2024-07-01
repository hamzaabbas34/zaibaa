import React from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
	return (
		<nav className="nav">
			<div className="logo">
				<h1>Zaibaa</h1>
			</div>
			<nav className="nav-bar">
				<ul className="nav-bar_ul">
					<li>
						<Link to="#Services">Services</Link>
					</li>
					<li>
						<Link to="#product">Best Product</Link>
					</li>
					<li>
						<Link to="#about">Abouts_Us</Link>
					</li>
					<li>
						<Link to="#contact">ContactUs</Link>
					</li>
				</ul>
			</nav>
			<div className="nav_button">
				<button>Product</button>
			</div>
		</nav>
	);
}
