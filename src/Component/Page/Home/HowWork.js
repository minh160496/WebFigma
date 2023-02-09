import clsx from "clsx";
import styles from "./Home.module.scss";
import { Container, Row } from "react-bootstrap";

import imgMain from "@/assets/img/how_work/how-work.png";
import imgIcon1 from "@/assets/img/how_work/budget.svg";
import imgIcon2 from "@/assets/img/how_work/ideation.svg";
import imgIcon3 from "@/assets/img/how_work/performent.svg";
import imgIcon4 from "@/assets/img/how_work/speed.svg";

function HowWork() {
  const icons = [
    {
      id: 1,
      src: imgIcon1,
      title: "Ideation",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 2,
      src: imgIcon2,
      title: "Budget",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 3,
      src: imgIcon3,
      title: "Perfomance",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
    {
      id: 4,
      src: imgIcon4,
      title: "Speed",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s",
    },
  ];
  return (
    <div className={clsx(styles.mainItem, styles.howWork, "mt-155")}>
      <Container>
        <Row>
          <div className="col-6">
            <div className={clsx(styles.howWork__inf)}>
              <div className={clsx(styles.infText)}>
                <div className={clsx(styles.infText__title)}>
                  <h2 className="font-weight-600">How it Works</h2>
                </div>
                <div className={clsx(styles.infText__desc)}>
                  <span className="text-desc">
                    Use this section to describe your company and the products
                    you offer. You could share your company’s story and details
                    about why you are in business.{" "}
                  </span>
                </div>
              </div>
              <div className={clsx(styles.inf__img)}>
                <img className="max-with-505" src={imgMain} alt="image" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className={clsx(styles.howWork__list)}>
              <Container>
                <Row className="gutter-y-80">
                  {icons.map((icon, index) => (
                    <div className="col-6" key={index}>
                      <div className={clsx(styles.list__item)}>
                        <div className={clsx(styles.bgIcon)}>
                          <img src={icon.src} alt="image" />
                        </div>
                        <div className={clsx(styles.text)}>
                          <div className={clsx(styles.text__title, "mt-24")}>
                            <h3>{icon.title}</h3>
                          </div>
                          <div className={clsx(styles.text__desc, "mt-10")}>
                            <span className="text-desc">{icon.desc}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HowWork;
