import clsx from "clsx";
import Image from "next/image";
import styles from "./TopBanner.module.scss";
const TopBanner = () => {
  return (
    <section className={clsx(styles.topBanner)}>
      <div className={clsx(styles.text)}>
        <h1>
          Rent a<span> place</span> away from
          <br />
          <span>Home</span> in the <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses<br /> in the
          metaverse, get a chance to turn your <br/> imagination to reality at your comfort zone
        </p>
        <div className={clsx(styles.heroButton)}>
          <input placeholder="Search for location" type="search" />
          <button>Search</button>
        </div>
      </div>
      <div className={clsx(styles.image)}>
        <Image src={`/metabanner.png`} alt="Hero Banner" fill unoptimized />
      </div>
    </section>
  );
};

export default TopBanner;
