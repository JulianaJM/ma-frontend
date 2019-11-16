import React from "react";
import { ReactComponent as Logo } from "./logo-meilleursagentspro-neg.svg";
import RealtorList from "../realtor/RealtorList";
import IconMessage from "../message/icon-message/IconMessage";

import "./header.scss";

const Header = ({ realtors, onChange, nbUnread }) => {
  return (
    <div className="App-header">
      <div className="App-header__content">
        <div className="content-left">
          <h1 className="logo">
            <Logo alt="MeilleursAgents PRO" />
          </h1>
          <div className={nbUnread > 0 ? "active" : "disable"}>
            <IconMessage type="inbox" unread={false} />
            <p>
              {nbUnread}
              <span className="sr-only">non lu</span>
            </p>
          </div>
        </div>

        <div className="content-right">
          <div className="content-right__inner">
            <RealtorList realtors={realtors} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
