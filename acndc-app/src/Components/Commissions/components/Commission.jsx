import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'

function Commission() {
	return (
		<div className="commision_container">
			<Header />
			<div className="commissions_contents">
				<div className="commissionss_detatils">
					<div className="commissions_Intro">
						<h1>NOS COMMISSIONS</h1>
					</div>

						<div className="commissions_textes">
							<p>Nos commissions ont la charge d’accomplir de faire des évaluations et des études sur les questions liées aux programmes de ACNDC, pour l’accomplissement de notre mission, nous avons quatre commissions.</p>

							<h1>La commission de la conservation de la nature, de la préservation de la culture et du patrimoine ancestral.</h1>

							<h1>La commission du développement communautaire, de la sauvegarde de l’environnement et des écosystèmes paysagers.</h1>

							<h1>La commission de la masculinité positive et de l’activité féminines dans les secteurs socioéconomiques à dominance des hommes patriarches, époux et garçons.</h1>

							<h1>La commission des générations futures, de la préparation professionnelle communautaire et de la croissance vocationnelle économique territoriale.</h1>
							
							<h1>La commission de la coopération internationale, du commerce extérieur et de la promotion linguistique mondiale.</h1>
						</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Commission
