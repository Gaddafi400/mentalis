import close from './assets/Close.png';

const Modal = ({ handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="modal__header">
        <img
          src={close}
          alt="close button"
          onClick={handleClose}
          className="close-button"
        />
        <header>
          <h1>Complete Your Upload</h1>
          <p>Fill in the details below to complete your upload</p>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <select className="form-input">
              <option className="option" value="1">
                Progress note - 80 left
              </option>
              <option className="option" value="2">
                Soap note - 80 left
              </option>
              <option className="option" value="3">
                EMDR note- 80 left
              </option>
              <option className="option" value="4">
                Couples therapy note - 80 left
              </option>
              <option className="option" value="5">
                Family therapy note - 80 left
              </option>
            </select>
          </div>

          <div className="form-row">
            <input
              type="text"
              id="number"
              className="form-input"
              placeholder="Enter client name"
            />
          </div>

          <button type="submit" className="btn  btn-finish-upload">
            finish upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
