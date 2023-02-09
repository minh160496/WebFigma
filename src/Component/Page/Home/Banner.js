import { Button, Container, Row } from "react-bootstrap";
import clsx from "clsx";

import imgLgYellow from "@/assets/img/img-banner/img-lg-yellow.png";
import imgLgBlack from "@/assets/img/img-banner/img-lg-black-skin.png";
import dialogSm from "@/assets/img/img-banner/dialog-sm.png";
import union from "@/assets/img/img-banner/Union.png";
import dialogLeft from "@/assets/img/img-banner/left.png";
import imgMan from "@/assets/img/img-banner/img-md-man.png";
import imgNoHair from "@/assets/img/img-banner/img-md-cyrcle-nohair.png";
import styles from "./Home.module.scss";

function Banner() {
  return (
    <Container>
      <div className="banner">
        <Container>
          <Row>
            <div className="col-5">
              <div className={clsx(styles.bannerText)}>
                <div className={clsx(styles.bannerTitle)}>
                  <h1>We Take Care Of Your Brand</h1>
                </div>
                <div className={clsx(styles.banner__desc)}>
                  <p className="colorDesc">
                    Use this section to describe your company and the products
                    you offer. You could share your company’s story and details
                    about why you are in business.
                  </p>
                </div>
                <div className={clsx(styles.banner__button, "d-flex")}>
                  <div className={clsx(styles.banner__foot__input)}>
                    <input type="email" placeholder="Enter Your Email" />
                  </div>
                  <div className={clsx(styles.banner__foot__item)}>
                    <Button
                      variant="primary"
                      className={clsx(styles.button__banner)}
                    >
                      Lets Talk
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <div className={clsx(styles.bannerWithImg)}>
                <div className={clsx(styles.bannerWithImg__wrap)}>
                  <div className={clsx(styles.banner__item)}>
                    <div className="d-flex justify-content-end">
                      <div className={clsx(styles.image, styles.image__lg)}>
                        <img src={imgLgYellow} alt="Image" />
                      </div>
                      <div
                        className={clsx(
                          styles.image,
                          styles.image__md,
                          "position-relative"
                        )}
                      >
                        <div
                          className={clsx(
                            styles.union,
                            "position-absolute text-align-center"
                          )}
                        >
                          <img src={union} alt="image" />
                          <span>😍</span>
                        </div>
                        <img src={imgNoHair} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="banner__item">
                    <div className="d-flex justify-content-end">
                      <div
                        className={clsx(
                          styles.elip,
                          "d-flex justify-content-center align-items-center"
                        )}
                      >
                        <span>✏️</span>
                      </div>
                      <div className={clsx(styles.image, styles.image__lg)}>
                        <img src={imgLgBlack} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="banner__item">
                    <div className="d-flex justify-content-end">
                      <div
                        className={clsx(
                          styles.image,
                          styles.image__md,
                          "position-relative"
                        )}
                      >
                        <div
                          className={clsx(
                            styles.union,
                            "position-absolute text-align-center"
                          )}
                        >
                          <div
                            className={clsx(
                              styles.rotated,
                              "position-relative"
                            )}
                          >
                            <img src={union} alt="image" />
                            <span>🤌</span>
                          </div>
                        </div>
                        <img src={imgMan} alt="" />
                      </div>
                      <div
                        className={clsx(
                          styles.withThin,
                          styles.yellow,
                          "d-flex justify-content-center align-items-center"
                        )}
                      >
                        <span>👩🏻‍💻</span>
                      </div>
                      <div
                        className={clsx(
                          styles.withThin,
                          styles.blur,
                          "d-flex justify-content-center align-items-center"
                        )}
                      >
                        <span>👑</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner__item"></div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Banner;
