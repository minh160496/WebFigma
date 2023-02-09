import { Button, Container, Row } from "react-bootstrap";
import clsx from "clsx";

import imgCyrcle from "@/assets/img/img-header/cyrcle-icon-header.svg";
import imgTriangle from "@/assets/img/img-header/triangle-right.svg";
import iconFace from "@/assets/img/footer/facebook.svg";
import iconInstagram from "@/assets/img/footer/instagram.svg";
import iconTwiter from "@/assets/img/footer/twiter.svg";

function Footer() {
  const links = [
    "Work With Us",
    "Private Coaching",
    "About Us",
    "Advertise With Us",
    "Our Work",
    "FAQs",
    "Support Us",
    "Our Commitment",
    "Report a Bug",
    "Business Advices",
    "Our Team",
  ];
  return (
    <footer className="footer pt-90">
      <Container>
        <div className="d-flex align-items-center pb-82">
          <Row>
            <div className="col-6">
              <div className="footer__item logo">
                <div className="not-btn">
                  <div to="/" className="d-flex align-items-center">
                    <div className="d-flex">
                      <img src={imgCyrcle} alt="logo" />
                      <img src={imgTriangle} alt="logo" />
                    </div>
                    <h1 className="font-weight-700">Embrace</h1>
                  </div>

                  <div className="logo-address mt-19">
                    <span className="font-foot-sm">
                      Los Angeles, California, USA
                    </span>
                  </div>

                  <div className="social d-flex align-items-center mt-38">
                    <a
                      className="link__item instagram d-inline-block mr-20"
                      href="/"
                    >
                      <img src={iconInstagram} alt="logo" />
                    </a>
                    <a
                      className="link__item instagram d-inline-block mr-20"
                      href="/"
                    >
                      <img src={iconTwiter} alt="logo" />
                    </a>
                    <a
                      className="link__item instagram d-inline-block mr-20"
                      href="/"
                    >
                      <img src={iconFace} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="has-btn mt-44">
                  <Button variant="primary">Contact Us</Button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="footer__item link">
                <div className="link--wrap">
                  <Container>
                    <Row className="gutter-y-5">
                      {links.map((link, index) => (
                        <div className="col-4" key={index}>
                          <span className="font-foot-sm h-item-foot" href="/">
                            {link}
                          </span>
                        </div>
                      ))}
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>

      <Container className="max-width-2550 p-0">
        <Row>
          <div className="foot-dark color-white d-flex align-items-center">
            <Container className="max-width-1240 x-center">
              <Row>
                <div className="col-9 align-self-start">
                  <span>© 2022 Embrace, Inc. - All Rights Reserved</span>
                </div>

                <div className="col-1">
                  <span>Terms of use </span>
                </div>
                <div className="col-1"></div>
                <div className="col-1">
                  <span>Privacy policy </span>
                </div>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
