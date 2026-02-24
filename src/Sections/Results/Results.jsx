import React, { useEffect, useRef } from "react";

export default function Results() {
  const parallax = useRef(null);
  useEffect(() => {
    const hanleScroll = () => {
      if (!parallax.current) return;
      const windowH = window.innerHeight;
      const element = parallax.current;
      const parentRect = element.parentElement.getBoundingClientRect();

      const progress = Math.min(
        Math.max((windowH - parentRect.top) / (windowH + parentRect.height), 0),
        1,
      );

      const topPercent = -30 + progress * 30;
      element.style.top = `${topPercent}%`;
    };
    window.addEventListener("scroll", hanleScroll);
    return () => {
      window.removeEventListener("scroll", hanleScroll);
    };
  }, []);
  return (
    <>
      <section className="results">
        <div className="results_content container d-flex justify-content-center position-relative z-2">
          <div className="w-50 text-center">
            <div className="vc_column-inner px-3">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element mb-4 text-white">
                  <div className="wpb_wrapper">
                    <h2 className="mb-4 title_results">Great Results.</h2>
                    <p className="p_results m-0">
                      We have been operating for over 30 years and are Members
                      of The Federation of Master Builders. We work on projects
                      big and small from small residential extensions to full
                      house.&nbsp;We are so happy with this theme. Everyday it
                      make our lives better.
                    </p>
                  </div>
                </div>
                <div className="btn-holder">
                  <a href="#" className="btn rounded-1">
                    Button Text
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  ref={parallax} className="img_parallax"></div>
      </section>
    </>
  );
}
