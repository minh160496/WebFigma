import clsx from "clsx";

import LayoutDefault from "@/Component/Layouts/LayoutDefault";
import Banner from "./Banner";
import Partners from "./Partners";
import Commitments from "./Commitments";
import HowWork from "./HowWork";
import OurWork from "./OurWork";
import BannerCTA from "./BannerCTA";
import OurTeam from "./OurTeam";
import Testimo from "./Testimo";
import BannerCTA2 from "./BannerCTA2";
import Help from "./Help";

import styles from "./Home.module.scss";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <div className={clsx(styles.homePage)}>
      <LayoutDefault>
        <Container>
          <Banner />
          <Partners />
          <Commitments />
          <HowWork />
          <OurWork />
        </Container>
        <BannerCTA />
        <Container>
          <OurTeam />
          <Testimo />
          <BannerCTA2 />
          <Help />
        </Container>
      </LayoutDefault>
    </div>
  );
}

export default Home;
