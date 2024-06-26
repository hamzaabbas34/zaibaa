import React from "react";
import "./tech.css";
export default function Technology() {
	return (
		<section className="main_tech">
			<div className="tech1">
				<h1>Our Vision</h1>
				<h2>Agriculture through technology</h2>
				<p>
					Farm Treasure is an engaging farming adventure where players embark on
					a quest to discover hidden treasures on their farm. Along the way,
					they cultivate crops, raise animals, and complete exciting challenges.
					As they unlock secrets and rare items, players enhance their farms, "
				</p>
				<div className="tech1inside">
					<div className="techinside1">
						<h3 className="h2">100% Organic</h3>
						<p>
							Farm Treasure is an engaging farming adventure where players
							embark on a quest to discover hidden treasures on their farm.
							Along the way, they cultivate crops, raise animals, and complete
							exciting challenges.
						</p>
					</div>
					<div className="techinside1">
						<h3 className="h2">High Quality</h3>
						<p>
							Farm Treasure is an engaging farming adventure where players
							embark on a quest to discover hidden treasures on their farm.
							Along the way, they cultivate crops, raise animals, and complete
							exciting challenges.
						</p>
					</div>
				</div>
				<div className="btns">
					<button>views Products </button>
				</div>
			</div>
			<div className="tech2">
				<div className="tech2_main"></div>
				<div className="image1">
					<img src="/image/Rectangle7.png" alt="" />
				</div>
				<div className="image2">
					<img className="image21" src="/image/Rectangle8.png" alt="" />
					<img className="image23" src="/image/Rectangle7.png" alt="" />
				</div>
			</div>
		</section>
	);
}
