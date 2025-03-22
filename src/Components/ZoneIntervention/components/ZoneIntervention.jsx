import React, { useState } from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import zone_img1 from '../assets/IMG_5806.JPG'
import zone_img2 from '../assets/DSC00005.JPG'
import zone_img3 from '../assets/IMG_20220313_153838_601.jpg'
import { useTranslation } from 'react-i18next'

function ZoneIntervention() {
	const { t } = useTranslation();
	const [activeZone, setActiveZone] = useState(null);

	const toggleZone = (index) => {
		if (activeZone === index) {
			setActiveZone(null);
		} else {
			setActiveZone(index);
		}
	};

	// Sample data structure - in a real app, this would come from an API or translations
	const zoneLocations = {
		0: [ // North Kivu
			{
				title: "Goma",
				image: zone_img1,
				description: t("zone_texte_nordkivu_P"),
			},
		],
		1: [ // South Kivu
			{
				title: "Bukavu",
				image: zone_img2,
				description: t("zone_texte_sudkivu_P"),
			},
		],
		2: [ // Tshopo
			{
				title: "Kisangani",
				image: zone_img3,
				description: t("zone_texte_tchopo_P"),
			},
		]
	};

	return (
		<div className="zone_container">
			<Header />
			<div className="zone_contents">
				<div className="zone_details">
					<div className="zone_Intro">
						<h1>{t("zone_intro_title")}</h1>
					</div>
					<div className="zone_block">
						{/* North Kivu */}
						<div className="zone_boxes">
							<div
								className="zone_dropdown_header"
								onClick={() => toggleZone(0)}
							>
								<h2>{t("zone_texte_nordkivu_h")}</h2>
								<span className={`dropdown_arrow ${activeZone === 0 ? 'active' : ''}`}>
									<i className="fas fa-chevron-down"></i>
								</span>
							</div>
							<div className={`zone_dropdown_content ${activeZone === 0 ? 'active' : ''}`}>
								{zoneLocations[0].map((location, locationIndex) => (
									<div key={locationIndex} className="location_item">
										<div className="location_content">
											<div className="zone_image">
												<img src={location.image} alt={location.title} />
											</div>
											<div className="zone_textes">
												<div className="location_title">
													<h3>{location.title}</h3>
												</div>
												<p>{location.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* South Kivu */}
						<div className="zone_boxes">
							<div
								className="zone_dropdown_header"
								onClick={() => toggleZone(1)}
							>
								<h2>{t("zone_texte_sudkivu_h")}</h2>
								<span className={`dropdown_arrow ${activeZone === 1 ? 'active' : ''}`}>
									<i className="fas fa-chevron-down"></i>
								</span>
							</div>
							<div className={`zone_dropdown_content ${activeZone === 1 ? 'active' : ''}`}>
								{zoneLocations[1].map((location, locationIndex) => (
									<div key={locationIndex} className="location_item">
										<div className="location_content">
											<div className="zone_image">
												<img src={location.image} alt={location.title} />
											</div>
											<div className="zone_textes">
												<div className="location_title">
													<h3>{location.title}</h3>
												</div>
												<p>{location.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Tshopo */}
						<div className="zone_boxes">
							<div
								className="zone_dropdown_header"
								onClick={() => toggleZone(2)}
							>
								<h2>{t("zone_texte_tchopo_h")}</h2>
								<span className={`dropdown_arrow ${activeZone === 2 ? 'active' : ''}`}>
									<i className="fas fa-chevron-down"></i>
								</span>
							</div>
							<div className={`zone_dropdown_content ${activeZone === 2 ? 'active' : ''}`}>
								{zoneLocations[2].map((location, locationIndex) => (
									<div key={locationIndex} className="location_item">
										<div className="location_content">
											<div className="zone_image">
												<img src={location.image} alt={location.title} />
											</div>
											<div className="zone_textes">
												<div className="location_title">
													<h3>{location.title}</h3>
												</div>
												<p>{location.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ZoneIntervention
