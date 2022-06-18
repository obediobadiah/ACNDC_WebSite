import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA0042.jpg'
import Bailleur1Img from '../assets/images (2).png'
import Bailleur2Img from '../assets/lxoese.png'
import Bailleur3Img from '../assets/logo crispine.png'
import Reaseau1Img from '../assets/Engage.png'
import Reaseau2Img from '../assets/Voice.png'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'

function Partenaire() {
	return (
		<div className="Partenaire_container">
			<Header />
			<div className="Partenaire_contents">
				<div className="Partenaire_detatils">
					<div className="Partenaire_Intro">
						<div className="Intro_text">
							<div className="Partenaire_Quote">
								<h1>NOS PARTENAIRES</h1>
								<img src={IntroImg} alt="Intro Img" />
							</div>
						</div>
					</div>

					<div className="Partenaire_Comp">
						<div className="Partenaire_Exp">
							<h1>BAILLEURS DES FONDS</h1>
							<p>ACNDC travaille dans l’intermédiation monétaire et financière en conservation de la nature et le développement communautaire. Ainsi, ACNDC assure le sponsorship financier et fiscal dans la coopération au développement et la charité (philanthropie, générosité, bienfaisance, compassion et caritative) manifestée aux organisations et communautés anonymes et non enregistrées légalement.</p>
							<div className="Partenaire_Exp_Img">
								<div><img src={Bailleur1Img} alt="" /></div>
								<div><img src={Bailleur2Img} alt="" /></div>
								<div>
									<img src={Bailleur3Img} alt="" />
									<h2>Alternatives Menages,<br/> Nature et <br/>Marché,  AMEN</h2>
								</div>
							</div>
						</div>


						<div className="Partenaire_Exp">
							<h1>RESEAU, ALLIANCE ET MOUVEMENT</h1>
							<p>ACNDC intégrera le réseau, alliance et mouvement internationaux à des fins de visibilité, de notoriété, de crédibilité et de solidarité mutuellement avantageux. Elle coordonnera les groupes communautaires et leurs structurations sectorielles, territoriales et populaires.</p>
							<div className="Partenaire_Exp_Img">
								<div><img src={Reaseau1Img} alt="" /></div>
								<div>
									<img src={Reaseau2Img} alt="" />
									<h2>Nos voix comptent</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="NewsLetter_Comp">
				<NewsLetter className="News" />
			</div>
			<Footer />
		</div>
	)
}

export default Partenaire
