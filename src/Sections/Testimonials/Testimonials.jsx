import TestimonialsCard from "../../components/TestimonialsCard/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.",
      name: "John Smith",
      company: "Microsoft",
    },
    {
      content:
        "Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.",
      name: "Steve Morris",
      company: "FashionTop",
    },
    {
      content:
        "Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.",
      name: "Michael Moore",
      company: "Apple",
    },
    {
      content:
        "Humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Modo typi quartasab.",
      name: "Britney Doe",
      company: "Google",
    },
  ];
  return (
    <>
      <section id="Testimonials">
        <div className="container text-center">
          <div>
            <div className="special-heading">
              <div className="special-heading-icon colored">
                <i className="fa-regular fa-comment"></i>
              </div>
              <h3 className="special-heading-title">Testimonials</h3>
              <p className="special-heading-subtitle">What our clients say.</p>
            </div>
          </div>
          <div className="test_items p-3">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="testimonials"
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialsCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
