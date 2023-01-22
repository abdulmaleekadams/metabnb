import Image from "next/image";
import Link from "next/link";

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
    <footer>
      <div>
        <Image
          src="/whitemetabnblogo.svg"
          alt="Metabnb logo"
          width={120}
          height={30}
        />
        <div></div>
        {social.map((title) => (
          <div key={title}>
            <a href={`#${title}`} aria-label={`Metabnb ${title} Link`}>
              <Image src={`/${title}.svg`} height={25} width={25} alt={title} />
            </a>
          </div>
        ))}
      </div>
      <div>
        {footerLinks.map((link) => (
          <div key={link}>
            <p>{link.title}</p>
            {link.links.map((link, idx) => (
              <Link href="#" key={idx}>
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
