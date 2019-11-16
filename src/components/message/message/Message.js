import React, { useRef, useEffect } from "react";
import IconMessage from "../icon-message/IconMessage";

import "./message.scss";

const Message = ({ message, onClose }) => {
  const { contact, read, type, body } = message;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, [message]);

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="message-close"
        onClick={onClose}
      >
        <i className="mypro-icon mypro-icon-cross"></i>
      </button>
      <div className="message-head">
        <IconMessage type={type} unread={!read} />
        <div className="message-head__info">
          <p className="fullname">
            {contact.firstname} {contact.lastname}
          </p>
          <div className="message-head__row">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={contact.email} readOnly />
          </div>
          <div className="message-head__row">
            <label htmlFor="phone">Téléphone</label>
            <input type="text" id="phone" value={contact.phone} readOnly />
          </div>
        </div>
      </div>
      <div className="message-detail">
        <div className="message-detail__body">
          <p className="fullname">
            {contact.firstname} {contact.lastname}
          </p>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
