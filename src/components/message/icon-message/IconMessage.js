import React from "react";
import classNames from "classnames";

import "./icon-message.scss";

const IconMessage = ({ type, unread }) => {
  const newType = type === "email" ? "mail" : type;
  return (
    <span
      aria-hidden="true"
      className={classNames("message-icon", {
        "unread-ico": unread
      })}
    >
      <i className={`mypro-icon mypro-icon-${newType}`}></i>
    </span>
  );
};

export default IconMessage;
