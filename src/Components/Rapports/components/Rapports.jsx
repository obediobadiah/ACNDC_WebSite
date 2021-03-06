import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import RapportImg from '../assets/IMG-20210701-WA0056.jpg'

function Rapports() {
	return (
		<div className="rapport_container">
			<Header />
			<div className="rapport_contents">
				<div className="rapport_detatils">
					<div className="rapport_Intro">
						<h1>NOS RAPPORTS</h1>
					</div>
				</div>

				<div className="rapport_comp">
					<div className="rapport_boxes">




						
						<div className="rapport_box">
							<div className="rapport_img">
								<img src={RapportImg} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapports_detail" className="rapport_texte_link">
										<h2>Rapport Annuel 2018</h2>
									</Link>
									<p>Janvier 2018</p>
								</div>
							</div>
						</div>





						<div className="rapport_box">
							<div className="rapport_img">
								<img src={RapportImg} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapports_detail" className="rapport_texte_link">
										<h2>Rapport Annuel 2018</h2>
									</Link>
									<p>Janvier 2018</p>
								</div>
							</div>
						</div>





						<div className="rapport_box">
							<div className="rapport_img">
								<img src={RapportImg} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapports_detail" className="rapport_texte_link">
										<h2>Rapport Annuel 2018</h2>
									</Link>
									<p>Janvier 2018</p>
								</div>
							</div>
						</div>





						<div className="rapport_box">
							<div className="rapport_img">
								<img src={RapportImg} alt="" />
							</div>
							<div className="rapport_txt">
								<div className="rapport_texte">
									<Link to="/Rapports_detail" className="rapport_texte_link">
										<h2>Rapport Annuel 2018</h2>
									</Link>
									<p>Janvier 2018</p>
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
