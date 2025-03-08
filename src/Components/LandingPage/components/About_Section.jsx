import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css'
import AboutImg from '../assets/IMG-20210701-WA0042.jpg'
import { useTranslation } from 'react-i18next'

function About_Section() {

	const { t } = useTranslation();

	return (
		<div className="About_container">
			<div className="About_contents">
				<div className="About_details">
					<div className="About_Img">
						<img src={AboutImg} alt="About Img" />
					</div>
					<div className="About_Text">
						<div className="About_txt">
							<h2> {t("home_about_title")} </h2>
							<p> {t("home_about_content")} </p>
							{/* <Link
								to="/"
								onClick={() => {window.location.href="/VisionMission"}}
								className="AboutButton"
							>
								{t("home_about_contactus")}
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_Section
