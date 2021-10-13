import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css'
import AboutImg from '../assets/IMG-20210701-WA0042.jpg'

function About_Section() {
	return (
		<div className="About_container">
			<div className="About_contents">
				<div className="About_details">
					<div className="About_Img">
						<img src={AboutImg} alt="About Img" />
					</div>
					<div className="About_Text">
						<div className="About_txt">
							<h2>A propos d'ACNDC</h2>
							<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles, celles coutumières et traditionnelles, des autorités locales et autres faiseurs d’opinions de proximité territoriale, sectorielle et populaire. A ce titre, elle fonctionne sur base de la légitimité communautaire et populaire.  <br/>C’est organisation féminine œuvrant pour la défense des droits des femmes autochtones, les femmes marginalisées et des groupes des personnes Marginalisées en RDC.</p>
						</div>
						<div className="About_Button">
							<Link
								to="/"
								className="AboutButton"
							>
								Contactez-Nous
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About_Section
