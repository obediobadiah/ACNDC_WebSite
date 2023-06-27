import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/components/Footer'
import NewsLetter from '../../../NewsLetter/components/NewsLetter_Page'
import '../../styles/Rapport_Details_Style.css'
import repportAnnuel2020 from '../../assets/RAPPORT GENERAL ANNUEL DES ACTIVITES 2022.pdf'

function Rapports_detail() {

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = repportAnnuel2020;
		link.download = 'ACNDC RAPPORT GENERAL ANNUEL 2022.pdf';
		link.click();
	};


	return (

		<div className="rapport_detail_container">
			<Header />
			<div className="rapport_detail_contents">
				<div className="rapport_detail_detatils">
					<div className="rapport_detail_Intro">
						<h1>Rapport Annuel 2022</h1>
					</div>
					<div className="rapport_detail_date">
						<h2>RAPPORT 2022</h2>
					</div>
				</div>



				<div className="rapport_detail_comp">
					<div className="rapport_detail_comp_txt">
						<p><p>Nous sommes toujours auprès de la communauté féminine en République Démocratique du Congo et nous croyons aux compétences féminines et l'émergence d'une société égalitaire et dont les valeurs féministes sont prises en comptes dans les actions des développements.</p>

							<p>l'an 2022 a été une année d’affirmation institutionnelle d’ACNDC en qualité d’une organisation de leadership et de la technicité féminins. Le décor de son organisation a été implanté à travers l’adoption de son organigramme. Il ne reste qu’à introduire les niveaux de supervision et de suivi provincial, territorial ou les deux.</p>

							<div className='acndc_programme_2022'>
								<strong>Aussi, en 2022 a enregistré la mise en œuvre de tous les programmes stratégiques d’ACNDC. Ces programmes sont sans être exhaustifs les suivants :</strong>
								<ul>
									<li>La restauration et la conservation des paysages climatiques ;</li>
									<li>L’entrepreneuriat agricole et la résilience climatique;</li>
									<li>L’influence et la défense des droits des femmes et de leurs communautés ;</li>
									<li>L’organisation et la construction des mouvements ;</li>
									<li>L’égalité générationnelle ;</li>
									<li>La prévention et la gestion des crises environnementales et sociales ;</li>
									<li>L’administration des ressources;</li>
									<li>La programmation continue;</li>
									<li> La coordination, la représentation hiérarchique et la délégation locale.</li>
								</ul>
							</div>

							<p>Il ne reste qu’a évolué vers le fonctionnement et l’investissement généraux et intégrateurs ou incluant toutes ses opérations. Des approches thématiques de gestion des ressources naturelles sont également en initiation, expérimentation et innovation. Leurs avancées ouvriront la voie à leur intensification.

							Des soutiens et des solidarités financiers, techniques et institutionnels sont attendus pour cette fin par ACNDC.

							Que tous ceux qui peuvent lui apporter un appui général trouvent ici son expression de profonde gratitude la plus anticipée.</p>

							<p>Concernant ses membres et ses populations bénéficiaires, ACNDC les invitent à plus d’ardeur dans la campagne financière « Acheter les biens et services offerts, c’est financer son développement endogène, ABSO-FDE ». Cette campagne devrait consolider l’autonomie et la participation financière locale, organisationnelle et/ou communautaire et populaire, aux fonctionnements et aux investissements environnementaux et sociaux.</p>

						</p>
					</div>
					<div className="download_button">
						<button
							onClick={handleDownload}
							className="download_link">
							Télécharger
							<i class="fas fa-download" />
						</button>
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Rapports_detail