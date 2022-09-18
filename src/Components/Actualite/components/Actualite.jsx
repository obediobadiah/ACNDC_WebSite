import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import Act_Img1 from '../assets/IMG_20210412_094629_947.jpg'
import Act_Img2 from '../assets/IMG-20210701-WA0028.jpg'
import Act_Img3 from '../assets/DSC09950.JPG'
import Act_Img4 from '../assets/IMG_0829.JPG'
import Act_Img5 from '../assets/1660507234077.jfif'
import Act_Img6 from '../assets/DSC_8.jpg'
import Act_Img7 from '../assets/1663363038452.jfif'
import Act_Img8 from '../assets/IMG_7931.JPG'

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
								<img src={Act_Img6} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p>Actualités</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>Le renforcement des capacités</p>
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
								<img src={Act_Img7} alt="Actualite" />
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
								<img src={Act_Img8} alt="Actualite" />
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

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-luindi-acndc-activity-6958481785106128896-ob2g?utm_source=linkedin_share&utm_medium=android_app.">
										<button className="SavoirPlus">Savoir Plus<i class="fas fa-angle-right"></i></button>
									</a>
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

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-humanitaez-mujoga-activity-6964672146497253376-jX0Y?utm_source=linkedin_share&utm_medium=android_app">
										<button className="SavoirPlus">Savoir Plus<i class="fas fa-angle-right"></i></button>
									</a>

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

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-rutshuru-acndc-activity-6932538814934446080-NlmY?utm_source=linkedin_share&utm_medium=android_app">
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
									<p>Nord-Kivu : Nyiragongo</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>Après une année de notre travail avec les filles, jeunes femmes et femmes dans le territoire de nyiragongo, nous avons fait de ces femmes et filles des agents du changement au sein de la communauté.</p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_presentation-de-notre-experience-dans-les-activity-6935555072084824064-TEVX?utm_source=linkedin_share&utm_medium=android_app">
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
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Actualite
