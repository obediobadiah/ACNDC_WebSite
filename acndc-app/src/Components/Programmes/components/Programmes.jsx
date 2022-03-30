import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'

function Programmes() {
	return (
		<div className="programmes_container">
			<Header />
			<div className="programmes_contents">
				<div className="programmes_detatils">
					<div className="programmes_Intro">
						<h1>NOS PROGRAMMES</h1>
					</div>
					<div className="programmes_boxes">
						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box1">
									<h2>SECURITE FONCIERE ET AMENAGEMENT DES TERRES ET DES RESSOURCES NATURELLES</h2>
								</div>
							</div>
							<div className="programmes_box_txt">
								<p>ACNDC fonde son action sur l’appropriation communautaire des ressources naturelles (sol, sous-sol, eaux, air) et leurs matières connexes (terres, le relief, les minerais, les gaz, les substances chimiques, les pierres et sables, l’eau, la faune et la flore aquatiques, le climat, l’atmosphère) par première occupation, par usage et par acquisition, en harmonie avec la légalité étatique. A partir de cette appropriation, ACNDC accompagne un processus de mise en valeur par des aménagements, la construction des infrastructures et la conduite des travaux agricoles, de pêche et pisciculture, des foresteries, hydrauliques, énergétiques, culturelles, touristiques, d’habitat, de conservation de la nature et de développement rural et urbains durables.</p>
							</div>
						</div>


						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box2">
									<h2>CONSERVATION DE LA NATURE, SAUVEGARDE ENVIRONNEMENTALE ET PROTECTION DE LA BIODIVERSITE. </h2>
								</div>
							</div>
							<div className="programmes_box_txt">
								<p>ACNDC dispose une pensée pieuse aux générations présentes et futures. L’histoire de la RDC indique la surexploitation de la faune, de la flore et des minerais en cette période des crises politiques et civiles entre 1990-2020. C’est pourquoi, il sied de protéger certaines étendues territoriales et leurs ressources naturelles à des fins d’exploitation future. Aussi, l’agenda de consécration de 17% de la surface territoriale à la conservation intégrale s’inscrit dans cette vision. Les aires protégées et les forêts des communautés sont autant des formes de conservation de la nature, de protection de la biodiversité et des finances verts (crédit carbone, éco-tourisme, énergie propre, culture et arts).  </p>
							</div>
						</div>
					</div>


					<div className="programmes_boxes">
						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box3">
									<h2>DEVELOPPEMENT HUMAIN DURABLE</h2>
								</div>
							</div>
							<div className="programmes_box_txt">
								<p>ACNDC souscrit aux objectifs de développement durable (ODD) de Nations unies adoptés en 2015 en succession aux objectifs de développement du millénaire (ODM).  A cet effet, ACNDC assure le développement alimentaire, la santé, l’enseignement, l’entreprenariat communautaire, l’habitat et l’urbanisme en paysage forestier tropical humide etc.
									Actuellement, ACNDC conduit la riposte contre la maladie à Corona Virus (COVID-19) dans la zone de santé de Mwenga en faveur de plus de 15000 personnes (enfants, jeunes, adultes, personnes âgées et motards et leurs passagers sur la route nationale 2).
								</p>
							</div>
						</div>


						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box4">
									<h2>DROIT, CITOYENNETTE ET Gouvernance</h2>
								</div>
							</div>
							<div className="programmes_box_txt">
								<p>ACNDC à travers des ponts qu’établissent les filles et femmes en leur qualité d’unificatrices communautaires, de premières éducatrices et agents de santé et de régulatrices de balance économique et politique.
									Les femmes demeurent la majorité de la population mondiale et les plus grandes travailleuses des ressources naturelles et de leur économie verte.
									ACNDC par ces actions veut faire parvenir (élever) les femmes à la profession (emploi, entrepreneuriat et libéralisme) de la science et de la technique, de la technologie, de l’organisation urbaine et rurale à égalité, en autonomie et en prenant en compte la différence corporelle (saxophysique) dans un ménage et dans une société stable, dans une économie libérale ayant des marchés transparents et dans une écologie durable et un environnement sain.
									Dans ce programme ACNDC s’inscrit autour de la participation de la femme dans la jouissance de ses droits, dans la participation citoyenne dans la gestion de la chose publique mais plus encore faire l’intégrations de la bonne gouvernance politique, des ressources naturelles accès sur la fille et la femme en RDC.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Programmes
