import { Button, Container, Row } from "react-bootstrap";
import clsx from "clsx";

import styles from "./Home.module.scss";
import arrowRight from "@/assets/img/help/arrow_right.svg";
import iconPlus from "@/assets/img/help/plus.svg";

function Help() {
  return (
    <div className={clsx(styles.mainItem, styles.help, "pt-90 pb-90")}>
      <Container>
        <Row>
          <div className="col-6 order-2">
            <div className={clsx(styles.mainItem__head, styles.help__head)}>
              <div
                className={clsx(
                  styles.mainItem__head__title,
                  styles.help__head__title
                )}
              >
                <h2 className="font-weight-600">How we can help you?</h2>
              </div>

              <div
                className={clsx(
                  styles.mainItem__head__desc,
                  styles.help__head__desc
                )}
              >
                <span className="text-desc mt-14 d-inline-block max-width-431">
                  Follow our newsletter. We will regulary update our latest
                  project and availability.
                </span>
              </div>

              <div className={clsx(styles.help__head__foot, "d-flex mt-32")}>
                <div
                  className={clsx(
                    styles.foot__input,
                    styles.banner__foot__input
                  )}
                >
                  <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className={clsx(styles.foot__button)}>
                  <Button
                    variant="primary"
                    className={clsx(styles.button__banner, styles.button__help)}
                  >
                    Lets Talk
                  </Button>
                </div>
              </div>

              <div
                className={clsx(styles.help__head__link, "d-flex link mt-42")}
              >
                <a className="d-inline-block" href="/">
                  more FAQ
                </a>
                <div className={clsx(styles.icon)}>
                  <img src={arrowRight} alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={clsx(styles.help_body)}>
              <ul>
                <li>
                  <div
                    className={clsx(
                      styles.help__body__item,
                      "d-flex align-items-center justify-content-between"
                    )}
                  >
                    <span>How do i sign up for the project?</span>
                    <div className={clsx(styles.iconPlus)}>
                      <img src={iconPlus} alt="image" />
                    </div>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(
                      styles.help__body__item,
                      "d-flex align-items-center justify-content-between"
                    )}
                  >
                    <span>How do i sign up for the project?</span>
                    <div className={clsx(styles.iconPlus)}>
                      <img src={iconPlus} alt="image" />
                    </div>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(
                      styles.help__body__item,
                      "d-flex align-items-center justify-content-between"
                    )}
                  >
                    <span>How do i sign up for the project?</span>
                    <div className={clsx(styles.iconPlus)}>
                      <img src={iconPlus} alt="image" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Help;
