import React from "react";
import classNames from "classnames";
import IconMessage from "../icon-message/IconMessage";

import "./message-list.scss";

const MessageList = ({ messages, onClick, currentMessage }) => {
  return (
    <div className="message-list">
      {messages.map(message => {
        const { contact, read, type, subject, body, id } = message;
        const isPhone = type === "phone" || type === "sms";
        const contactPhone = isPhone
          ? `${contact.firstname ? `(${contact.phone})` : `${contact.phone}`}`
          : "";
        const title = `${contact.firstname} ${contact.lastname} ${contactPhone}`;
        const unread = !read;
        return (
          <button
            type="button"
            key={id}
            id={id}
            className="message-list__content"
            onClick={onClick}
            aria-expanded={Number(currentMessage) === id}
          >
            <IconMessage type={type} unread={unread} />
            <span>
              <p
                className={classNames("message-title", {
                  "unread-message": unread
                })}
              >
                {title}
              </p>
              <p className="message-subject">{subject}</p>
              <p className="message-body truncate">{body}</p>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default MessageList;
