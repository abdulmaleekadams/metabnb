import clsx from "clsx";
import Image from "next/image";
import styles from "./BottomBanner.module.scss";
import Link from "next/link";
const BottomBanner = () => {
  return (
    <section className={clsx(styles.bottomBanner)}>
      <div className={clsx(styles.text)}>
        <h3>Metabnb NFTs</h3>
        <p>
          Discover our NFT gift cards collection. Loyal customers get amazzing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services,
        </p>
        <div className={clsx(styles.link)}>
          <Link href="#learn">Learn More</Link>
        </div>
      </div>
      <div className={clsx(styles.image)}>
        <Image src={`/hero.png`} alt="Hero Banner" fill unoptimized />
      </div>
    </section>
  );
};

export default BottomBanner;
