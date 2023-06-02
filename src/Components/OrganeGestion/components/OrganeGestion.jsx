import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import ConseilSection from './Conseil_Section'
import CoordinationSection from './Coordination_Section'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA0030.jpg'
import { useTranslation } from 'react-i18next'

function OrganeGestion() {

	const { t } = useTranslation();

	return (
		<div className="OrganeGestion_container">
			<Header />
			<div className="OrganeGestion_contents">
				<div className="OrganeGestion_detatils">
					<div className="OrganeGestion_Intro_title">
						<h1>{t("organe_intro_title")}</h1>
					</div>
					<div className="OrganeGestion_Intro_img">
						<img src={IntroImg} alt="IntroImg" />
					</div>
				</div>

				<div className="OrganeGestion_exp">
					<div className="OrganeGestion_exp_Intro">
						<p>{t("organe_conseil_intro")}</p>
						<p>{t("organe_coord_intro")}</p>
					</div>

					<div className="OrganeGestion_exp_Buttons">
						<Link
							activeClass="active"
							to="OrganeGestion_Conseil"
							spy={true}
							smooth={true}
							offset={0}
							duration={800}
							className="button_1"
						>
						{t("organe_conseil_intro_title")}	
						</Link>
						<Link
							activeClass="active"
							to="OrganeGestion_Coord"
							spy={true}
							smooth={true}
							offset={0}
							duration={800}
							className="button_2"
						>
						{t("organe_coord_intro_title")}	
						</Link>
					</div>

					<ConseilSection />
					<CoordinationSection />
					<NewsLetter />

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default OrganeGestion
