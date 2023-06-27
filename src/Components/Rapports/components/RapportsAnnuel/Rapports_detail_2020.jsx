import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/components/Footer'
import NewsLetter from '../../../NewsLetter/components/NewsLetter_Page'
import '../../styles/Rapport_Details_Style.css'
import repportAnnuel2020 from '../../assets/RAPPORT GENERAL DES ACTIVITES 2020.pdf'

function Rapports_detail() {

		const handleDownload = () => {
		  const link = document.createElement('a');
		  link.href = repportAnnuel2020;
		  link.download = 'ACNDC RAPPORT GENERAL 2020.pdf';
		  link.click();
		};


	return (

		<div className="rapport_detail_container">
			<Header />
			<div className="rapport_detail_contents">
				<div className="rapport_detail_detatils">
					<div className="rapport_detail_Intro">
						<h1>Rapport Annuel 2020</h1>
					</div>
					<div className="rapport_detail_date">
						<h2>RAPPORT 2020</h2>
					</div>
				</div>



				<div className="rapport_detail_comp">
					<div className="rapport_detail_comp_txt">
						<p>Les femmes et filles autochtones sont pleines de courage et des potentiels pour la protection de l'environnement et la biodiversité à travers les communautés.

							Trouvez à travers ces quelques lignes le fonctionnement organique et programmatique d’ACNDC en faveur des femmes autochtones Batwa Banyindu et tribales forestières en territoire de Mwenga.

							<p>La mise en œuvre de ces activités a été rendue possible grâce aux subventions de Global Fund USA et d’AMEN RDC. Que toutes trouvent ici l’expression de notre expression de profonde gratitude.</p>

							<p>Cependant, nous nous adressons aux autres personnes de bonne volonté et institution charitable afin de nous venir en aide et/ou en partenariat afin de relever durablement les conditions de vie de ces peuples autochtones moins desservies et défavorisées dans les plans et programmes gouvernementaux et de leurs partenaires internationaux.</p></p>
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