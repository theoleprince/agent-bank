function Modal({ modalIsOpen, setModalIsOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique de traitement et de fermeture de la modal ici
    setModalIsOpen(false);
  };
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: modalIsOpen ? "block" : "none" }}
      onClick={(e) => {
        if (e.target.className === "modal") setModalIsOpen(false);
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={() => setModalIsOpen(false)}>
          &times;
        </span>
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" required />
          <br />
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
