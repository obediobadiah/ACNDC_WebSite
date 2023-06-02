import { Link } from 'react-router-dom'
import '../styles/style.css'
import Act_Img1 from '../assets/DSC_8.jpg'
import { useTranslation } from 'react-i18next'
import { Carousel } from '3d-react-carousal';

import 'antd/dist/antd.css';


function Actualite_Section() {

	const { t } = useTranslation();

	let slides = [
		<img src={Act_Img1} alt="1" />,
		<img src={Act_Img1} alt="1" />,
		<img src={Act_Img1} alt="1" />,
	];

	return (
		<div className="video_container">
			<div className="video_content">
				<div className="video_details">
					<div className="video_header">
						<h2> {t("home_video_header")} </h2>
					</div>
                    <div className='carousel_section'>
					<Carousel slides={slides} autoplay={true} interval={5000} />
				</div>
				</div>
			</div >
		</div >
	)
}

export default Actualite_Section
