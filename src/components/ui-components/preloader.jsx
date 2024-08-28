import styles from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.preloader_text} text_type_main-medium`}>
        Оформляем ваш заказ
      </p>
      <div className={styles.content}>
        <div className={styles.planet}>
          <div className={styles.ring}></div>
          <div className={styles.cover_ring}></div>
          <div className={styles.spots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
