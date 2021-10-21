import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'

function Objectifs() {
	return (
		<div className="Objectif_container">
			<Header />
			<div className="Objectif_contents">
				<div className="Objectif_detatils">
					<div className="Objectif_Intro">
						<h1>NOS OBJECTIFS</h1>
					</div>

					
					<div className="Objectif_textes_box">
						<div className="Objectif_textes">

							
							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>
								Entreprendre l’appropriation foncière et la jouissance du droit à la terre des femmes dans les nouvelles zones d’urbanisation (anciennes agglomérations villageoises érigées récemment en villes et communes rurales), d’industrialisation (localités hôtes des investissements directs étrangers des sociétés transnationales minières, agricoles, de pêche, de foresterie, d’hydraulique) et de protection intégrale de la biodiversité sauvage (parcs et réserves apparentées) ; 
								</p>
							</div>


							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>
								Introduire la gestion des ressources naturelles basées sur les communautés comme mode de gouvernance équilibrée entre la tradition (autorité coutumière) et la modernité (police étatique) de conservation, d’exploitation, d’appropriation et de financement de la consommation, de la commercialisation, de la production et de la protection durables ; 
								</p>
							</div>


							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>
								Améliorer les conditions économiques, du travail et des vies des femmes et des communautés locales dans et autour des paysages naturels (géophysiques).
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

export default Objectifs
