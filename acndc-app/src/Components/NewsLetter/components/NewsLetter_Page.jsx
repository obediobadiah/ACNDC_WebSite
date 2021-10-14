import React from 'react'
import {Link} from 'react-router-dom'
import  '../styles/style.css'

function NewsLetter_Page() {
	return (
		<div className="NewsLetter_container">
			<div className="NewsLetter_content">
				<div className="NewsLetter_details">
					<div className="Impact_text">
						<h1>IMPACT LE MONDE</h1>
						<div className="Donate_Button">
							<Link to="/" className="Donate_But">
								<button>Donation</button>
							</Link>
						</div>
					</div>
					<div className="NewsLetter_comp">
						<p>Connectez-vous pour plus d'information</p>
						<div className="NewLetter_Comp_Names">
							<input 
								type="text" placeholder="Nom*" className="Nom"
							/>
							<input 
								type="text" placeholder="PostNom*" className="PostNom"
							/>
						</div>
						<div className="mail_comp">
							<input 
								type="text" placeholder="Email*" className="Mail"
							/>
						</div>

						<div className="NewLetter_Comp_Button">
							<Link to="/" className="NewsLetter_comp_but">
								<button>Envoie</button>
							</Link>
						</div>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter_Page
