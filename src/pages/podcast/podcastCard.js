import React from "react";
import tempImage from "../../../src/assets/ju-guan-D-jLxBtEwaA-unsplash.jpg";
import "./podcast.scss";

export default function podcastCard({image, status}) {
	return (
		<div className="podcast-card" style={{}}>
			<div>
				<img
					src={tempImage}
					alt="cute astronauts"
					style={{ height: 321, width: 321, display: "block" }}
				/>
			</div>
			<div className="info-box">
				<h2>Our Solar System: (S1E1)</h2>
				<h4>About:</h4>
				<p style={{marginTop: "1rem"}}>
					ipsum dolor sit amet, consectetur adipiscing elit. Urna,
					imperdiet adipiscing libero commodo egestas ac pretium, at.
					Viverra viverra quam non aliquet. Nec volutpat in morbi
					molestie sem porttitor massa. Massa ac viverra montes,
					maecenas tempus, lorem ultrices.
				</p>
				<p style={{marginTop: "1rem"}}>1 hr 3 min left</p>
				<p>10/26/2022</p>
				<h6>{status}</h6>
			</div>
		</div>
	);
}
