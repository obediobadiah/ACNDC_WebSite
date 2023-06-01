import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import zone_img1 from '../assets/IMG_5806.JPG'
import zone_img2 from '../assets/DSC00005.JPG'
import zone_img3 from '../assets/IMG_20220313_153838_601.jpg'
import { useTranslation } from 'react-i18next'

function ZoneIntervention() {

	const { t } = useTranslation();

	return (
		<div className="zone_container">
			<Header />
			<div className="zone_contents">
				<div className="zone_detatils">
					<div className="zone_Intro">
						<h1>{t("zone_intro_title")}</h1>
					</div>
					<div className="zone_block">



						<div className="zone_boxes">
							<div className="zone_image">
								<img src={zone_img1} alt="zone Img" />
							</div>
							<div className="zone_textes">
								<h2>{t("zone_texte_nordkivu_h")}</h2>
								<p>{t("zone_texte_nordkivu_P")}</p>
							</div>
						</div>




						<div className="zone_boxes">
							<div className="zone_textes" id="zone_text_inverse">
								<h2>{t("zone_texte_sudkivu_h")}</h2>
								<p>{t("zone_texte_sudkivu_P")}</p>
							</div>
							<div className="zone_image">
								<img src={zone_img2} alt="zone Img" />
							</div>
						</div>


						<div className="zone_boxes">
							<div className="zone_image">
								<img src={zone_img3} alt="zone Img" />
							</div>
							<div className="zone_textes">
								<h2>{t("zone_texte_tchopo_h")}</h2>
								<p>{t("zone_texte_tchopo_P")}</p>
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


					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ZoneIntervention
