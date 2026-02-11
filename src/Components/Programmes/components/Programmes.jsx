import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Programmes() {

	const { t } = useTranslation();

	return (
		<div className="programmes_container">
			<Header />
			<div className="programmes_contents">
				<div className="programmes_detatils">
					<div className="programmes_Intro">
						<h1>{t("programmes_intro_title")}</h1>
					</div>
					<div className="programmes_boxes">
						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box1"></div>
							</div>
							<div className="programmes_box_txt">
								<h2>{t("programmes_security_title")}</h2>
								<p>{t("programmes_security_dev")}</p>
								<Link to="/programmes/security" className="read_more_btn">
									{t("read_more")} →
								</Link>
							</div>
						</div>


						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box2"></div>
							</div>
							<div className="programmes_box_txt">
								<h2>{t("programmes_conservation_title")}</h2>
								<p>{t("programmes_conservation_dev")}</p>
								<Link to="/programmes/conservation" className="read_more_btn">
									{t("read_more")} →
								</Link>
							</div>
						</div>
						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box3"></div>
							</div>
							<div className="programmes_box_txt">
								<h2>{t("programmes_gestion_title")}</h2>
								<p>{t("programmes_gestion_dev")}</p>
								<Link to="/programmes/gestion" className="read_more_btn">
									{t("read_more")} →
								</Link>
							</div>
						</div>


						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box4"></div>
							</div>
							<div className="programmes_box_txt">
								<h2>{t("programmes_droit_title")}</h2>
								<p>{t("programmes_droit_dev")}</p>
								<Link to="/programmes/droit" className="read_more_btn">
									{t("read_more")} →
								</Link>
							</div>
						</div>

						<div className="programmes_box">
							<div className="programmes_box_header">
								<div className="programmes_box_title" id="box5"></div>
							</div>
							<div className="programmes_box_txt">
								<h2>{t("programmes_urgence_title")}</h2>
								<p>{t("programmes_urgence_dev")}</p>
								<Link to="/programmes/urgence" className="read_more_btn">
									{t("read_more")} →
								</Link>
							</div>
						</div>


					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Programmes
