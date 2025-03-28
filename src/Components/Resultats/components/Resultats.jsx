import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA00631.png'
import QuoteImg from '../assets/IMG-20210701-WA0029.jpg'
import { useTranslation } from 'react-i18next'

function Resultats() {

	const { t } = useTranslation();

	return (
		<div className="Resultats_container">
			<Header />
			<div className="Resultats_contents">
				<div className="Resultats_detatils">
					<div className="Resultats_Intro">
						<div className="Intro_text">
							<h1>{t("resultat_intro_title")}</h1>
						</div>
						{/* <img src={IntroImg} alt="" /> */}
					</div>

					<div className="Resultats_Boxes">
						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_justice_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_justice_p")}</p>
							</div>
						</div>

						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_egalite_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_egalite_p")}</p>
							</div>
						</div>

						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_securite_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_securite_p")}</p>
							</div>
						</div>

						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_croissance_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_croissance_p1")}</p>
								<p>{t("resultat_croissance_p2")}</p>
								<p>{t("resultat_croissance_p3")}</p>
							</div>
						</div>

						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_gouvernance_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_gouvernance_p")}</p>
							</div>
						</div>

						<div className="Resultats_Box">
							<div className="Resulats_Title">
								<h2>{t("resultat_crise_h")}</h2>
							</div>
							<div className="Resulats_Description">
								<p>{t("resultat_crise_p1")}</p>
								<p>{t("resultat_crise_p2")}</p>
								<p>{t("resultat_crise_p3")}</p>
								<p>{t("resultat_crise_p4")}</p>
								<p>{t("resultat_crise_p5")}</p>
							</div>
						</div>
					</div>

					<div className="Resultats_Quote">
						<img src={QuoteImg} alt="Quote Img" />
						<h1>{t("resultat_quote_h")}</h1>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Resultats
