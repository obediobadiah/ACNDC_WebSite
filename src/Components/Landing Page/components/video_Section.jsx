import '../styles/style.css'
import Video_1 from '../assets/Video_1.mp4'
import Video_2 from '../assets/Video_2.mp4'
import Video_3 from '../assets/Video_3.mp4'
import Video_4 from '../assets/Video_4.mp4'
import { useTranslation } from 'react-i18next'
import 'antd/dist/antd.css';


function Actualite_Section() {

    const { t } = useTranslation();

    return (
        <div className="video_container">
            <div className="video_content">
                <div className="video_details">
                    <div className="video_header">
                        <h2> {t("home_video_header")} </h2>
                    </div>
                    <div className="home_video_slider_cards">
                        <video controls>
                            <source src={Video_1} type="video/mp4" />
                        </video>
                        <video controls>
                            <source src={Video_2} type="video/mp4" />
                        </video>
                        <video controls>
                            <source src={Video_3} type="video/mp4" />
                        </video>
                        <video controls>
                            <source src={Video_4} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Actualite_Section
