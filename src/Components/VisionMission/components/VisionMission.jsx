import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function VisionMission() {

	const { t } = useTranslation();

	return (
		<div className="VisionMission_container">
			<Header />
			<div className="VisionMission_contents">
				<div className="VisionMission_detatils">
					<div className="VisionMission_Intro">
						<h1>{t("vision_intro_title")}</h1>
					</div>

					<div className="VisionMission_textes_box">
						<div className="VisionMission_textes">


							<h1>{t("vision_vision_head")}</h1>
							<p>{t("vision_vision_cont")}</p>


							<h1>{t("vision_mission_head")}</h1>
							<p>{t("vision_mission_cont")}</p>


							<h1>{t("vision_history_head")}</h1>
							<p>{t("vision_history_cont_1")}</p>
							{/* <p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles, celles coutumières et traditionnelles, des autorités locales et autres faiseurs d’opinions de proximité territoriale, sectorielle et populaire. A ce titre, elle fonctionne sur base de la légitimité communautaire et populaire.  C’est organisation féminine œuvrant pour la défense des droits des femmes autochtones, les femmes marginalisées et des groupes des personnes Marginalisées en RDC.
							</p> */}
							<p>{t("vision_history_cont_2")}</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default VisionMission
