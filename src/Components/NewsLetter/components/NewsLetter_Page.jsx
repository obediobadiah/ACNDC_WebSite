import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {Link} from 'react-router-dom'
import  '../styles/style.css'


function NewsLetter_Page() {

	const form = useRef();
  
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_457ej39', 'template_xjm1vwm', form.current, 'FntAhCQczwVNGpAMH')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

	return (
		<div className="NewsLetter_container">
			<div className="NewsLetter_content">
				<div className="NewsLetter_details">
					<div className="Impact_text">
						<h1>IMPACTEZ LE MONDE</h1>
						<div className="Donate_Button">
							<Link onClick={() => {window.location.href="/Contact"}} className="Donate_But">
								<button>Donation</button>
							</Link>
						</div>
					</div>
					<div className="NewsLetter_comp">
						<p>Connectez-vous pour plus d'information</p>
						<form ref={form} onSubmit={sendEmail}>
							<div className="NewLetter_Comp_Names">
								<input 
									type="text" placeholder="Nom*" className="Nom" name="from_name" id="from_name"
								/>
								<input 
									type="text" placeholder="Email*" className="PostNom" name="from_email" id="from_email"
								/>
							</div>
							<div className="mail_comp">
								<textarea 
									type="text" placeholder="Text*" className="Mail" name="message" id="message"
								/>
							</div>
							<div className="NewLetter_Comp_Button">
								<button type="submit" className="NewsLetter_comp_but" value="Send">Envoie</button>
							</div>
						</form>	
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter_Page
