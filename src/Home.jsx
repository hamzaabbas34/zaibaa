import React from "react";
import { Icon } from "@iconify/react";
import "./home.css";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import SellingProduct from "./components/SellingProduct";
import Stroy from "./components/Stroy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="homes">
			<Navbar />
			<div className="whatsapp">
				<a href="https://wa.me/+923019612828">
					<Icon icon="logos:whatsapp-icon" width="3rem" height="3rem" />
				</a>
			</div>
			<section className="hero">
				<div className="lf">
					<h2 className="">
						We Introduce to you Farm to table pure Organic Treasures
					</h2>
					<p>
						Farm Treasure is an engaging farming adventure where players embark
						on a quest to discover hidden treasures on their farm. Along the
						way, they cultivate crops, raise animals, and complete exciting
						challenges. As they unlock secrets and rare items, players enhance
						their farms, "
					</p>
					<div className="btn">
						<button>
							<a
								href="https://www.daraz.pk/products/1-1kg-i384142023-s1887224295.html?spm=a2a0e.searchlist.sku.2.75f4f2ceXsADGs&search=1"
								target="_blank"
								rel="noopener noreferrer">
								Go to Product
							</a>
						</button>
					</div>
				</div>
				<div className="rf">
					<img src="/image/home.png" alt="" />
				</div>
			</section>
			<Technology />
			<SellingProduct />
			<Stroy />
			<Contact />
			<Footer />
		</div>
	);
}
