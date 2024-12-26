
import slide_image_1 from '../assets/images/img_1.jpg';
import slide_image_2 from '../assets/images/img_2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/img_4.jpg';
import slide_image_5 from '../assets/images/img_5.jpg';
import slide_image_6 from '../assets/images/img_6.jpg';
import slide_image_7 from '../assets/images/img_7.jpg';
import slide_image_8 from '../assets/images/img_8.jpg';
import slide_image_9 from '../assets/images/img_9.jpg';
import slide_image_10 from '../assets/images/img_10.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination, Virtual } from 'swiper/modules';
import './carousel1.css';

// Placeholder images or import your images here
const slides = [
  { id: 1, title: "Pre-season game", subtitle: "Practice hunt on deck!", time: "4 hours ago", image: slide_image_1 },
  { id: 2, title: "Game Day", subtitle: "It's about to go DOWN!", time: "1 day ago", image: slide_image_2},
  { id: 3, title: "Try guarding this", subtitle: "93 Wolves Won", time: "4 days ago", image: slide_image_3},
  { id: 4, title: "Ice in his veins", subtitle: "Frozen victory!", time: "4 days ago", image: slide_image_4},
  { id: 5, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_5},
  { id: 6, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_6},
  { id: 7, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_7},
  { id: 8, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_8},
  { id: 9, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_9},
  { id: 10, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_10},

  { id: 11, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_5},
  { id: 12, title: "Vegas Wolves", subtitle: "US Brooklyn Raptors", time: "4 days ago", image: slide_image_10},
];

const Carousel = () => {
  return (
    <>
    <div className="carousel-wrapper">
    <div className="info-section">
      <div className="info-left">
        <h1 className="info-heading">What Happens in Vegas... <br/> Is on Our Feed!</h1>
        <p className="info-text">Get Closer to the Action! Follow us on social media for exclusive highlights, behind-the-scenes moments, and all the Wolves howl you can handle!</p>
        <div className="social-links">
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">TikTok</a>
          <a href="#" className="social-icon">YouTube</a>
        </div>
      </div>
      <div className="info-right">
        <h2 className="info-heading">Create. Share. <br/> Rep Your Team.</h2>
        <p className="info-text">Customize your own TikToks, Instagram Stories, and posts using exclusive Wolves templates and AI-powered effects.</p>
        <button className="cta-button">Make Your Mark!</button>
      </div>
    </div>
    <div className="carousel-container">
      <Swiper
        effect="coverflow"
        spaceBetween={20}
        slidesPerView={4} 
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 1.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Virtual]}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
          <div
              className="slide-content"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="slide-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-time">{slide.time}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </>
  );
};

export default Carousel;
