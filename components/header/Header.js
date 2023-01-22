import clsx from "clsx";
import Image from "next/image";
import styles from "./Header.module.scss";

import { Red_Rose } from "@next/font/google";

const redRose = Red_Rose({weight: "400", subsets: ["latin"] });


const Header = () => {
  const menu = [
    { title: "Home", url: "/" },
    { title: "Place to stay", url: "place" },
    { title: "NFTs", url: "nfts" },
    { title: "Community", url: "community" },
    ];
    
    const handleClick = () => {
        alert("Hello Mufaiz")
    }
  return (
    <header className={clsx(styles.header, redRose.className)}>
      <div className={clsx(styles.brand)}>
        <Image
          src={`/metabnblogo.svg`}
          width={150}
          height={30}
          alt="Metabnb logo"
        />
      </div>
      <div className={clsx(styles.menu)}>
        {menu.map((menuItem, idx) => (
          <div key={idx}>
            <a href={menuItem.url}>{menuItem.title}</a>
          </div>
        ))}
      </div>
      <div className={clsx(styles.button)}>
        <button onClick={handleClick}>Connect wallet</button>
      </div>
    </header>
  );
};

export default Header;
