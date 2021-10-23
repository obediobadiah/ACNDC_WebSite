import React from 'react'
// import { Link } from 'react-router-dom'
import {Link} from 'react-scroll'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
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
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium sunt maxime tempore? Earum recusandae eaque at placeat aut voluptatibus quaerat, voluptates omnis, doloremque cum harum esse? Voluptate, modi reiciendis.</p>
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

				</div>
			</div>
			<Footer />
		</div>
	)
}

export default OrganeGestion
