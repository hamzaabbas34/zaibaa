import React from "react";
import "./story.css";

export default function Stroy() {
	return (
		<section className="ourstroy">
			<div className="mylf">
				<div className="absut"></div>
				<img src="/image/Rectangle17.png" alt="" />
			</div>
			<div className="myrf">
				<h2 className="">Our <span>Stroy</span></h2>
				<p>
					Welcome to Our Farm Story, where tradition meets innovation. Nestled
					in the heart of the countryside, our family-owned farm has been
					dedicated to producing high-quality, sustainable products for
					generations. From fresh vegetables and fruits to dairy and free-range
					eggs, every item we produce is a testament to our commitment to
					environmental stewardship and community well-being.
				</p>
				<div className="btns">
					<button>views Products </button>
				</div>
			</div>
		</section>
	);
}
