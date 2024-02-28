import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import Rapport2022Img from '../assets/DSC_8.jpg'
import Rapport2021Img from '../assets/IMG-20210701-WA0061.jpg'
import Rapport2020Img from '../assets/3152dacf-2e19-467d-8c1e-fe7ad279ba3d.JPG'
import { useTranslation } from 'react-i18next'


function Rapports() {

	const { t } = useTranslation();

	return (
		<div className="rapport_container">
			<Header />
			<div className="rapport_contents">
				<div className="rapport_detatils">
					<div className="rapport_Intro">
						<h1>{t("rapport_Intro")}</h1>
					</div>
				</div>

				<div className="rapport_comp">
					<div className="rapport_boxes">






						<div className="rapport_box">
							<div className="rapport_img">
								<img src={Rapport2022Img} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapport_detail_2022" className="rapport_texte_link">
										<h2>{t("rapport_boxes_txt_h1_2022")}</h2>
									</Link>
									<p>{t("rapport_boxes_txt_p_2022")}</p>
								</div>
							</div>
						</div>





						<div className="rapport_box">
							<div className="rapport_img">
								<img src={Rapport2021Img} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapport_detail_2021" className="rapport_texte_link">
										<h2>{t("rapport_boxes_txt_h1_2021")}</h2>
									</Link>
									<p>{t("rapport_boxes_txt_p_2021")}</p>
								</div>
							</div>
						</div>





						<div className="rapport_box">
							<div className="rapport_img">
								<img src={Rapport2020Img} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapport_Detail_2020" className="rapport_texte_link">
										<h2>{t("rapport_boxes_txt_h1_2020")}</h2>
									</Link>
									<p>{t("rapport_boxes_txt_p_2020")}</p>
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

export default Rapports
