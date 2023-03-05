import React from 'react'
import  '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Slogan_Section() {

	const { t } = useTranslation();

	return (
		<div className="Slogan_container">
			<div className="Slogan_content">
				<h1> {t("slogan_content_title")} </h1>
			</div>
		</div>
	)
}

export default Slogan_Section
