import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/components/Footer'
import NewsLetter from '../../../NewsLetter/components/NewsLetter_Page'
import '../../styles/Rapport_Details_Style.css'
import repportAnnuel2020 from '../../assets/RAPPORT GENERAL ANNUEL DES ACTIVITES 2022.pdf'
import { useTranslation } from 'react-i18next'

function Rapports_detail() {

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = repportAnnuel2020;
		link.download = 'ACNDC RAPPORT GENERAL ANNUEL 2022.pdf';
		link.click();
	};

	const { t } = useTranslation();


	return (

		<div className="rapport_detail_container">
			<Header />
			<div className="rapport_detail_contents">
				<div className="rapport_detail_detatils">
					<div className="rapport_detail_Intro">
						<h1>{t("rapport_boxes_txt_h1_2022")}</h1>
					</div>
					<div className="rapport_detail_date">
						<h2>{t("rapport2022_detail_date")}</h2>
					</div>
				</div>



				<div className="rapport_detail_comp">
					<div className="rapport_detail_comp_txt">
						<p>{t("rapport2022_detail_comp_txt_p1")}<p></p>

							<p>{t("rapport2022_detail_comp_txt_p2")}</p>

							<div className='acndc_programme_2022'>
								<strong>{t("rapport2022_detail_acndc_programme_2022_title")}</strong>
								<ul>
									<li>{t("rapport2022_detail_acndc_programme_2022_li2")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li3")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li3")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li4")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li5")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li6")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li7")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li8")}</li>
									<li>{t("rapport2022_detail_acndc_programme_2022_li9")}</li>
								</ul>
							</div>

							<p>{t("rapport2022_detail_comp_txt_p3")}</p>

							<p>{t("rapport2022_detail_comp_txt_p4")}</p>

						</p>
					</div>
					<div className="download_button">
						<button
							onClick={handleDownload}
							className="download_link">
							{t("rapport_download_button")}
							<i class="fas fa-download" />
						</button>
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Rapports_detail