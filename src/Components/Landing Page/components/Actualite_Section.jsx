import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/IMG_20210412_094629_947.jpg'
import Act_Img2 from '../assets/IMG-20210701-WA0028.jpg'
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
									<p>ACNDC, l'engagement à l'action des filles et jeunes femmes est notre travail.</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>A Rutshuru les files et jeunes femmes de Kisisile sont engagées au sein de la communauté pour apporter un plus pour la protection de l'environnement et la défense déjà droits des femmes.</p>
								</div>
								<div className="Actualite_box_text_but">
									<button className="SavoirPlus">
										<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-rutshuru-acndc-activity-6932538814934446080-NlmY?utm_source=linkedin_share&utm_medium=android_app">Savoir Plus<i class="fas fa-angle-right"></i>
										</a>
									</button>
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
									<p>Nord-Kivu : Nyiragongo</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Après une année de notre travail avec les filles, jeunes femmes et femmes dans le territoire de nyiragongo, nous avons fait de ces femmes et filles des agents du changement au sein de la communauté.</p>
								</div>
								<div className="Actualite_box_text_but">
									<button className="SavoirPlus">
										<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_presentation-de-notre-experience-dans-les-activity-6935555072084824064-TEVX?utm_source=linkedin_share&utm_medium=android_app">Savoir Plus<i class="fas fa-angle-right"></i>
										</a>
									</button>
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
									<button className="SavoirPlus">
										<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-ocb-mwenga-activity-6924094904323170304-ocRl?utm_source=linkedin_share&utm_medium=android_app">Savoir Plus<i class="fas fa-angle-right"></i>
										</a>
									</button>
								</div>
							</div>
						</div>

					</div>
					<div className="Actualite_Button">
						<Link onClick={() => {window.location.href="/Actualite"}} className="Act_Button">
							Voir plus d'article
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Actualite_Section
