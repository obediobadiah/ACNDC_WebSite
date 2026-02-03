import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css'
import AboutImg from '../assets/IMG-20210701-WA0042.jpg'
import { useTranslation } from 'react-i18next'

function About_Section() {

	const { t } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex(prev => (prev - 1 + 1) % 1);
	};

	const handleNext = () => {
		setCurrentIndex(prev => (prev + 1) % 1);
	};

	return (
		<div className="about_video_container">
			<div className="about_video_content">
				<div className="about_video_left">
					<div className="about_video_img">
						<img src={AboutImg} alt="About Video" />
					</div>
				</div>

				<div className="about_video_right">
					<div className="about_video_label">
						<p>{t("home_about_title")}</p>
					</div>
					<div className="about_video_title">
						<h2>{t("home_about_title")}</h2>
					</div>
					<div className="about_video_description">
						<p>{t("home_about_content")}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_Section
