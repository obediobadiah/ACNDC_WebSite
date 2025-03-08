import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img11 from '../assets/1671217015713.jpg'
import Act_Img12 from '../assets/IMG-20230124-WA0011.jpg'
import Act_Img13 from '../assets/DSC_9479.jpg'
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect } from "react";

import 'antd/dist/antd.css';


function Actualite_Section() {


	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const { t } = useTranslation();

	// Fetch all data
	const fetchData = () => {
		fetch('https://acndc-backend.vercel.app/api/get-actuality/')
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setFilteredData(data);
			})
			.catch((error) => console.error('Error getting data: ', error));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<h2> {t("home_actuality_header")} </h2>
						<p> {t("home_actuality_desc")} </p>
					</div>
					<div className="Actualite_boxes">



						{data.slice(-8).map((item) => (

							<div className="Actualite_box" style={{ backgroundImage: `linear-gradient(rgba(186, 171, 0, 0.5), rgba(186, 171, 0, 0.5)), url(data:image/jpeg;base64,${item.image}`, }}>
								{/* <div className="Actualite_box_Img">
									<img src={`data:image/jpeg;base64,${item.image}`} alt="Actualite" width="100" height="300" />
								</div> */}
								<div className="Actualite_box_text">
									{/* <div className="Actualite_box_text_head">
										<p> {t("home_actualite_box_text_head")}</p>
									</div> */}
									<div className="Actualite_box_text_tit">
										<p>{item.title}</p>
									</div>
									<div className="Actualite_box_text_cont">
										<p>{item.description}</p>
									</div>
									<a href={`/Actualite/${item.slug}`}>
										<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
									</a>
								</div>
							</div>

						)).reverse()}



						{/* <div className="Actualite_box" style={{backgroundImage: `linear-gradient(rgba(186, 171, 0, 0.5), rgba(186, 171, 0, 0.5)), url(${Act_Img11})`,}}>
							<div className="Actualite_box_text">
								<div className="Actualite_box_text_tit">
									<p>{t("home_actuality_box_text_tit_journee_education")}</p>
								</div>
								<div className="Actualite_box_text_cont">
									<p>{t("home_actuality_box_text_cont_journee_education")}</p>
								</div>

								<a href="https://web.facebook.com/100068401316248/posts/487973723492667/?flite=scwspnss&_rdc=1&_rdr">
									<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
								</a>

							</div>
						</div> */}



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
