import clsx from "clsx";
import styles from "./Home.module.scss";
import { Button, Container, Row } from "react-bootstrap";

import avt1 from "@/assets/img/our_team/team1.png";
import avt2 from "@/assets/img/our_team/team2.png";
import avt3 from "@/assets/img/our_team/team3.png";
import avt4 from "@/assets/img/our_team/team4.png";
import avt5 from "@/assets/img/our_team/team5.png";
import avt6 from "@/assets/img/our_team/team6.png";

function OurTeam() {
  const avts = [avt1, avt2, avt3, avt4, avt5, avt6];
  return (
    <div className={clsx(styles.mainItem, styles.ourTeam, "mt-120")}>
      <Container>
        <Row>
          <div className="col-6">
            <div className={clsx(styles.ourTeam__avts)}>
              <Container>
                <Row>
                  {avts.map((avt, index) => (
                    <div className="col-4 pb-4" key={index}>
                      <div className={clsx(styles.avt__item)}>
                        <img className="w-100" src={avt} alt="image" />
                      </div>
                    </div>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
          <div className="col-6">
            <div className={clsx(styles.commitmentsText, styles.ourTeamText)}>
              <div
                className={clsx(
                  styles.commitmentsText__title,
                  styles.ourTeamText__title
                )}
              >
                <h2 className="font-weight-600">Meet Our Team</h2>
              </div>

              <div
                className={clsx(
                  styles.commitmentsText__subTitle,
                  styles.ourTeamText__subTitle,
                  "mt-10"
                )}
              >
                <span>Use this section to describe your company and the </span>
              </div>

              <div
                className={clsx(
                  styles.commitmentsText__desc,
                  styles.ourTeamText__desc,
                  "mt-16"
                )}
              >
                <span className="text-desc">
                  Meet Our Team Use this section to describe your company and
                  the Use this section to describe your company and the products
                  you offer. You could share your company’s story and details
                  about why you are in business. Learn More
                </span>
              </div>
              <div
                className={clsx(
                  styles.commitments__link,
                  "d-flex align-items-center mt-75"
                )}
              >
                <Button variant="primary">Learn more</Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
