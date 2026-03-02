import fot_img from "../../assets/images/gym-light.png";

export default function Footer2() {
  return (
    <>
      <section id="footer2">
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          <div className="footer_info ">
            <div class="footer-image">
              <img src={fot_img} alt="" />
            </div>
            <div class="w-100">
              <p class="copyright">Copyright 2017 All rights reserved. </p>
            </div>
            <div class="social-icons social-icons-circle">
              <a href="#" class="social icon-facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="social icon-google">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="#" class="social icon-tumblr">
                <i class="fa-brands fa-tumblr"></i>
              </a>
              <a href="#" class="social icon-twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="social icon-youtube">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
