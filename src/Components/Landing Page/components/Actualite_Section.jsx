import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/DSC_8.jpg'
import Act_Img2 from '../assets/1663363038452.jfif'
import Act_Img3 from '../assets/IMG_7931.JPG'

import 'antd/dist/antd.css';


function Actualite_Section() {


	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<h2>Nos dernières Actualité</h2>
						<p>Decouvrez ce que ACNDC et Nos partenaires bénéficiare ont fait</p>
					</div>
					<div className="Actualite_boxes">




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img1} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p>Actualités</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>Egalité générationnelle et de genre dans la création d'emplois et amélioration des moyens des subsistances</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Expéditions terrestres des filles dans le territoire de Mwenga dans le cadre du Projet
										inclus de l'égalité générationnelle et de genre dans la création d'emplois et amélioration des moyens des subsistances des peuples autochtones Batwa banyindu et peuples tribaux forestiers lega et bembe.
										<br/><strong>Projet financé par @XOESE</strong></p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_participation-aezgalitaez-genre-activity-6969381908870770688-Q47b?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus">Savoir Plus<i class="fas fa-angle-right"></i></button>
									</a>

								</div>
							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img2} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p>Actualités</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>Cérémonie de la clôture de la formation sur la fabrication des foyers améliorés</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Clôture de la formation sur la fabrication des foyers améliorés des femmes à Mugunga.
										Cette formation était d'une durée de 3mois dont 20 femmes ont été bénéficiaires.
										A la fin de cette formation a été sanctionnée par une remise des foyers améliorés.</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/feed/update/urn:li:activity:6976650259171020800?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus">Savoir Plus<i class="fas fa-angle-right"></i></button>
									</a>

								</div>
							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img3} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p>Actualités</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>Analyse sur la crise des échecs aux examens d'Etat édition 2022</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>ACNDC présente l'Analyse de sa commission des générations futures, de préparation professionnelle et communautaire de la croissance vocationelle économique territoriale dans le cadre de son programme crise et protection.</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_education-activity-6977258715783548928-fOJE?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus">Savoir Plus<i class="fas fa-angle-right"></i></button>
									</a>

								</div>
							</div>
						</div>

					</div>
					<div className="Actualite_Button">
						<Link onClick={() => { window.location.href = "/Actualite" }} className="Act_Button">
							Voir plus d'article
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Actualite_Section
