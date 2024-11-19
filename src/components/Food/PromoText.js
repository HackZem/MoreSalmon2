import React from "react";
import styles from "./PromoText.module.css"

const PromoText = () => {
  return (
    <section className={styles.text}>
      <h2>Їда Онлайн Ресторан Кухня Лосося</h2>
      <p>
        Кухня Лосося - це онлайн ресторан где самие смачні блюда які делает
        профисиональний Лосось.
      </p>
      <p>Самая бистрая и качественная продукция, а так же вкус лосося в нас.</p>
    </section>
  );
};

export default PromoText;
