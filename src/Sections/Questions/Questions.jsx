import { useEffect, useRef } from "react";

export default function Questions() {
  const parallax = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const windowH = window.innerHeight;
      const element = parallax.current;
      const parentRect = element.parentElement.getBoundingClientRect();

      const progress = Math.min(
        Math.max((windowH - parentRect.top) / (windowH + parentRect.height), 0),
        1,
      );

      const topPercent = -50 + progress * 50;
      element.style.top = `${topPercent}%`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section id="Questions" className="position-relative">
        <div className="container text-center position-relative z-2">
          <div>
            <div className="special-heading">
              <div className="special-heading-icon colored">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-graduation-cap-icon lucide-graduation-cap"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="special-heading-title">Questions and Answers</h3>
              <p className="special-heading-subtitle">Any concerns?</p>
            </div>
          </div>
          <div className="row g-5"></div>
        </div>

        <div ref={parallax} className="questions_parallax" />
      </section>
    </>
  );
}
