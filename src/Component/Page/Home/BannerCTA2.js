import clsx from "clsx";
import styles from "./Home.module.scss";
import { Button, Container, Row } from "react-bootstrap";

import arrowUp from "@/assets/img/help/arrow_up.svg";
import iconThor from "@/assets/img/help/thor.svg";

function BannerCTA2() {
  return (
    <div
      className={clsx(styles.mainItem, styles.bannerCTA2, "mt-78 color-white")}
    >
      <Container>
        <Row>
          <div className="col-6">
            <div
              className={clsx(styles.mainItem__head, styles.bannerCTA2__head)}
            >
              <div
                className={clsx(
                  styles.mainItem__head__title,
                  styles.bannerCTA2__head__title
                )}
              >
                <h2>start your journey with us now</h2>
              </div>

              <div
                className={clsx(
                  styles.mainItem__head__button,
                  styles.bannerCTA2__head__button
                )}
              >
                <Button variant="primary" className="color-white">
                  Start now
                </Button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={clsx(styles.bannerCTA2__body)}>
              <div
                className={clsx(
                  styles.bannerCTA2__body__iconLg
                  // "position-relative items-center"
                )}
              >
                <img src={iconThor} alt="image" />
                <img src={arrowUp} alt="image" />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default BannerCTA2;
