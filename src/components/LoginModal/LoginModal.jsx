import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onClose,
  isLoading,
  setActiveModal,
  handleChange,
}) => {
  return (
    <ModalWithForm
      title="Sign in"
      buttonText={isLoading ? "Signing in" : "Sign in"}
      altButtonText={"or Sign up"}
      altButtonClick={() => setActiveModal("register")}
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="modal__label" htmlFor="email-login">
        Email
      </label>
      <input
        className="modal__input"
        id="email-login"
        name="email"
        type="email"
        minLength="4"
        maxLength="64"
        placeholder="Enter email"
        value=""
        onChange={handleChange}
        required
      />
      <label className="modal__label" htmlFor="password-login">
        Password
      </label>
      <input
        className="modal__input"
        id="password-login"
        name="password"
        type="password"
        placeholder="Enter password"
        value=""
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};

export default LoginModal;
