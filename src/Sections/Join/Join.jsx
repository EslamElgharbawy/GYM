import { useEffect, useRef } from "react";

export default function Join() {
  const parallax = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="Join" className="position-relative">
        <div className="Join_box container text-center position-relative z-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cta-texts">
                <h2 className="cta-heading">
                  <span>Feeling convinced?</span>
                </h2>
                <p className="cta-subtitle mt-3 mb-0">
                  Join our gym today and save up to 30%!
                </p>
              </div>
              <a href="#" className="cta-buttons mt-4">
                <p className=" cta-btn1 btn-solid btn-accent btn-hover-dark mb-0">
                  Fill the form
                </p>
              </a>
            </div>
          </div>
        </div>
        <div ref={parallax} className="Join_parallax"></div>
      </section>
    </>
  );
}
