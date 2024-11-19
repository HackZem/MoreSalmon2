import React from "react";
import ReactDOM from 'react-dom'
import styles from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalWindow = ({children}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({children, onClose}) => {

    const portalElement = document.getElementById("overlays")

  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={onClose}/>,portalElement)}
    {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>,portalElement)}
  </React.Fragment>;
};

export default Modal;
