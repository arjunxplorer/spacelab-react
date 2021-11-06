import React from 'react';
import Planets_Circle from '../../assets/aboutAssets/planet_circle.png'
import Dot from '../../assets/aboutAssets/dot.svg'
import Line from '../../assets/aboutAssets/line.svg'

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function HistorySection() {
	return (
		<section className="history-section">
			<h2 className="about-history-header">History</h2>
			<div className="history-container">
				<div id={"planet-image-container"}>
					<img className={"about-history-image"} src={Planets_Circle} alt={"Space"}/>
				</div>
				<div className="history">
					<div className="about-history-wrapper">
						<div className="history-dot">
							<img src={Dot} alt={"Space"}/>
							<h3>spacelab 2021.00.00</h3>
						</div>
						<div className="about-history-content">
							<div className={"line"}>
								<img src={Line} alt={"Space"}/>
							</div>
							<p>
								Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
								Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
								Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
								Risus Semper Faucibus.
							</p>
						</div>
					</div>
					<div className="about-history-wrapper">
						<div className="history-dot">
							<img src={Dot} alt={"Space"}/>
							<h3>spacelab 2021.00.00</h3>
						</div>
						<div className="about-history-content">
							<div className={"line"}>
								<img src={Line} alt={"Space"}/>
							</div>
							<p>
								Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
								Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
								Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
								Risus Semper Faucibus.
							</p>
						</div>
					</div>
					<div className="about-history-wrapper">
						<div className="history-dot">
							<img src={Dot} alt={"Space"}/>
							<h3>spacelab 2021.00.00</h3>
						</div>
						<div className="about-history-content">
							<div className={"line"}>
								<img id="last-line"  src={Line} alt={"Space"}/>
							</div>
							<p>
								Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
								Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
								Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
								Risus Semper Faucibus.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}