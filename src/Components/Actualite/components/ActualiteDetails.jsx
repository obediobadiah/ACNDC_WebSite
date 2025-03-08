import Header from '../../Header/header';
import Footer from '../../Footer/components/Footer';
import { useParams } from "react-router-dom";
import '../styles/style.css';
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { CircularProgress } from "@mui/material";

function ActualiteDetails() {
    const { slug } = useParams();
    const { t } = useTranslation();
    const [actuality, setActuality] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchActualityData = () => {
        fetch('https://acndc-backend.vercel.app/api/get-actuality')
            .then((response) => response.json())
            .then((data) => {
                const foundActuality = data.find((item) => item.slug === slug);
                setActuality(foundActuality || null);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchActualityData();
    }, [slug]);

    return (
        <div className="Act_details_container">
            <Header />
            <div className="Act_details_contents">

                {loading ? (
                    <div className="loading-message">
                        <CircularProgress
                            x={{ color: "warning" }}
                            thickness={5}
                            size={100}
                            className='circular_bar mx-2'
                        />
                    </div>  // Loading message
                ) : actuality ? (
                    <>
                        <div className="Act_details_details">
                            <div className="Act_details_Intro" style={{ backgroundImage: `linear-gradient(rgba(0, 104, 57, 0.83), rgba(0, 104, 57, 0.83)), url(data:image/jpeg;base64,${actuality.image}`, }}>
                                <div className="Act_details_Intro_Text">
                                    <h1>{actuality.title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="Act_details_comp">
                            <div className="Act_details_comp_exp">
                                <div dangerouslySetInnerHTML={{ __html: actuality.content }} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Actualité not found!</div>
                )}
            </div>


            <div className="act_follow">
                <div className="act_follow_Intro">
                    <h2>{t("plan_follow_Intro")}</h2>
                    <h1>{t("plan_follow_follow")}</h1>

                    <div className="plan_links">
                        <div className="plan_link_icons">
                            <a href="https://web.facebook.com/acndc.org" className="plan_link_icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/ACNDC_ASBL?t=jwMpjWhuT4ScZgeAIa8juA&s=08" className="plan_link_icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="https://www.linkedin.com/company/acndc-asbl-organisation-f%C3%A9minine-de-base/" className="plan_link_icon">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="https://instagram.com/acndc_asbl?igshid=MzNlNGNkZWQ4Mg==" className="plan_link_icon">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default ActualiteDetails;
