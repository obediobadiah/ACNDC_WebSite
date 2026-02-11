import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import '../styles/ProgramDetail.css'
import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'

function ProgramDetail() {

	const { t } = useTranslation();
	const { programType } = useParams();

	// Program data configuration
	const programData = {
		security: {
			title: t("programmes_security_title"),
			description: t("programmes_security_dev"),
			fullDescription: t("program_security_full"),
			objectives: [
				t("security_objective_1"),
				t("security_objective_2"),
				t("security_objective_3"),
				t("security_objective_4")
			],
			activities: [
				t("security_activity_1"),
				t("security_activity_2"),
				t("security_activity_3"),
				t("security_activity_4")
			],
			achievements: [
				t("security_achievement_1"),
				t("security_achievement_2"),
				t("security_achievement_3"),
				t("security_achievement_4")
			],
			image: "security"
		},
		conservation: {
			title: t("programmes_conservation_title"),
			description: t("programmes_conservation_dev"),
			fullDescription: t("program_conservation_full"),
			objectives: [
				t("conservation_objective_1"),
				t("conservation_objective_2"),
				t("conservation_objective_3"),
				t("conservation_objective_4")
			],
			activities: [
				t("conservation_activity_1"),
				t("conservation_activity_2"),
				t("conservation_activity_3"),
				t("conservation_activity_4")
			],
			achievements: [
				t("conservation_achievement_1"),
				t("conservation_achievement_2"),
				t("conservation_achievement_3"),
				t("conservation_achievement_4")
			],
			image: "conservation"
		},
		gestion: {
			title: t("programmes_gestion_title"),
			description: t("programmes_gestion_dev"),
			fullDescription: t("program_gestion_full"),
			objectives: [
				t("gestion_objective_1"),
				t("gestion_objective_2"),
				t("gestion_objective_3"),
				t("gestion_objective_4")
			],
			activities: [
				t("gestion_activity_1"),
				t("gestion_activity_2"),
				t("gestion_activity_3"),
				t("gestion_activity_4")
			],
			achievements: [
				t("gestion_achievement_1"),
				t("gestion_achievement_2"),
				t("gestion_achievement_3"),
				t("gestion_achievement_4")
			],
			image: "gestion"
		},
		droit: {
			title: t("programmes_droit_title"),
			description: t("programmes_droit_dev"),
			fullDescription: t("program_droit_full"),
			objectives: [
				t("droit_objective_1"),
				t("droit_objective_2"),
				t("droit_objective_3"),
				t("droit_objective_4")
			],
			activities: [
				t("droit_activity_1"),
				t("droit_activity_2"),
				t("droit_activity_3"),
				t("droit_activity_4")
			],
			achievements: [
				t("droit_achievement_1"),
				t("droit_achievement_2"),
				t("droit_achievement_3"),
				t("droit_achievement_4")
			],
			image: "droit"
		},
		urgence: {
			title: t("programmes_urgence_title"),
			description: t("programmes_urgence_dev"),
			fullDescription: t("program_urgence_full"),
			objectives: [
				t("urgence_objective_1"),
				t("urgence_objective_2"),
				t("urgence_objective_3"),
				t("urgence_objective_4")
			],
			activities: [
				t("urgence_activity_1"),
				t("urgence_activity_2"),
				t("urgence_activity_3"),
				t("urgence_activity_4")
			],
			achievements: [
				t("urgence_achievement_1"),
				t("urgence_achievement_2"),
				t("urgence_achievement_3"),
				t("urgence_achievement_4")
			],
			image: "urgence"
		}
	};

	const program = programData[programType];

	if (!program) {
		return (
			<div className="program_detail_container">
				<Header />
				<div className="program_not_found">
					<h1>{t("program_not_found")}</h1>
					<p>{t("program_not_found_message")}</p>
					<Link to="/programmes" className="back_link">← {t("back_to_programs")}</Link>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="program_detail_container">
			<Header />
			<div className="program_detail_contents">
				<div className="program_detail_header">
					<div className="program_detail_hero">
						{/* <div className={`program_detail_icon ${program.image}`}></div> */}
						<h1>{program.title}</h1>
						<p className="program_intro">{program.description}</p>
					</div>
					<Link to="/programmes" className="back_link">← {t("back_to_programs")}</Link>
				</div>

				<div className="program_detail_sections">
					<section className="program_section">
						<h2>{t("program_overview")}</h2>
						<p>{program.fullDescription}</p>
					</section>

					<section className="program_section">
						<h2>{t("program_objectives")}</h2>
						<ul className="program_list">
							{program.objectives.map((objective, index) => (
								<li key={index}>{objective}</li>
							))}
						</ul>
					</section>

					<section className="program_section">
						<h2>{t("program_activities")}</h2>
						<ul className="program_list">
							{program.activities.map((activity, index) => (
								<li key={index}>{activity}</li>
							))}
						</ul>
					</section>

					<section className="program_section">
						<h2>{t("program_achievements")}</h2>
						<ul className="program_achievements">
							{program.achievements.map((achievement, index) => (
								<li key={index}>{achievement}</li>
							))}
						</ul>
					</section>

					<section className="program_section">
						<h2>{t("get_involved")}</h2>
						<p>{t("get_involved_description") || "Join us in making a difference. Your support helps us continue our vital work in protecting the environment and supporting local communities."}</p>
						<div className="program_cta">
							<Link to="/Contact" className="cta_button primary">{t("contact_us_now")}</Link>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProgramDetail
