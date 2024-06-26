import React from "react";
import "./contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<div className="contacy1">
				<h3 className="contacy1h3">CONTACT_US</h3>
				<h1 className="contacy1h1">Lets Contact us</h1>
				<div className="absols"></div>
			</div>
			<div className="contactinp">
				<input type="text" placeholder="FullName ..." />
				<input type="text" placeholder="Email ..." />
				<input type="text" placeholder="Password ..." />
				<textarea name="" id=""  rows={10} placeholder="Message ..."></textarea>
                <div className="sub">
                    <button>Submit</button>
                </div>
			</div>
		</div>
	);
}
