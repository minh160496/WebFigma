import clsx from "clsx";
import styles from "./Home.module.scss";
import { Button, Container, Row } from "react-bootstrap";

import img1 from "@/assets/img/img_our_work/ourwork1.png";
import img2 from "@/assets/img/img_our_work/ourwork2.png";
import img3 from "@/assets/img/img_our_work/ourwork3.png";

function OurWork() {
  const imgs = [
    {
      id: 1,
      title: "Apple",
      desc: "Use this section to describe your ",
      src: img1,
    },
    {
      id: 2,
      title: "Coca-cola",
      desc: "Use this section to describe your ",
      src: img2,
    },
    {
      id: 1,
      title: "Nike",
      desc: "Use this section to describe your ",
      src: img3,
    },
  ];
  return (
    <div className={clsx(styles.mainItem, styles.ourWork, "mt-183")}>
      <div className={clsx(styles.ourWork__head, "text-align-center")}>
        <div className={clsx(styles.ourWork__head__title)}>
          <h2 className="font-weight-600">Our Work</h2>
        </div>
        <div className={clsx(styles.ourWork__head__desc)}>
          <span className="text-desc">
            Use this section to describe your company and the products you
            offer. You could share your company’s story and details about why
            you are in business.{" "}
          </span>
        </div>
      </div>

      <div className={clsx(styles.ourWork__body, "mt-60")}>
        <Container>
          <Row className="set-gutter-x-20">
            {imgs.map((img, index) => (
              <div className="col-4" key={index}>
                <div className={clsx(styles.ourWork__body__item)}>
                  <div className={clsx(styles.item__img)}>
                    <img src={img.src} alt="image" />
                  </div>
                  <div className={clsx(styles.item__desc, "mt-16")}>
                    <h3 className="sub-title">{img.title}</h3>
                    <span className="text-desc font-16">{img.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>

      <div className={clsx(styles.ourWork__button, "mt-48 items-center")}>
        <Button variant="primary">See more</Button>
      </div>
    </div>
  );
}

export default OurWork;
