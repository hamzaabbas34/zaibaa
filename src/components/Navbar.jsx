import React from "react";
import "./navbar.css";
export default function Navbar() {
	return (
		<nav className="nav">
			<div className="logo">
				<h1>Zaibaa</h1>
			</div>
			<nav className="nav-bar">
				<ul className="nav-bar_ul">
					<li>aboutsUs</li>
					<li>product</li>
					<li>Services</li>
					<li>contactUs</li>
				</ul>
			</nav>
			<div className="nav_button">
				<button>Cart</button>
			</div>
		</nav>
	);
}
