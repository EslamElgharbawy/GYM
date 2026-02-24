import React, { useEffect, useRef } from "react";

export default function Results2() {
  const parallax = useRef();
  useEffect(() => {
    const handlescroll = () => {
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
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });

  return (
    <>
      <section id="results2">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="result2_info z-2 ">
              <div>
                <div className="mb-4">
                  <h2 className="results2_title">Great Results.</h2>
                  <p className="lh-lg mb-0">
                    We have been operating for over 30 years and are Members of
                    The Federation of Master Builders. We work on projects big
                    and small from small residential extensions to full
                    house.&nbsp;We are so happy with this theme. Everyday it
                    make our lives better.
                  </p>
                </div>
                <div className="btn-holder btn-align-left">
                  <a
                    href="#"
                    className="btn btn-regular btn-square btn-solid  btn-accent btn-hover-white"
                  >
                    Button Text
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={parallax} className="results2_parallax" />
      </section>
    </>
  );
}
