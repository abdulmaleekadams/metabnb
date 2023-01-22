import clsx from "clsx";
import Card from "./Card";
import styles from "./CardGallery.module.scss";
const CardGallery = ({ header }) => {
  return (
    <section className={clsx(styles.cardGallery)}>
      {header}
      <div className={clsx(styles.cards)}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Card key={idx} imageUrl={`/dk${idx + 1}.png`} />
        ))}
      </div>
    </section>
  );
};

export default CardGallery;
