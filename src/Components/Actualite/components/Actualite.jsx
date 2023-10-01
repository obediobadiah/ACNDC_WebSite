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
import Act_Img9 from '../assets/PXL_20221217_112901021.MP.jpg'
import Act_Img10 from '../assets/IMG-20221126-WA0025.jpg'
import Act_Img11 from '../assets/1671217015713.jpg'
import Act_Img12 from '../assets/IMG-20230124-WA0011.jpg'
import Act_Img13 from '../assets/DSC_9479.jpg'
import { useTranslation } from 'react-i18next'

function Actualite() {

	const { t } = useTranslation();

	return (
		<div className="Actualite_container">
			<Header />
			<div className="Actualite_contents">
				<div className="Actualite_detatils">
					<div className="Actualite_Intro">
						<h1>{t("actuality_intro_title")}</h1>
					</div>
				</div>


				<div className="Actualite_comp">
					<div className="Actualite_comp_exp">
						<div className="Actualite_header">
							<h2>{t("actuality_header")}</h2>
							<p>{t("actuality_header_desc")}</p>
						</div>
						<div className="Actualite_boxes">






						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img13} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_journee_education")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_journee_education")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://web.facebook.com/100068401316248/posts/487973723492667/?flite=scwspnss&_rdc=1&_rdr">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>







						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img12} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_conference_mixte")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_conference_mixte")}</p>
									<ul>
									<li>{t("actuality_box_text_cont_conference_mixte_l1")}</li>
									<li>{t("actuality_box_text_cont_conference_mixte_l2")}</li>
									<li>{t("actuality_box_text_cont_conference_mixte_l3")}</li>
									<li>{t("actuality_box_text_cont_conference_mixte_l4")}</li>
								</ul>
									<p>{t("actuality_box_text_cont_conference_mixte_p")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-asbl-organisation-f%C3%A9minine-de-base_solidaritehumaine-activity-7024683423172562944--2cN?utm_source=share&utm_medium=member_android ">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>










						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img11} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_formation_resilience")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_formation_resilience")}</p>
									<p>{t("actuality_box_text_cont_formation_resilience_p")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-asbl-organisation-f%C3%A9minine-de-base_solidaritehumaine-activity-7024683423172562944--2cN?utm_source=share&utm_medium=member_android ">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>








						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img10} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_solidarite_humaine")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_solidarite_humaine")}</p>
								</div>
							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-asbl-organisation-f%C3%A9minine-de-base_solidaritehumaine-activity-7024683423172562944--2cN?utm_source=share&utm_medium=member_android ">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>








						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img9} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_alerte_femme")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_alerte_femme")}</p>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.facebook.com/100068401316248/posts/pfbid0waDcoXiEAN8jkrN1noNmNcz7c8j4XFHu2vYhMH6i875hbpm2ixpPXAgnmHb7wq3Cl/?app=fbl">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img6} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_egalité")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_egalité")}
										<br/><strong>{t("actuality_box_text_cont_egalité_fin")}</strong></p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_participation-aezgalitaez-genre-activity-6969381908870770688-Q47b?utm_source=share&utm_medium=member_android">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img7} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_ceremonie")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_ceremonie")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/feed/update/urn:li:activity:6976650259171020800?utm_source=share&utm_medium=member_android">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img8} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_analyse")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_analyse")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_education-activity-6977258715783548928-fOJE?utm_source=share&utm_medium=member_android">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>



						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img4} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_renforcement")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_renforcement")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-luindi-acndc-activity-6958481785106128896-ob2g?utm_source=linkedin_share&utm_medium=android_app.">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>
							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img5} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_international")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_international")}</p>
								</div>

							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-humanitaez-mujoga-activity-6964672146497253376-jX0Y?utm_source=linkedin_share&utm_medium=android_app">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img1} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_engagement")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_engagement")}</p>
								</div>

							</div>

							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-rutshuru-acndc-activity-6932538814934446080-NlmY?utm_source=linkedin_share&utm_medium=android_app">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img2} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_nyira")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_nyira")}</p>
								</div>

							</div>

							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_presentation-de-notre-experience-dans-les-activity-6935555072084824064-TEVX?utm_source=linkedin_share&utm_medium=android_app">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div>




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img3} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("actuality_box_text_tit_climatique")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_climatique")}</p>
								</div>
							</div>
							<div className="Actualite_box_text_but">

								<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_acndc-ocb-mwenga-activity-6924094904323170304-ocRl?utm_source=linkedin_share&utm_medium=android_app">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

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
