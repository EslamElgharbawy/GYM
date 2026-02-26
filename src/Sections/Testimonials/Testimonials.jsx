import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section id="Testimonials">
        <div className="container text-center">
          <div>
            <div className="special-heading">
              <div className="special-heading-icon colored">
                <i class="fa-regular fa-comment"></i>
              </div>
              <h3 className="special-heading-title">Testimonials</h3>
              <p className="special-heading-subtitle">What our clients say.</p>
            </div>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
                <div className="row mb-4">
                  <div className="col-sm-12 col-lg-6 col-xl-4">
                    <div className="item text-start">
                      <div className="testimonial-inner">
                        <div className="testimonial_content px-4 py-3">
                          <p>
                            Per seacula quarta decima et quinta decima. Modo
                            typi, qui nunc nobis videntur parum clari, fiant
                            sollemnes in futurum quarta decima. Lorem ipsum
                            dolorum have a great day.
                          </p>
                        </div>

                        <div className="testimonial-caption ps-4 mt-4">
                          <div className="testimonial-author">Michael Moore</div>
                          <div className="testimonial-position">Apple</div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
