import { Card } from "react-bootstrap";
import card1 from "../../assets/images/shutterstock_270033200-600x600.jpg";
import card2 from "../../assets/images/square-12-600x600.jpg";
import card3 from "../../assets/images/shutterstock_203253853-600x600.jpg";

export default function Coaches() {
  return (
    <>
      <section id="coaches">
        <div className="container text-center">
          <div>
            <div className="special-heading">
              <div className="special-heading-icon colored">
                <i className="fa-solid fa-users fs-1"></i>
              </div>
              <h3 className="special-heading-title">Our Coaches</h3>
              <p className="special-heading-subtitle">
                Learn more about our fantastic team!
              </p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-sm-6 col-lg-4">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={card1} />
                </div>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center pb-3 mb-0">
                    <div className="text-start">
                      <h4 className="card_title text-white">John Doe</h4>
                      <p className="card_p">Gym Master</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-white gap-2">
                      <span className="social_coash twitter">
                        <i className="fa-brands fa-twitter fs-6"></i>
                      </span>
                      <span className="social_coash facebook">
                        <i className="fa-brands fa-facebook-f fs-6"></i>
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text className="text-start">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    ultricies nisi at scelerisque pellentesque. Nunc feugiat
                    felis vitae aliquet consequat. Aliquam ullamcorper accumsan
                    lectus, a tempor turpis interdum sed. Donec ac faucibus
                    nunc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={card2} />
                </div>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center pb-3 mb-0">
                    <div className="text-start">
                      <h4 className="card_title text-white">Chris Richy</h4>
                      <p className="card_p">Personal Coach</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-white gap-2">
                      <span className="social_coash twitter">
                        <i className="fa-brands fa-twitter fs-6"></i>
                      </span>
                      <span className="social_coash facebook">
                        <i className="fa-brands fa-facebook-f fs-6"></i>
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text className="text-start">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    ultricies nisi at scelerisque pellentesque. Nunc feugiat
                    felis vitae aliquet consequat. Aliquam ullamcorper accumsan
                    lectus, a tempor turpis interdum sed. Donec ac faucibus
                    nunc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={card3} />
                </div>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center pb-3 mb-0">
                    <div className="text-start">
                      <h4 className="card_title text-white">Casey Moon</h4>
                      <p className="card_p">Personal Trainer</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-white gap-2">
                      <span className="social_coash twitter">
                        <i className="fa-brands fa-twitter fs-6"></i>
                      </span>
                      <span className="social_coash facebook">
                        <i className="fa-brands fa-facebook-f fs-6"></i>
                      </span>
                    </div>
                  </Card.Title>
                  <Card.Text className="text-start">
                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    ultricies nisi at scelerisque pellentesque. Nunc feugiat
                    felis vitae aliquet consequat. Aliquam ullamcorper accumsan
                    lectus, a tempor turpis interdum sed. Donec ac faucibus
                    nunc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
