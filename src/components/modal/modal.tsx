import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

interface IModal {
  onClose: () => void;
  children?: React.ReactNode;
}
const Modal:FC<IModal> = ({ onClose, children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  element.classList.add(styles.modal_wrapper);

  useEffect(() => {
    modalRoot?.appendChild(element);
    return () => {
      modalRoot?.removeChild(element);
    };
  }, [element]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClick}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={handleClick} />
    </>,
    element
  );
};


export default Modal;
