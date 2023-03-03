import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css' 
import img1 from '../assets/IMG-20210701-WA0043.jpg'
import img2 from '../assets/IMG-20210701-WA00281.jpg'
import { useTranslation } from 'react-i18next'

function LandingIntro() {

	const { t, i18n } = useTranslation();

	return (
		<div className="Introduction_container">
			<div className="intro_contents">
				<div className="intro_details">
					<div className="intro_details_text">
						<div className="intro_text">
							<h1>{t("intro_text_title")}</h1>
							<p>{t("intro_text_par")}</p>
							<button 
							className="Intro_button"
							>
								<Link onClick={() => {window.location.href="/Objectifs"}} className='Intro_but'>EN SAVOIR PLUS</Link>
							</button>
						</div>
					</div>
					<div className="intro_images">
						<img 
							src={img1} 
							alt="introductions images"
							className="intro_img_1"
						/>
						<img 
							src={img2}
							alt="introductions images"
							className="intro_img_2"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingIntro
