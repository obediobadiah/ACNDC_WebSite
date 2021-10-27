import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'

function OutilsTravail() {
	return (
		<div className="outilsTravail_container">
			<Header />
			<div className="outilsTravail_contents">
				<div className="outilsTravail_detatils">
					<div className="outilsTravail_Intro">
						<h1>NOS OUTILS DE TRAVAIL</h1>
					</div>
				</div>

				<div className="outilsTravail_comp">
					<div className="outilsTravail_boxes">


						
						<div className="outilsTravail_box">
							<h2>CANEVAS RAPPORTS</h2>
							<i class="far fa-file-pdf" />
							<div className="view_class">
								<Link
									to="/"
									className="view_button">
										Aperçu
								</Link>
							</div>
						</div>



						<div className="outilsTravail_box">
							<h2>ORDRES DE MISSIONS</h2>
							<i class="far fa-file-pdf" />
							<div className="view_class">
								<Link
									to="/"
									className="view_button">
										Aperçu
								</Link>
							</div>
						</div>



						<div className="outilsTravail_box">
							<h2>RECOMMANDATIONS</h2>
							<i class="far fa-file-pdf" />
							<div className="view_class">
								<Link
									to="/"
									className="view_button">
										Aperçu
								</Link>
							</div>
						</div>
					
					{/* <i class="fas fa-file-pdf"></i> */}
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default OutilsTravail
