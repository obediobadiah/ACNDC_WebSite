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
							<p>{t("home_vision_title")}</p>
						</div>
						<div className="Vision_detail">
							<p>{t("home_vision_content")}</p>
						</div>
						<div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							{t("home_savoir_plus")}
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
							<p>{t("home_mission_title")}</p>
						</div>
						<div className="Vision_detail">
							<p> {t("home_mission_content")} </p>
						</div>
						<div className="Vision_link">
							<Link onClick={() => {window.location.href="/VisionMission"}} className="VisionMission_Link">
							{t("home_savoir_plus")}
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
							<p>{t("home_object_title")}</p>
						</div>
						<div className="Vision_detail">
							<p> {t("home_object_content")} </p>
						</div>
						<div className="Vision_link">
							<Link
								onClick={() => {window.location.href="/VisionMission"}}
								className="VisionMission_Link"
							>
								{t("home_savoir_plus")}
							</Link>
						</div>					
					</div>


				</div>
			</div>
		</div>
	)
}

export default VisionMission_Section