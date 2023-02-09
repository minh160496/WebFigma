import clsx from "clsx";
import styles from "./Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import { useState, useRef } from "react";

import avt1 from "@/assets/img/testimo/avt1.png";
import avt2 from "@/assets/img/testimo/avt2.png";
import avt3 from "@/assets/img/testimo/avt3.png";
import { Button } from "react-bootstrap";

function Testimo() {
  const persons = [
    {
      id: 1,
      avt: avt1,
      name: "Amelia Joseph",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 2,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 3,
      avt: avt3,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 4,
      avt: avt1,
      name: "Amelia Joseph",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 5,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 5,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 6,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 7,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 8,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
    {
      id: 9,
      avt: avt2,
      name: "Jacob Joshua",
      job: "Chief Manager",
      desc: "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business. ",
    },
  ];

  const [state, setState] = useState(0);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <div
      className={clsx(
        styles.mainItem,
        styles.testimo,
        "mt-116 position-relative h-600 pt-78"
      )}
    >
      <div className={clsx(styles.mainItem__head, styles.testimo__head)}>
        <div
          className={clsx(
            styles.mainItem__head__title,
            styles.testimo__head__title
          )}
        >
          <h2 className="font-weight-600">What Our Client Said about us</h2>
        </div>

        <div
          className={clsx(
            styles.mainItem__head__desc,
            styles.testimo__head__desc
          )}
        >
          <span className="text-desc">
            Use this section to describe your company{" "}
          </span>
        </div>
      </div>

      <div className="position-absolute top-0 bottom-0 start-0 mt-160">
        <div
          className={clsx(
            styles.mainItem__body,
            styles.testimo__body,
            "d-flex align-items-center"
          )}
        >
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            // effect={"fade"}
            spreed={800}
            slidesPerView={3}
            loop
            spaceBetween={80}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={clsx(styles.mySwiper)}
          >
            {persons.map((person, index) => (
              <SwiperSlide className="max-width-505 mr-20">
                <div
                  className={clsx(
                    styles.mainItem__body__item,
                    styles.testimo__body__item,
                    "swiper",
                    { " acive": index === state ? true : false },
                    "mt-53 cursor-pointer"
                  )}
                  key={index}
                  onMouseOver={(event) => {
                    event.preventDefault();
                    setState(index);
                  }}
                >
                  <div
                    className={clsx(
                      styles.item__inf,
                      "d-flex align-items-center"
                    )}
                  >
                    <div className={clsx(styles.inf__img, "h-100 mr-20")}>
                      <img className="h-100" src={person.avt} alt="image" />
                    </div>
                    <div className={clsx(styles.infText)}>
                      <div className={clsx(styles.infText__name)}>
                        <h3 className="sub-title font-weight-600">
                          {person.name}
                        </h3>
                      </div>
                      <div className={clsx(styles.infText__job)}>
                        <span className="text-job mt-6">{person.job}</span>
                      </div>
                    </div>
                  </div>

                  <div className={clsx(styles.item__desc)}>
                    <span className="text-desc mt-19 d-inline-block max-width-400 letter-space-06">
                      {person.desc}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <div className={clsx(styles.swiperNavPrev)} ref={swiperNavPrevRef}>
              <Button variant="primary">Previus</Button>
            </div>
            <div className={clsx(styles.swiperNavNext)} ref={swiperNavNextRef}>
              <Button variant="primary">Next</Button>
            </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimo;
