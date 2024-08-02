
import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ active, setActive }) => {
  return(
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    ></div>
  );
};

export default ModalOverlay;
