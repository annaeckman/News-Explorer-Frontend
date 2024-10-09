import "./modalWithForm.css";

function ModalWithForm({
  onSubmit,
  isOpen,
  title,
  onClose,
  children,
  buttonText,
  altButtonClick,
  altButtonText,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form action="" onSubmit={handleSubmit} className="modal__form">
          {children}
          <div className="modal__buttons-container">
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
            <button
              className={"modal__text-button modal__el_hovered"}
              type="button"
              onClick={altButtonClick}
            >
              {altButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
