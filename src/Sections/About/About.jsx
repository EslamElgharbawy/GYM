import heroImg from "../../assets/images/shutterstock_274434071-800x760.jpg";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about_content container">
          <div className="row align-items-center g-xl-5">
            {/* Image */}
            <div className="col-12 col-lg-6">
              <img
                src={heroImg}
                alt="Who we are"
                className="img-fluid w-100 rounded"
              />
            </div>

            {/* Content */}
            <div className="about_info col-12 col-lg-6">
              <div className="mb-4">
                <h2 className="about_title mb-4 text-white text-uppercase">
                  Who we are?
                </h2>
                <p className="mb-4 lh-lg">
                  We have been operating for over 30 years and are Members of
                  The Federation of Master Builders. We work on projects big and
                  small from small residential extensions to full house. We are
                  so happy with this theme. Everyday it makes our lives better.
                </p>
              </div>

              <ul className="list-unstyled mb-5">
                <li className="d-flex align-items-center mb-3 gap-3">
                  <span className="icon_list">
                    <i className="fa-brands fa-envira text-white fs-4"></i>
                  </span>
                  <span>We care about environment.</span>
                </li>

                <li className="d-flex align-items-center mb-3 gap-3">
                  <span className="icon_list">
                    <i className="fa-solid fa-users text-white fs-4"></i>
                  </span>
                  <span>We're trusted by hundreds of clients.</span>
                </li>

                <li className="d-flex align-items-center mb-3 gap-3">
                  <span className="icon_list">
                    <i className="fa-solid fa-heart text-white fs-4"></i>
                  </span>
                  <span>Social media loves us!</span>
                </li>

                <li className="d-flex align-items-center gap-3">
                  <span className="icon_list">
                    <i className="fa-solid fa-check text-white fs-4"></i>
                  </span>
                  <span>This list is super easy to create.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
