import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import Conseil_Section from './Conseil_Section'
import Coordination_Section from './Coordination_Section'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA0030.jpg'

function OrganeGestion() {
	return (
		<div className="OrganeGestion_container">
			<Header />
			<div className="OrganeGestion_contents">
				<div className="OrganeGestion_detatils">
					<div className="OrganeGestion_Intro_title">
						<h1>ORGANE DE GESTION</h1>
					</div>
					<div className="OrganeGestion_Intro_img">
						<img src={IntroImg} alt="IntroImg" />
					</div>
				</div>

				<div className="OrganeGestion_exp">
					<div className="OrganeGestion_exp_Intro">
						<p>CONSEIL D’ADMINISTRATION ET LEADERS. ACNDC dispose un conseil d’administration de 9 personnes aujourd’hui désignées par leurs communautés d’appartenance (famille, clan, tribu) parmi lesquelles se retrouve 6 personnes constituent son leadership permanent/quotidien.</p>
						<p>COORDINATION ET STAFF. Les professionnels d’ACNDC proviennent de la science, de l’intelligence et de la technique d’une part et de la culture, de l’initiation et de la pratique d’autre part.</p>
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
							Conseil d'Administration et Leader
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
							Coordination et Staff
						</Link>
					</div>

					<Conseil_Section />
					<Coordination_Section />
					<NewsLetter />

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default OrganeGestion
