import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";

export default function StatsSection() {
  const statsParallax = useRef(null);
  const counterSection = useRef(null);

  const hasAnimated = useRef(false);
  useEffect(() => {
    const handlescroll = () => {
      if (!statsParallax.current) return;
      const windowH = window.innerHeight;
      const element = statsParallax.current;
      const parentRect = element.parentElement.getBoundingClientRect();

      const progress = Math.min(
        Math.max((windowH - parentRect.top) / (windowH + parentRect.height), 0),
        1,
      );

      const topPercent = -50 + progress * 50;
      element.style.top = `${topPercent}%`;
    };

    const Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const Stats = [
            { id: "White T-Shirt", value: 780 },
            { id: "Megaphones", value: 160 },
            { id: "Light Bulbs", value: 1750 },
            { id: "White T-Shirt2", value: 780 },
          ];

          Stats.forEach(({ id, value }) => {
            const counter = new CountUp(id, value, {
              duration: 3,
              separator: "",
              easingFn: (t, b, c, d) => c * (t / d) + b,
            });
            if (!counter.error) {
              counter.start();
            }
          });
        }
      },
      {
        rootMargin: "-100px",
      },
    );

    if (counterSection.current) {
      Observer.observe(counterSection.current);
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
      Observer.disconnect();
    };
  }, []);
  return (
    <>
      <section ref={counterSection} id="StatsSection">
        <div className="container">
          <div className="row row-cols-xl-4">
            <div className="z-2 text-white text-center">
              <div className="px-3">
                <div className="stats_card">
                  <div>
                    <div className="counter-icon mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shirt-icon lucide-shirt"
                      >
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                      </svg>
                    </div>
                    <div className="counter-value" id="White T-Shirt">
                      <div className="counter-number">780</div>
                    </div>
                    <div className="counter-title fs-5">White T-Shirt</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-2 text-white text-center">
              <div className="px-3">
                <div className="stats_card">
                  <div>
                    <div className="counter-icon mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-volume2-icon lucide-volume-2"
                      >
                        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                        <path d="M16 9a5 5 0 0 1 0 6" />
                        <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                      </svg>
                    </div>
                    <div className="counter-value" id="Megaphones">
                      <div className="counter-number">780</div>
                    </div>
                    <div className="counter-title fs-5">Megaphones</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-2 text-white text-center">
              <div className="px-3">
                <div className="stats_card">
                  <div>
                    <div className="counter-icon mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lightbulb-icon lucide-lightbulb"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    </div>
                    <div className="counter-value" id="Light Bulbs">
                      <div className="counter-number">780</div>
                    </div>
                    <div className="counter-title fs-5">Light Bulbs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-2 text-white text-center">
              <div className="px-3">
                <div className="stats_card">
                  <div>
                    <div className="counter-icon mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shirt-icon lucide-shirt"
                      >
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                      </svg>
                    </div>
                    <div className="counter-value" id="White T-Shirt2">
                      <div className="counter-number">780</div>
                    </div>
                    <div className="counter-title fs-5">White T-Shirt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={statsParallax} className="parallax_layer" />
      </section>
    </>
  );
}
