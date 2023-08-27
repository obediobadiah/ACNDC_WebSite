import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header/header'
import Footer from '../../../Footer/components/Footer'
import NewsLetter from '../../../NewsLetter/components/NewsLetter_Page'
import '../../styles/Rapport_Details_Style.css'
import repportAnnuel2020 from '../../assets/RAPPORT GENERAL DES ACTIVITES 2020.pdf'
import { useTranslation } from 'react-i18next'

function Rapports_detail() {

		const handleDownload = () => {
		  const link = document.createElement('a');
		  link.href = repportAnnuel2020;
		  link.download = 'ACNDC RAPPORT GENERAL 2020.pdf';
		  link.click();
		};

	const { t } = useTranslation();


	return (

		<div className="rapport_detail_container">
			<Header />
			<div className="rapport_detail_contents">
				<div className="rapport_detail_detatils">
					<div className="rapport_detail_Intro">
						<h1>{t("rapport_boxes_txt_h1_2020")}</h1>
					</div>
					<div className="rapport_detail_date">
						<h2>{t("rapport2020_detail_date")}</h2>
					</div>
				</div>



				<div className="rapport_detail_comp">
					<div className="rapport_detail_comp_txt">
						<p>{t("rapport2020_detail_comp_txt_p1")}

							<p>{t("rapport2020_detail_comp_txt_p2")}</p>

							<p>{t("rapport2020_detail_comp_txt_p3")}</p></p>
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