import clsx from "clsx";
import styles from "./Home.module.scss";
import { Button, Container, Row } from "react-bootstrap";

import icon from "@/assets/img/banner_cta/arrow_right.svg";
import imgFull from "@/assets/img/banner_cta/full.png";
import imgLeft from "@/assets/img/banner_cta/left.png";
import imgNext1 from "@/assets/img/banner_cta/next1.png";
import imgNext2 from "@/assets/img/banner_cta/next2.png";
import imgUnder from "@/assets/img/banner_cta/under.png";

function BannerCTA() {
  return (
    <div
      className={clsx(
        styles.mainItem,
        styles.bannerCTA,
        "position-relative color-white mt-99 max-width-2550 x-center"
      )}
    >
      <div className="position-relative overflow-hidden">
        <img src={imgFull} className="w-100 h-100" alt="image" />
        <img
          src={imgUnder}
          className={clsx(
            styles.start_60,
            styles.y_center,
            styles.under,
            styles.h_128,
            "position-absolute z-index-1"
          )}
          alt="image"
        />

        <img
          src={imgNext1}
          className={clsx(
            styles.start_130,
            styles.y_center,
            styles.h_128,
            styles.w_400px,
            "position-absolute z-index-2"
          )}
          alt="image"
        />

        <img
          src={imgNext1}
          className={clsx(
            styles.start_310,
            styles.y_center,
            styles.h_128,
            styles.w_400px,
            "position-absolute z-index-3"
          )}
          alt="image"
        />

        <img
          src={imgNext2}
          className={clsx(
            styles.start_270,
            styles.y_center,
            styles.h_128,
            styles.w_400px,
            "position-absolute z-index-2"
          )}
          alt="image"
        />
      </div>
      <div className="position-absolute start-0 top-0 end-0 bottom-0 w-100 h-100 z-index-4">
        <Container className="w-100">
          <Row>
            <div className="col-6">
              <div
                className={clsx(
                  styles.mainItem__title,
                  styles.bannerCTA__title,
                  "mt-64"
                )}
              >
                <h2>Start Your Journey With Us Now</h2>
              </div>
            </div>

            <div className="col-6">
              <div
                className={clsx(
                  styles.commitmentsText,
                  styles.bannerCTAText,
                  "mt-64"
                )}
              >
                <div className={clsx(styles.commitmentsText__desc)}>
                  <span>
                    Use this section to describe your company and the products
                    you offer. You could share your company’s story and details
                    about why you are in business. Use this section to describe
                    your company and the products you offer. You could share
                    your company’s story and{" "}
                  </span>
                </div>
                <div
                  className={clsx(
                    styles.commitments__link,
                    "d-flex align-items-center link link-white mt-26"
                  )}
                >
                  <a className="d-inline-block hover-blur" href="/">
                    Learn more
                  </a>
                  <img src={icon} alt="image" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BannerCTA;
