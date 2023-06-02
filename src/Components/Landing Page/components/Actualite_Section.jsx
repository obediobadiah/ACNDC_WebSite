import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/DSC_8.jpg'
import Act_Img2 from '../assets/1663363038452.jfif'
import Act_Img3 from '../assets/IMG_7931.JPG'
import { useTranslation } from 'react-i18next'

import 'antd/dist/antd.css';


function Actualite_Section() {

	const { t } = useTranslation();

	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<h2> {t("home_actuality_header")} </h2>
						<p> {t("home_actuality_desc")} </p>
					</div>
					<div className="Actualite_boxes">




						<div className="Actualite_box">
							<div className="Actualite_box_Img">
								<img src={Act_Img1} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_ctualite_box_text_head")} </p>
								</div>
								<div className="Actualite_box_text_tit">
									<p> {t("home_ctualite_box_text_tit_generational_gender")} </p>
								</div>
								<div className="Actualite_box_text_cont">
									<p> {t("home_actualite_box_text_cont_generational_gender")} </p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_participation-aezgalitaez-genre-activity-6969381908870770688-Q47b?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus"> {t("home_savoir_plus")} <i class="fas fa-angle-right"></i></button>
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
									<p>{t("home_ctualite_box_text_head")} </p>
								</div>
								<div className="Actualite_box_text_tit">
									<p> {t("home_ctualite_box_text_tit_ceremony_clot")} </p>
								</div>
								<div className="Actualite_box_text_cont">
									<p> {t("home_actualite_box_text_cont_ceremony_clot")} </p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/feed/update/urn:li:activity:6976650259171020800?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus">{t("home_savoir_plus")} <i class="fas fa-angle-right"></i></button>
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
									<p>{t("home_ctualite_box_text_head")} </p>
								</div>
								<div className="Actualite_box_text_tit">
									<p> {t("home_ctualite_box_text_tit_analyse_crise")} </p>
								</div>
								<div className="Actualite_box_text_cont">
									<p> {t("home_actualite_box_text_cont_analyse_crise")} </p>
								</div>
								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-organisation-communautaire-de-base-b11975211_education-activity-6977258715783548928-fOJE?utm_source=share&utm_medium=member_android">
										<button className="SavoirPlus">{t("home_savoir_plus")} <i class="fas fa-angle-right"></i></button>
									</a>

								</div>
							</div>
						</div>

					</div>
					<div className="Actualite_Button">
						<Link onClick={() => { window.location.href = "/Actualite" }} className="Act_Button">
							{t("home_actuality_button")}
						</Link>
					</div>
				</div>
			</div >
		</div >
	)
}

export default Actualite_Section
