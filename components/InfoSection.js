import Image from "next/image";

import InfoSectionStyles from "../styles/InfoSectionStyles.module.css";

const InfoSection = () => {
  return (
    <div className="container">
      <div className={InfoSectionStyles.section}>
        <div className={InfoSectionStyles.image}>
          <Image
            src={"/20200927_A7S04418_004-min.jpg"}
            width="300"
            height="400"
          />
        </div>
        <div className={InfoSectionStyles.text}>
          <h1>Hand made baked goods & cold brew concentrate.</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;