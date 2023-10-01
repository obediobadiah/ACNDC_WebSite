import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img11 from '../assets/1671217015713.jpg'
import Act_Img12 from '../assets/IMG-20230124-WA0011.jpg'
import Act_Img13 from '../assets/DSC_9479.jpg'
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
								<img src={Act_Img13} alt="Actualite" />
							</div>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_head">
									<p> {t("home_actualite_box_text_head")}</p>
								</div>
								<div className="Actualite_box_text_tit">
									<p>{t("home_actuality_box_text_tit_journee_education")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("home_actuality_box_text_cont_journee_education")}</p>
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
									<p>{t("home_actuality_box_text_tit_conference_mixte")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("actuality_box_text_cont_conference_mixte")}</p>
									<ul>
									<li>{t("home_actuality_box_text_cont_conference_mixte_l1")}</li>
									<li>{t("home_actuality_box_text_cont_conference_mixte_l2")}</li>
									<li>{t("home_actuality_box_text_cont_conference_mixte_l3")}</li>
									<li>{t("home_actuality_box_text_cont_conference_mixte_l4")}</li>
								</ul>
									<p>{t("home_actuality_box_text_cont_conference_mixte_p")}</p>
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
									<p>{t("home_actuality_box_text_tit_formation_resilience")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("home_actuality_box_text_cont_formation_resilience")}</p>
									<p>{t("home_actuality_box_text_cont_formation_resilience_p")}</p>
								</div>

							</div>

								<div className="Actualite_box_text_but">

									<a href="https://www.linkedin.com/posts/acndc-asbl-organisation-f%C3%A9minine-de-base_solidaritehumaine-activity-7024683423172562944--2cN?utm_source=share&utm_medium=member_android ">
										<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
									</a>

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
