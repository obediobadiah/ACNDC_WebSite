import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import img1 from '../assets/IMG-20210701-WA0043.jpg';
import img2 from '../assets/IMG-20210701-WA00281.jpg';
import img3 from '../assets/IMG-20210701-WA0032.jpg';
import { useTranslation } from 'react-i18next';

function LandingIntro() {
  const { t } = useTranslation();

  const slides = [
    { id: 'slide_section1',title: t('intro_text_title_slide_1'), text: t('intro_text_par_slide_1') },
    { id: 'slide_section2',title: t('intro_text_title_slide_2'), text: t('intro_text_par_slide_2') },
    { id: 'slide_section3',title: t('intro_text_title_slide_3'), text: t('intro_text_par_slide_3') },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="Introduction_container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="intro_contents"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="intro_details_text" id={slide.id}
          >
            <div className="intro_text">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button className="Intro_button">
                <Link
                  onClick={() => {
                    window.location.href = '/Objectifs';
                  }}
                  className="Intro_but"
                >
                  {t('intro_button')}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider_nav">
        <button onClick={handlePrev} className="nav_button">
          &#10094;
        </button>
        <button onClick={handleNext} className="nav_button">
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default LandingIntro;
