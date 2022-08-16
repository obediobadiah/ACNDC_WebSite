import React, { useState } from 'react';
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import Act_Img1 from '../assets/IMG_20210412_094629_947.jpg'
import Act_Img2 from '../assets/IMG-20210701-WA0028.jpg'
import Act_Img3 from '../assets/DSC09950.JPG'
import Act_Img4 from '../assets/1660507234077.jfif'
import Act_Img5 from '../assets/DSC09950.JPG'

function Actualite() {

	return (
		<div className="Actualite_container">
			<Header />
			<div className="Actualite_contents">
				<div className="Actualite_detatils">
					<div className="Actualite_Intro">
						<h1>NOS ACTUALITES</h1>
					</div>
				</div>


				<div className="Actualite_comp">
					<div className="Actualite_comp_exp">
						<div className="Actualite_header">
							<h2>Nos dernières Actualité</h2>
							<p>Decouvrez ce que ACNDC et Nos partenaires bénéficiare ont fait</p>
						</div>
						<div className="Actualite_boxes">



						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img4} alt="Actualite" />
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
									<button className="SavoirPlus">
										<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-luindi-acndc-activity-6958481785106128896-ob2g?utm_source=linkedin_share&utm_medium=android_app.">Savoir Plus<i class="fas fa-angle-right"></i>
										</a>
									</button>
								</div>
							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img5} alt="Actualite" />
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
									<button className="SavoirPlus">
										<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-humanitaez-mujoga-activity-6964672146497253376-jX0Y?utm_source=linkedin_share&utm_medium=android_app">Savoir Plus<i class="fas fa-angle-right"></i>
										</a>
									</button>
								</div>
							</div>
						</div>







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
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Actualite
