import Image from "next/image";
import styles from './Market.module.scss'
import clsx from "clsx";
const Market = () => {
  const market = ["mbtoken", "metamask", "opensea"];
  return (
    <div className={clsx(styles.market)}>
      {market.map((market) => (
        <div key={market}>
          <Image src={`/${market}.svg`} width={150} height={30} alt={market} />
        </div>
      ))}
    </div>
  );
};

export default Market;
