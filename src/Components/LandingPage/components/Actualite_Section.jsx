import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/DSC_8.jpg'
import Act_Img2 from '../assets/1663363038452.jfif'
import Act_Img3 from '../assets/IMG_7931.JPG'
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



						{data.slice(-4).map((item) => (

							<div className="Actualite_box">
								<div className="Actualite_box_Img">
									<img src={`data:image/jpeg;base64,${item.image}`} alt="Actualite" width="100" height="300" />
								</div>
								<div className="Actualite_box_text">
									<div className="Actualite_box_text_head">
										<p> {t("home_ctualite_box_text_head")}</p>
									</div>
									<div className="Actualite_box_text_tit">
										<p>{item.title}</p>
									</div>
									<div className="Actualite_box_text_cont">
										<p>{item.description}</p>
									</div>
									<div className="Actualite_box_text_but">

										<a href={item.link}>
											<button className="SavoirPlus">{t("home_savoir_plus")}<i class="fas fa-angle-right"></i></button>
										</a>

									</div>
								</div>
							</div>

						)).reverse()}


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
