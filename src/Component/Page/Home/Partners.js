import { Container } from "react-bootstrap";
import clsx from "clsx";

import styles from "./Home.module.scss";
import logoSpoti from "@/assets/img/partners/spotify.png";
import abode from "@/assets/img/partners/abode.png";
import amazon from "@/assets/img/partners/amazon.png";
import asana from "@/assets/img/partners/asana.png";
import evernote from "@/assets/img/partners/evernote.png";
import paypal from "@/assets/img/partners/paypal.png";
import microsoft from "@/assets/img/partners/microsoft.png";
import uber from "@/assets/img/partners/uber.png";
import shoptify from "@/assets/img/partners/shoptify.png";
import google from "@/assets/img/partners/google.png";

const list = [
  logoSpoti,
  google,
  uber,
  microsoft,
  shoptify,
  evernote,
  abode,
  paypal,
  amazon,
  asana,
];

function Partners() {
  return (
    <div className={clsx(styles.mainItem, styles.partners, "mt-78")}>
      <div
        className={clsx(
          styles.mainItemText,
          styles.partners__itemText,
          "d-flex align-items-center"
        )}
      >
        <div
          className={clsx(styles.mainItem__title, styles.partners__item__title)}
        >
          <h2>Companies we Work with</h2>
        </div>
        <div className={clsx(styles.mainItem__desc)}>
          <span>
            <div
              className={clsx(
                styles.mainItem__desc,
                styles.partners__item__desc
              )}
            >
              <span className="colorDesc">
                Use this section to describe your company and the products you
                offer. You could share your company’s story and details about
                why you are in business.
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className={clsx(styles.mainItemLogos)}>
        {list.map((img, index) => (
          <div className={clsx(styles.itemLogo, `logo${index}`)} key={index}>
            <img src={img} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
