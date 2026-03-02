export default function Footer1() {
  return (
    <>
      <section id="Footer">
        <div className="container">
          <div className="row g-3">
            <div className="col-sm-12 col-lg-6 col-xl-4">
              <div class="widget footer-widget footer-widget-col-1 widget_text">
                <h4 class="widget-title">About us</h4>
                <div class="textwidget ">
                  <p>
                    I am text block. Click edit button to change this text.
                    Lorem ipsum dolor sit amet, consectetur. I am text block.
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur.
                  </p>
                  <p>
                    We are the champions! We are the most amazing theme of all
                    time, yeah.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-4">
              <div class="widget footer-widget footer-widget-col-3 widget_text">
                <h4 class="widget-title">Opening Hours</h4>
                <div class="textwidget">
                  <ul className="footer_list list-unstyled">
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>

                      <p className="m-0">Monday 10AM - 9PM</p>
                    </li>
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width={14}
                        height={14}
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>

                      <p className="m-0">Tuesday 10AM - 9PM</p>
                    </li>
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width={14}
                        height={14}
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>{" "}
                      <p className="m-0">Wednesday 10AM - 9PM</p>
                    </li>
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width={14}
                        height={14}
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>{" "}
                      <p className="m-0">Thursday 10AM - 10PM</p>
                    </li>
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width={14}
                        height={14}
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>{" "}
                      <p className="m-0">Friday 10AM - 10PM</p>
                    </li>
                    <li className="footer_list_item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width={14}
                        height={14}
                        strokeWidth="2"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>{" "}
                      <p className="m-0">Weekends 10AM - 11PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-4">
              <div class="widget_contact_details position-relative">
                <h4 class="widget-title">Contact Details</h4>
                <div class="widget-contact-details contact-details-map position-relative">
                  <div class="widget-contact-details-item d-flex gap-2">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>
                      Manchester Road 123-78B, Silictown 7854MD, Great Country
                    </span>
                  </div>
                  <div class="widget-contact-details-item d-flex align-items-center gap-2">
                    <i class="fa-solid fa-phone"></i>
                    <span>
                      <span>+46 123 456 789</span>
                    </span>
                  </div>
                  <div class="widget-contact-details-item d-flex align-items-center gap-2">
                    <i class="fa-solid fa-envelope"></i>
                    <span>
                      <span class="accent-hover">hello@sitename.com</span>
                    </span>
                  </div>
                  <div class="widget-contact-details-item d-flex align-items-center gap-2">
                    <i class="fa fa-globe"></i>
                    <span>
                      <span class="accent-hover">http://www.sitename.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
