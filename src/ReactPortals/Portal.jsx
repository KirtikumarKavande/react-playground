import React, { useState } from "react";
import Modal from "./Modal";

function Portal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <h1>React Portal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Welcome to the Modal!</h2>
        <p>This modal is rendered using React Portals.</p>
      </Modal>
    </div>
  );
}

export default Portal;
