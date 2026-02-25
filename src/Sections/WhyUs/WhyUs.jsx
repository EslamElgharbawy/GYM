export default function WhyUs() {
  const featureItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={32}
          height={44}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      ),
      title: "Powerful Options",
      text: "Take a full control over all aspects of your theme with our truly extensive Options Panel.",
    },
    {
      icon: <i className="fa-solid fa-display text-white"></i>,
      title: "Responsive Design",
      text: "Engage is a fully responsive and retina ready theme that scales well to all mobile devices.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={32}
          height={44}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      ),
      title: "Page Builder",
      text: "Build any layout you can think of with the most powerful page builder Visual Composer.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
          <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
          <path d="M2 9h20" />
        </svg>
      ),
      title: "Styling Options",
      text: "Adjust the looks of your theme with the extensive Styling panel. Possibilities are endless.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={32}
          height={44}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
          />
        </svg>
      ),
      title: "Demo Content",
      text: "All of presented layouts and theme demo pages are available with a single mouse click.",
    },
    {
      icon: <i className="fa-regular fa-comment text-white"></i>,
      title: "Free Support",
      text: "Our top-notch support team will be more than happy to answer any of your questions.",
    },
    {
      icon: <i className="fa-regular fa-newspaper text-white"></i>,
      title: "Documentation",
      text: "Everything you need to know about the theme is located in the extensive documentation.",
    },
    {
      icon: <i className="fa-regular fa-camera text-white"></i>,
      title: "Premium Sliders",
      text: "Engage comes with two most powerful sliders out there: Revolution Slider and Layer Slider.",
    },
  ];

  return (
    <>
      <section id="Why_Us">
        <div className="container text-center">
          <div>
            <div className="special-heading">
              <div className="special-heading-icon colored">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3 className="special-heading-title">Why us?</h3>
              <p className="special-heading-subtitle">
                Learn a bit more about our gym best features.
              </p>
            </div>
          </div>
          <div className="row g-5">
            {featureItems.map((item , index) => {
              return (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <div className="feature-box d-flex flex-column justify-content-center align-items-center px-3">
                    <div className="icon-div mb-4">
                      <span className="icon-circle">{item.icon}</span>
                    </div>
                    <h5 className="feature_title mb-2">{item.title}</h5>
                    <p className="featur_description m-0">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
