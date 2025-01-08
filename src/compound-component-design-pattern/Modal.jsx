const Modal = ({ children }) => {
  return (
    <div style={{ border: "1px solid green", height: "300px", width: "900px", }}>
      {children}
    </div>
  );
};

Modal.Title = ({ children }) => {
  return <div style={{ fontWeight: "bold", fontSize: "30px" }}>{children}</div>;
};

Modal.Body = ({ children }) => {
  return (
    <div style={{ border: "2px solid red",  }}>{children}</div>
  );
};
export default Modal;
