import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import Video_1 from '../../LandingPage/assets/Video_1.mp4'
import Video_2 from '../../LandingPage/assets/Video_2.mp4'
import Video_3 from '../../LandingPage/assets/Video_3.mp4'
import Video_4 from '../../LandingPage/assets/Video_4.mp4'
import Video_5 from '../../LandingPage/assets/Video_5.mp4'
import Video_6 from '../../LandingPage/assets/Video_6.mp4'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'

function Testimony() {

	const { t } = useTranslation();

	const videos = [
		{ id: 1, src: Video_1 },
		{ id: 2, src: Video_2 },
		{ id: 3, src: Video_3 },
		{ id: 4, src: Video_4 },
		{ id: 5, src: Video_5 },
		{ id: 6, src: Video_6 }
	];

	return (
		<div className="testimony_container">
			<Header />
			<div className="testimony_contents">
				<div className="testimony_intro">
					<h1>{t("testimony_page_title")}</h1>
					<p>{t("testimony_page_description")}</p>
				</div>

				<div className="testimony_details">
					<div className="testimony_videos_grid">
						{videos.map((video) => (
							<div key={video.id} className="testimony_video_item">
								<video controls>
									<source src={video.src} type="video/mp4" />
									{t("testimony_video_not_supported")}
								</video>
							</div>
						))}
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Testimony
