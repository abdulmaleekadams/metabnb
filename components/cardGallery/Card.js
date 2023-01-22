import clsx from "clsx";
import styles from "./Card.module.scss";
import Image from "next/image";
const Card = ({ imageUrl = "/dk1.png" }) => {
  return (
    <div className={clsx(styles.card)}>
      <div className={clsx(styles.image)}>
        <Image src={imageUrl} fill alt="marjet" />
      </div>

      <div className={clsx(styles.details)}>
        <div>
          <p>Desert king</p>
          <p>1MBT per night</p>
        </div>
        <div>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
      </div>

      <div className={clsx(styles.rating)}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <Image
            src={`/star.svg`}
            key={idx}
            alt={`${idx + 1} star rating`}
            width={12}
            height={12}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
