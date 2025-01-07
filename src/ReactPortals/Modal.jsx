import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // Styles for the modal

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
