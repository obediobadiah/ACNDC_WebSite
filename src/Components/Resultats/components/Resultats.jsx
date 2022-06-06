import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA00631.png'
import QuoteImg from '../assets/IMG-20210701-WA0029.jpg'

function Resultats() {
	return (
		<div className="Resultats_container">
			<Header />
			<div className="Resultats_contents">
				<div className="Resultats_detatils">
					<div className="Resultats_Intro">
						<div className="Intro_text">
							<h1>NOS RESULTATS</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus repellendus dignissimos libero officiis explicabo odio optio error et possimus! Repudiandae qui minima quo.</p>
						</div>
						<img src={IntroImg} alt="" />
					</div>

					<div className="Resultats_Boxes">
						<div className="Resultats_Box">
							<div className="Resulats_Header">
								<h2>Justice climatique dans l’agriculture (2019-2021).</h2>
							</div>
							<div className="Resulats_body">
								<p>Il s’agit de l’inclusion du genre (22% à 44% des femmes), de l’accroissement de la production du riz de 3333%, de manioc de 400% et de haricot de 1333%, la prise de conscience et de décisions primo, sur la sauvegarde/préservation des montagnes forestières (conservation des sites climatiques) pour la pluviosité par la condensation d’eaux et le maintien de la température et de la chaleur atmosphérique et par la séquestration des carbones, secundo, sur l’atténuation du changement climatique par l’installation des technologies de détection météorologique (pluviomètre, thermomètre, girouette)  et l’adoption et la pratique de l’agriculture résiliente au changement climatique telle que l’agroforesterie, la culture des couvertures et le paillage, la bonne association et rotation des cultures, l’ombrage et la culture en serre sur terre ferme et dans les bas fond (marais et vallée) etc.</p>
							</div>
						</div>
						
						
						<div className="Resultats_Box">
							<div className="Resulats_Header">
								<h2>Egalité générationnelle des genres et sexes (Beijing+25) 2021.</h2>
							</div>
							<div className="Resulats_body">
								<p>Il concerne le renforcement des leaderships, de la responsabilité et de la satisfaction des catégories humaines discriminées et marginalisées que sont les jeunes (adolescentes et femmes) et les vieillards (personnes âgées) et quelque peu les enfants. L’accent est mis sur l’éducation technique et professionnelle, l’entrepreneuriat libéral et la défense des droits et libertés fondamentales</p>
							</div>
						</div>
						
						
						
						<div className="Resultats_Box">
							<div className="Resulats_Header">
								<h2>Sécurité frontière des femmes et la restauration de la paix dans le Territoire de Mwenga ( Kasika) 2014-2015</h2>
							</div>
							<div className="Resulats_body">
								<p>Il concerne la participation des femmes dans la gestion de l’environnement qui devrait se passer par l’accès à la Terre. 1108 individus ont bénéficié de ce projet indirectement dont 5 introduit leurs demandes pour avoir des contrats des terrains et 200 personnes informes sur la gestion des terres, plus 500 lors de 10 ateliers des restitutions dans les comites.</p>
							</div>
						</div>


					</div>

					<div className="Resultats_Quote">
						<img src={QuoteImg} alt="Quote Img" />
						<h1>"LA VOCATION N'EST QUE LE RESULTAT DE LA PRATIQUE"</h1>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Resultats
