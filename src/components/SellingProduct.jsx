import React from "react";
import "./selling.css";

export default function SellingProduct() {
	return (
		<section className="selling">
			<div className="selling_header">
				<h2>On My Best </h2>
				<h3>Selling Products</h3>
			</div>
			<div className="selling_main">
				<div className="l">
					<img src="/image/Rectangle11.png" alt="" />
				</div>
				<div className="r">
					<div className="cir">
						<div className="quote">,,</div>
						<p>
							Farm products are the backbone of the economy, sustaining both our
							lives and livelihoods Agricultural products are fundamental to our
							daily nutrition and economic well-being
						</p>
						<div className="quotes">,,</div>
					</div>
					<div className="imagess">
						<img
							src="https://i.pinimg.com/564x/ba/26/5a/ba265ab77d17005ee9c66d9bac1112e6.jpg"
							alt=""
							className="iamge-w"
						/>
						<img
							src="https://i.pinimg.com/564x/ba/26/5a/ba265ab77d17005ee9c66d9bac1112e6.jpg"
							alt=""
							className="iamge-w"
						/>
						<img
							src="https://i.pinimg.com/564x/ba/26/5a/ba265ab77d17005ee9c66d9bac1112e6.jpg"
							alt=""
							className="iamge-w  dsss"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
