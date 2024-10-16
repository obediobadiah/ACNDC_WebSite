import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import plan2022Img from '../assets/DSC_8.jpg'
import plan2021Img from '../assets/IMG-20210701-WA0061.jpg'
import plan2020Img from '../assets/3152dacf-2e19-467d-8c1e-fe7ad279ba3d.JPG'
import { useTranslation } from 'react-i18next'
import report2022Pdf from '../assets/Plan Kalehe - Securite climatique et prevention des catastrophes naturelles.pdf'


function Plans() {

	const { t } = useTranslation();

	const viewPDF = (pdfUrl) => {
		window.open(pdfUrl, '_blank');
	  };

	return (
		<div className="plan_container">
			<Header />
			<div className="plan_contents">
				<div className="plan_detatils">
					<div className="plan_Intro">
						<h1>{t("plans_Intro")}</h1>
					</div>
				</div>
				
				
				<div className="plan_comp">
					<div className="plan_boxes">





						<div className="plan_box">
							<div className="plan_img">
								<img src={plan2021Img} alt="" />
							</div>
							<div className="plan_txt">
								<div className="plan_texte">
									<h2 className="plan_texte_link">{t("plans_annuel_title_2022")}</h2>
									<p>{t("plans_annuel_desc_2022")}</p>
								</div>
								<div className="plan_button">
									<button onClick={() => viewPDF(report2022Pdf)}>{t("plans_view_button")}</button>
								</div>

							</div>
						</div>



					</div>
				</div>

				<div className="plan_follow">
					<div className="plan_follow_Intro">
						<h2>{t("plan_follow_Intro")}</h2>
						<h1>{t("plan_follow_follow")}</h1>

						<div className="plan_links">
							<div className="plan_link_icons">
								<a href="https://web.facebook.com/acndc.org" className="plan_link_icon">
									<i class="fab fa-facebook-f"></i>
								</a>
								<a href="https://x.com/ACNDC_ASBL?t=jwMpjWhuT4ScZgeAIa8juA&s=08" className="plan_link_icon">
									<i className="fab fa-twitter"/>
								</a>
								<a href="https://www.linkedin.com/company/acndc-asbl-organisation-f%C3%A9minine-de-base/" className="plan_link_icon">
									<i className="fab fa-linkedin"/>
								</a>
								<a href="https://instagram.com/acndc_asbl?igshid=MzNlNGNkZWQ4Mg==" className="plan_link_icon">
									<i className="fab fa-instagram"/>
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

export default Plans
