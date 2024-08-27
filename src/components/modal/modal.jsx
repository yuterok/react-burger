import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, children }) => {
  const element = useMemo(() => document.createElement("div"), []);
  const navigate = useNavigate();
  const id = useParams().id;
  element.classList.add(styles.modal_wrapper);

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        id ? navigate(-1) : onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleClick = (e) => {
    e.stopPropagation();
    id ? navigate(-1) : onClose();
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

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
