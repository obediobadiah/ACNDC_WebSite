import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import zone_img1 from '../assets/DSC01999999.JPG'
import zone_img2 from '../assets/DSC09999.JPG'
import zone_img3 from '../assets/1622555756441.JPEG'

function ZoneIntervention() {
	return (
		<div className="zone_container">
			<Header />
			<div className="zone_contents">
				<div className="zone_detatils">
					<div className="zone_Intro">
						<h1>NOS ZONES D'INTERVENTION</h1>
					</div>
					<div className="zone_block">



						<div className="zone_boxes">
							<div className="zone_image">
								<img src={zone_img1} alt="zone Img" />
							</div>
							<div className="zone_textes">
								<h2>NORD-KIVU</h2>
								<p>Plaidoyer contre les conséquences des catastrophes naturelles et la juste gestion des aides
									humanitaires pour une stabilité économique des femmes post catastrophes naturelles aux alentours
									du volcan Nyiragongo à Goma.</p>
							</div>
						</div>




						<div className="zone_boxes">
							<div className="zone_textes" id="zone_text_inverse">
								<h2>SUD-KIVU</h2>
								<p>Depuis 2009 jusqu’aujourd’hui, ACNDC travaille dans le Territoire de Mwenga, Fizi et de Maniema
									auprès des filles et femmes autochtones Batwa Banyindu et tribaux forestiers de Balega et
									Babembe dans la sécurité frontière des femmes et la restauration de la paix, la justice climatique dans l’agriculture, l'egalité générationnelle des genres et sexes et plaidoyer contre les conséquences des catastrophes naturelles et la juste gestion des aides
									humanitaires pour une stabilité économique des filles et femmes post catastrophes naturelles de
									l’épicentre séismique à Kamituga.</p>
							</div>
							<div className="zone_image">
								<img src={zone_img2} alt="zone Img" />
							</div>
						</div>



						{/* <div className="zone_boxes">
							<div className="zone_image">
								<img src={zone_img1} alt="zone Img" />
							</div>
							<div className="zone_textes">
								<h2>MANIEMA</h2>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum unde dolorem qui debitis non autem excepturi illum? Fugiat provident ullam dolor sed eius, minima consequatur ut minus possimus dolores repellendus! ipsum dolor sit amet consectetur adipisicing elit. Rerum unde dolorem qui debitis non autem excepturi illum? Fugiat provident ullam dolor sed eius, minima consequatur ut minus possimus dolores repellendu</p>
							</div>
						</div> */}



						<div className="zone_boxes">
							<div className="zone_image">
								<img src={zone_img3} alt="zone Img" />
							</div>
							<div className="zone_textes">
								<h2>TSHOPO</h2>
								<p>Sensibilisation des filles et femmes autochtones Bakumu sur la conservation de la nature et la
									protection de la biodiversité et l’accroissement de l’autonomie des filles et femmes.</p>
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
