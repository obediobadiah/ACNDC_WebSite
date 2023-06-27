import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/components/Footer'
import NewsLetter from '../../../NewsLetter/components/NewsLetter_Page'
import '../../styles/Rapport_Details_Style.css'
import repportAnnuel2020 from '../../assets/RAPPORT GENERAL ANNUEL DES ACTIVITES 2021.pdf'

function Rapports_detail() {

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = repportAnnuel2020;
		link.download = 'ACNDC RAPPORT GENERAL ANNUEL 2021.pdf';
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
						<h2>RAPPORT 2021</h2>
					</div>
				</div>



				<div className="rapport_detail_comp">
					<div className="rapport_detail_comp_txt">
						<p>Voici en ces quelques lignes les réalisations annuelles de 2021. Celles-ci indiquent le niveau opérationnel atteint. Il s’agit du civisme et de la défense des droits des femmes au développement durable.

							La dégradation de l' environnement du fait de l’exploitation des ressources naturelles s’enfonce à des états inquiétants. L’agriculture, la foresterie, l’artisanat minier et la transhumance d’élevage sont des fléaux quotidiens.

							<p>Devant cela, ACNDC s’est inscrite dans une démarche progressiste de résilience (adaptation, atténuation et mitigation) adaptée à leurs situations spécifiques (réversible ou irréversible).</p>

							<p>A ces treizième années, ACNDC fait entendre et fait voir ses réalisations à divers niveaux territoriaux. Ces accomplissements ne seraient effectifs sans les subventions de divers partenaires internationaux sur place (directs) et lointains. Ce sont Global Fund for Women USA et UK, AMEN/urgent Action Fund for Africa et autres. Qu’il trouve ici notre expression de nos sentiments de profonde gratitude.</p></p>
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