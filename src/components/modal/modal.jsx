import ReactDOM, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";
import {
  Box,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ active, setActive, children }) => {
  const element = useMemo(() => document.createElement("div", []));
  element.classList.add(styles.modal_wrapper);
  useEffect(() => {
    if (active === true) {
      modalRoot.appendChild(element);

      return () => {
        modalRoot.removeChild(element);
      };
    }
  }, [active, element]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setActive(false);
        console.log("key pressed", active);
      }
    };
    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, [active]);

  let handleClick = (e) => {
    console.log("Overlay clicked", active);
    e.stopPropagation();
    setActive(false);
    console.log("Modal should be inactive now", active);
  };

  return createPortal(
    <>
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
      >
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
