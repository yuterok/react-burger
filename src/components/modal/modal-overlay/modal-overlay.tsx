import { FC } from "react";
import styles from "./modal-overlay.module.css";

interface IModalOverlay {
  onClick: (e: React.MouseEvent) => void;
}
const ModalOverlay: FC<IModalOverlay> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>;
};

export default ModalOverlay;
