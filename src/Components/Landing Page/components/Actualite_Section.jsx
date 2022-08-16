import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/IMG_0829.JPG'
import Act_Img2 from '../assets/1660507234077.jfif'
import Act_Img3 from '../assets/DSC09950.JPG'

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
									<p>Le renforcement des capacités</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Dans le cadre du projet Renforcement du système alimentaire les peuples autochtones batwa banyindu et peuples forestiers balega et babembe, ACNDC et son partenaire AMEN ont renforcé la capacité des femmes autochtones Nyindu dans la connaissance de leurs milieux et ses pontentiels. Projet fiancé par fonds #AYNI</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-luindi-acndc-activity-6958481785106128896-ob2g?utm_source=linkedin_share&utm_medium=android_app.">
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
									<p>La journée internationale des peuples autochtones</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Dans le cadre de la journée internationale des peuples autochtones. ACNDC et son partenaire Humanité ont présenté à la communauté Kuma, le service d'accompagnement juridique, qu'elles organisent tout en mettant l'accès sur leurs dans la protection de l'environnement et l'accès aux ressources aux femmes et filles.</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-humanitaez-mujoga-activity-6964672146497253376-jX0Y?utm_source=linkedin_share&utm_medium=android_app">
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
									<p>La justice climatique veut que les fille et les jeunes femmes et les femmes participent dans lutte climatique.</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>La lutte contre le changement climatique au niveau individuel et local est plus forte. ACNDC en sa qualité de OCB, est engagée depuis plus de trois aux cotés des filles et des femmes autochtones dans le Territoire de Mwenga dans la lutte contre le changement climatique.</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-ocb-mwenga-activity-6924094904323170304-ocRl?utm_source=linkedin_share&utm_medium=android_app">
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
