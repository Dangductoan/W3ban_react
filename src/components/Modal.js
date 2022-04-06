import React from "react";
import "./modal.css";
import "../assets/font/themify-icons/themify-icons.css";

function Modal({closeBtn}) {
  return (
    <div className="W3__modal">
      <div className="W3__modal-container">
        <div className="W3__modal-close">
          <i className="ti-close" onClick={() => closeBtn(false)}></i>
        </div>
        <div className="W3__modal-header">
          <i className="ti-bag"></i>
          Tickets
        </div>
        <div className="W3__modal-body">
          <label htmlFor="ticket-quantity" className="W3__modal-body_label">
            <i className="ti-shopping-cart"></i>
            Tickets, $15 per person
          </label>
          <input
            type="text"
            id="ticket-quantity"
            className="W3__modal-body_input"
            placeholder="How Many?"
          />
          <label htmlFor="ticket-email" className="W3__modal-body_label">
            <i className="ti-user"></i>
            Send to
          </label>
          <input
            type="text"
            id="ticket-email"
            className="W3__modal-body_input"
            placeholder="Enter Email..."
          />
          <button id="Buy-Tickets">
            Pay <i className="ti-check"></i>
          </button>
        </div>
        <div className="W3__modal-footer">
          <p className="modal-help">
            Need <a href="">help?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
