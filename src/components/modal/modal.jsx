import ReactDOM, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";
import { Box, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ active, setActive, children }) => {
    const element = useMemo(() => document.createElement("div", []));
    element.classList.add(styles.modal_wrapper)
    useEffect(() => {
      if (active === true) {
        modalRoot.appendChild(element);
  
        return () => {
          modalRoot.removeChild(element);
        };
      }
    });

  return createPortal(
    <>
    <div
      className={active ? `${styles.content} ${styles.active}` : styles.content}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={() => setActive(false)}><CloseIcon type="primary" /></button>
      {children}
    </div>
    <ModalOverlay active={active} setActive={setActive} />
    </>
    , element
  );
};

export default Modal;

// const Modal = ({title, onClose, children}) => {
//     return createPortal(
//         <div>
//             {/* header */}
//             <div className={styles.content}>{children}</div>
//             <ModalOverlay onClose={onClose} />
//        </div>,
//       modalRoot
//     );
// }
