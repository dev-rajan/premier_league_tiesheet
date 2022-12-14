import React from "react";

const Modal = ({ handleCloseModal, modalData }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__title">
          <h1>
            <span className="today__date">{modalData?.round}</span> &bull;{" "}
            <span>{modalData?.date}</span>
          </h1>
        </div>

        <div className="modal__body">
          <div className="team">{modalData?.team1}</div>
          <div className="score">
            <div className="team__score">{modalData?.score?.ft[0]}</div>
            <span className="team__score">-</span>
            <div className="team__score">{modalData?.score?.ft[1]}</div>
          </div>
          <div className="team">{modalData?.team2}</div>
        </div>

        <button
          type="button"
          className="modal__close"
          onClick={handleCloseModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
