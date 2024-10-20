import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import { useParams } from "react-router-dom";
import '../styles/style.css'
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'


function ActualiteDetails() {
    const { slug } = useParams()
    const { t } = useTranslation();

    const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

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
		<div className="Act_details_container">
			<Header />
			<div className="Act_details_contents">
				<div className="Act_details_detatils">
					<div className="Act_details_Intro">
						<h1>Actualite Details</h1>
					</div>
				</div>


				<div className="Act_details_comp">
					<div className="Act_details_comp_exp">
        
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ActualiteDetails
