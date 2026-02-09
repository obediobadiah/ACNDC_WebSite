import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import { useTranslation } from 'react-i18next';
import API_BASE_URL from '../../../config/api'
import Swal from 'sweetalert2'

function NewsLetter_Page() {

  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = async (e) => {
	e.preventDefault();
  
	const formData = {
	  from_name: form.current.from_name.value,
	  from_email: form.current.from_email.value,
	  message: form.current.message.value
	};
  
	try {
	  // Save to newsletter database first
	  const newsletterResponse = await fetch(`${API_BASE_URL}/newsletter-subscribers`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  email: formData.from_email,
		  name: formData.from_name,
		  message: formData.message
		}),
	  });

	  if (!newsletterResponse.ok) {
		const errorData = await newsletterResponse.json();
		if (errorData.error === 'Email already subscribed') {
		  // Email already exists, continue with email sending
		  console.log('Email already subscribed, continuing with email sending');
		} else {
		  throw new Error(errorData.error || 'Failed to save to newsletter');
		}
	  }

	  // Send email using existing endpoint
	  const response = await fetch(`${API_BASE_URL}/send-email`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	  });
  
	  if (response.ok) {
		Swal.fire({
		  title: 'Success!',
		  text: 'Your message has been sent and you have been subscribed to our newsletter!',
		  icon: 'success',
		  confirmButtonColor: '#28a745',
		  confirmButtonText: 'Great!'
		});
		form.current.reset();
	  } else {
		throw new Error('Failed to send email');
	  }
	} catch (err) {
	  console.error('Error:', err);
	  Swal.fire({
		title: 'Error!',
		text: err.message || 'There was an error sending your message. Please try again.',
		icon: 'error',
		confirmButtonColor: '#dc3545',
		confirmButtonText: 'Try Again'
	  });
	}
  };
  

  return (
    <div className="NewsLetter_container">
      <div className="NewsLetter_content">
        <div className="NewsLetter_details">
          <div className="Impact_text">
            <h1> {t("newsletter_title")} </h1>
            <div className="Donate_Button">
              <Link onClick={() => { window.location.href = "/Contact" }} className="Donate_But">
                <button> {t("donate_button")} </button>
              </Link>
            </div>
          </div>
          <div className="NewsLetter_comp">
            <p> {t("newsletter_comp_title")} </p>
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
                <button type="submit" className="NewsLetter_comp_but" value="Send"> {t("newsletter_comp_comp_cutton")} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter_Page;
