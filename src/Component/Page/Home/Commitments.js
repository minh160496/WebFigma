import clsx from "clsx";
import styles from "./Home.module.scss";
import { Container, Row } from "react-bootstrap";

import img from "@/assets/img/commitments/arrow_right.svg";

function Commitments() {
  const counts = [
    {
      id: 1,
      num: 0,
      type: "%",
      text: "More revenues for the brand",
    },
    {
      id: 2,
      num: 0,
      type: "K",
      text: "More revenues for the brand",
    },
    {
      id: 3,
      num: 0,
      type: "+",
      text: "More revenues for the brand",
    },
    {
      id: 4,
      num: 0,
      type: "+",
      text: "More revenues for the brand",
    },
  ];
  return (
    <div className={clsx(styles.MainItem, styles.commitments)}>
      <Container>
        <Row>
          <div className="col-6">
            <div className={clsx(styles.commitments_count)}>
              <Container>
                <Row>
                  {counts.map((item, index) => (
                    <div className="col-6" key={index}>
                      <div className={clsx(styles.count__item)}>
                        <div
                          className={clsx(styles.itemNum, "font-weight-600")}
                        >
                          <span>{item.num + item.type}</span>
                        </div>

                        <div className={clsx(styles.itemText)}>
                          <span>{item.text}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
              </Container>
            </div>
          </div>

          <div className="col-6">
            <div className={clsx(styles.commitmentsText)}>
              <div className={clsx(styles.commitmentsText__title)}>
                <h2 className="font-weight-600">Our Commitments</h2>
              </div>

              <div className={clsx(styles.commitmentsText__desc)}>
                <span className="colorDesc">
                  Use this section to describe your company and the products you
                  offer. You could share your company’s story and details about
                  why you are in business. Use this section to describe your
                  company and the products you offer. You could share your
                  company’s story and details about why you are in business.{" "}
                </span>
              </div>
              <div
                className={clsx(
                  styles.commitments__link,
                  "d-flex align-items-center link mt-45"
                )}
              >
                <a className="d-inline-block" href="/">
                  Learn More
                </a>
                <img src={img} alt="image" />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Commitments;
