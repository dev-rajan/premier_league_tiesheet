import React from "react";

import PremierLogo from "../../assets/images/clubs/premier.png";

const Modal = ({ handleCloseModal, modalData }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__title">
          <h1>
            <span>
              <img src={PremierLogo} alt={modalData.name} />
            </span>
            <span className="today__date">{modalData.name} stats</span>
          </h1>
          <button
            type="button"
            className="modal__close"
            onClick={handleCloseModal}
          >
            &times;
          </button>
        </div>

        <div className="modal__body">
          <div className="col">Played: {modalData.played}</div>
          <div className="col">Won: {modalData.won}</div>
          <div className="col">Draw: {modalData.draw}</div>
          <div className="col">Lost: {modalData.lost}</div>
          <div className="col">GF: {modalData.gf}</div>
          <div className="col">GA: {modalData.ga}</div>
          <div className="col">
            GD: {modalData.gd > 0 ? `+${modalData.gd}` : modalData.gd}
          </div>
          <div className="col">Points: {modalData.points}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
