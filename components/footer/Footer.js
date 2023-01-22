import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import clsx from "clsx";import { Red_Rose } from "@next/font/google";

const redRose = Red_Rose({weight: "400", subsets: ["latin"] });

const Footer = () => {
  const footerLinks = [
    {
      title: "Community",
      links: ["NFT", "Tokens", "Landlords", "Discord"],
    },
    {
      title: "Places",
      links: ["Castle", "Farms", "Beach", "Learn more"],
    },
    {
      title: "About us",
      links: ["Road map", "Creators", "Career", "Contact us"],
    },
  ];

  const social = ["facebook", "instagram", "twitter"];
  return (
    <footer className={clsx(styles.footer, redRose.className)}>
      <div className={clsx(styles.main)}>
        <div className={clsx(styles.brand)}>
          <Image
            src="/whitemetabnblogo.svg"
            alt="Metabnb logo"
            width={200}
            height={30}
            className={clsx(styles.logo)}
          />
          <div className={clsx(styles.social)}>
            {social.map((title) => (
              <div key={title}>
                <a href={`#${title}`} aria-label={`Metabnb ${title} Link`}>
                  <Image
                    src={`/${title}.svg`}
                    height={18}
                    width={18}
                    alt={title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={clsx(styles.links)}>
          {footerLinks.map((link) => (
            <div key={link}>
              <p>{link.title}</p>
              <div className={clsx(styles.link)}>
                {link.links.map((link, idx) => (
                  <Link href="#" key={idx}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
