import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/images/shutterstock_149964086.jpg";
import slide2 from "../../assets/images/shutterstock_303937331.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";

export default function Hero() {
  const heroSec = useRef(null);
  const heroContent = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY * 0.3, 140);
      const opacity = Math.max(1 - scrollY / 600, 0);

      if (heroSec.current) {
        heroSec.current.style.transform = `translateY(-${offset}px)`;
      }
      if (heroContent.current) {
        heroContent.current.style.opacity = opacity;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Element name="hero">
        <section id="hero">
          <div
            ref={heroSec}
            className="hero-container position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 will-change-transform"
          >
            <Swiper
              effect={"fade"}
              speed={1000}
              fadeEffect={{ crossFade: true }}
              loop={true}
              allowTouchMove={false}
              navigation={true}
              modules={[EffectFade, Navigation]}
              className="mySwiper position-relative"
            >
              <SwiperSlide className="swiperSlide">
                <div className="slide_img">
                  <div>
                    <img
                      src={slide1}
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <div className="slide_img">
                  <div>
                    <img
                      src={slide2}
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <div
                ref={heroContent}
                className="position-absolute start-50 top-50 text-center translate-middle z-1"
              >
                <div className="hero-content mt-5">
                  <p className="hero-top-heading mb-1">WELCOME TO</p>
                  <h1 className="hero-heading mb-3">ENGAGE GYM</h1>

                  <p className="hero-subtitle mt-2 mb-3">
                    We're the biggest, best equipped and most advanced fitness
                    studio in the greater Las Vegas area.
                  </p>
                  <div className="hero-buttons mt-4">
                    <a href="" className="btn hero-btn hero-btn1 me-3">
                      Learn More
                    </a>
                    <a href="" className="btn hero-btn hero-btn2">
                      Our Trainers
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </section>
      </Element>
    </>
  );
}
