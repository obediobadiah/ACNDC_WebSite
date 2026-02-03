import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function BenefitsOfGiving_Section() {

	const { t } = useTranslation();

	const benefits = [
		{
			title: t("programmes_security_title"),
			description: t("programmes_security_dev")
		},
		{
			title: t("programmes_conservation_title"),
			description: t("programmes_conservation_dev")
		},
		{
			title: t("programmes_gestion_title"),
			description: t("programmes_gestion_dev")
		},
		{
			title: t("programmes_droit_title"),
			description: t("programmes_droit_dev")
		}
	];

	return (
		<div className="benefits_container">
			<div className="benefits_content">
				<div className="benefits_details">
					<div className="benefits_left">
						<div className="benefits_subtitle">
							<p>{t("benefits_giving_subtitle")}</p>
						</div>
						<div className="benefits_title">
							<h2>{t("benefits_giving_title")}</h2>
						</div>
						<div className="benefits_description">
							<p>{t("benefits_giving_description")}</p>
						</div>
						<div className="benefits_button">
							<Link
								onClick={() => { window.location.href = "/Programmes" }}
								className="benefits_read_more"
							>
								{t("benefits_read_more")}
							</Link>
						</div>
					</div>

					<div className="benefits_right">
						<div className="benefits_grid">
							{benefits.map((benefit, index) => (
								<div key={index} className="benefit_card">
									<div className="benefit_number">{String(index + 1).padStart(2, '0')}</div>
									<div className="benefit_title_small">{benefit.title}</div>
									<div className="benefit_description_small">{benefit.description}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BenefitsOfGiving_Section
