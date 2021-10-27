import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/Rapport_Details_Style.css'

function Rapports_detail() {
	return (

			<div className="rapport_detail_container">
				<Header />
				<div className="rapport_detail_contents">
					<div className="rapport_detail_detatils">
						<div className="rapport_detail_Intro">
							<h1>Rapport Annuel 2020</h1>
						</div>
						<div className="rapport_detail_date">
							<h2>January 2020</h2>
						</div>
					</div>



					<div className="rapport_detail_comp">
						<div className="rapport_detail_comp_txt">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed architecto modi amet beatae quas expedita minus nostrum suscipit, magnam aliquid laborum unde impedit quasi labore aut dignissimos. Eos, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat harum magni eaque reprehenderit soluta vitae velit ipsum nesciunt. Impedit minima est, iste illo sit natus repellendus? Enim, quisquam sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ipsa esse commodi eum odit? Reiciendis asperiores rerum nulla molestiae voluptatem, odit distinctio doloremque iste quasi pariatur quam, adipisci quaerat?</p><br/>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed architecto modi amet beatae quas expedita minus nostrum suscipit, magnam aliquid laborum unde impedit quasi labore aut dignissimos. Eos, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat harum magni eaque reprehenderit soluta vitae velit ipsum nesciunt. Impedit minima est, iste illo sit natus repellendus? Enim, quisquam sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ipsa esse commodi eum odit? Reiciendis asperiores rerum nulla molestiae voluptatem, odit distinctio doloremque iste quasi pariatur quam, adipisci quaerat?</p><br/>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed architecto modi amet beatae quas expedita minus nostrum suscipit, magnam aliquid laborum unde impedit quasi labore aut dignissimos. Eos, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat harum magni eaque reprehenderit soluta vitae velit ipsum nesciunt. Impedit minima est, iste illo sit natus repellendus? Enim, quisquam sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ipsa esse commodi eum odit? Reiciendis asperiores rerum nulla molestiae voluptatem, odit distinctio doloremque iste quasi pariatur quam, adipisci quaerat?</p>
						</div>
						<div className="download_button">
							<Link 
								to="/"
								className="download_link">
								Télécharger
								<i class="fas fa-download" />
							</Link>
						</div>
					</div>
				</div>
				<NewsLetter />
				<Footer />
			</div>
	)
}

export default Rapports_detail