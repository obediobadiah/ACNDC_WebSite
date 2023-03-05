import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css'
import VisionImg from '../assets/Vision.png'
import MissionImg from '../assets/Mission.png'
import ObjectifImg from '../assets/Objectf.png'
import { useTranslation } from 'react-i18next'

function VisionMission_Section() {

	const { t } = useTranslation();

	return (
		<div className="Vision_container">
			<div className="Vision_content">
				<div className="Vision_Boxes">
					<div className="Vision_Box" id="Vision">
						
						<div className="Vision_Img">
							<img 
								src={VisionImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>VISION</p>
						</div>
						<div className="Vision_detail">
							<p>ACNDC devienne une alliance des groupes communautaire de base et ceux de la société civile actifs et agissant ensemble pour une conservation de la nature pourvoyeuse du développement durable en faveur des générations présentes et futures des femmes et des filles en particulier et des hommes par une juste exploitation, échange et utilisation des ressources naturelles et aboutissant à des visibilités aux étalages des marchés et dans les assiettes des ménages tant ruraux qu'urbains.</p>
						</div>
						<div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							Savoir Plus
							</Link>
						</div>					
					</div>


					<div className="Vision_Box" id="Mission">
						
						<div className="Vision_Img">
							<img 
								src={MissionImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>MISSION</p>
						</div>
						<div className="Vision_detail">
							<p>Il est d’encadrer l’autonomisation économique, socioculturelle et environnementale des filles et femmes.</p>
						</div>
						<div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							Savoir Plus
							</Link>
						</div>					
					</div>


					<div className="Vision_Box" id="Objectif">
						<div className="Vision_Img">
							<img 
								src={ObjectifImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>OBJECTIF</p>
						</div>
						<div className="Vision_detail">
							<p>Améliorer les conditions économiques du travail des femmes base sur les droits et le leadership des jeunes filles et des femmes, Entreprendre l’appropriation foncière et la jouissance du droit à la terre des femmes dans les nouvelles zones d’urbanisation et Introduire la gestion des ressources naturelles basées sur les communautés.</p>
						</div>
						<div className="Vision_link">
							<Link
								onClick={() => {window.location.href="/VisionMission"}}
								className="VisionMission_Link"
							>
								Savoir Plus
							</Link>
						</div>					
					</div>


				</div>
			</div>
		</div>
	)
}

export default VisionMission_Section