import React, { Component } from "react";
import classNames from "classnames";
import MessageList from "./components/message/message-list/MessageList";
import Message from "./components/message/message/Message";
import Header from "./components/header/Header";

import Realtors from "./data/db.json"

import "./mypro-icon.css";
import "./App.scss";

// const API_PREFIX = process.env.REACT_APP_API_PREFIX;
class App extends Component {
  state = {
    realtors: [],
    realtorMessages: [],
    messageDetails: null,
    nbUnread: null,
    currentRealtor: null,
    currentMessage: null
  };

  componentDidMount() {
    this.loadRealtors();
  }

  handleChange = id => {
    const { messageDetails } = this.state;
    if (messageDetails) {
      this.handleMessageClose();
    }
    this.loadRealtorInfo(id);
    this.loadRealtorMessages(id);
    this.setState({ currentRealtor: id });
  };

  handleMessageClick = e => {
    this.getMessage(e.currentTarget.id);
    this.setState({ currentMessage: e.currentTarget.id });
  };

  handleMessageClose = () => {
    this.setState({ messageDetails: null });
    this.setState({ currentMessage: null });

  };

  loadRealtors() {
    // fetch(`${API_PREFIX}/realtors`)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
        const realtors = Object.values(Realtors);
        // init
        this.loadRealtorInfo(realtors[0].id);
        this.loadRealtorMessages(realtors[0].id);
        this.setState({ realtors, currentRealtor: realtors[0].id });
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  }

  loadRealtorInfo(id) {
    // fetch(`${API_PREFIX}/realtors/${id}`)
    //   .then(response => {
    //     return response.json();
    //   })
      // .then(data => {
        const realtors = Object.values(Realtors);
        const data = realtors.find(r => r.id === Number(id))
        this.setState({ nbUnread: data.unread_messages });
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  }

  loadRealtorMessages(id) {
    // fetch(`${API_PREFIX}/realtors/${id}/messages`)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
      const realtors = Object.values(Realtors);
      const data = realtors.find(r => r.id === Number(id))
      // this.setState({ realtorMessages: data });
        this.setState({ realtorMessages: data.messages });
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  }

  getMessage(id) {
    const { realtorMessages, currentRealtor } = this.state;
    const messageDetails = realtorMessages.find(m => m.id === Number(id));
    this.setState({ messageDetails });
    // if (!messageDetails.read) {
    //   this.updateUnread(currentRealtor, id);
    // }
  }

  // updateUnread(realtorId, messageId) {
  //   /* FIXME PATCH not allowed for the web client*/
  //   fetch(`${API_PREFIX}/realtors/${realtorId}/messages/${messageId}`, {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json; charset=UTF-8"
  //     },
  //     body: JSON.stringify({ read: true })
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.loadRealtorInfo(realtorId);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    const {
      realtors,
      realtorMessages,
      messageDetails,
      nbUnread,
      currentMessage
    } = this.state;
    return (
      <div className="App">
        <Header
          realtors={realtors}
          onChange={this.handleChange}
          nbUnread={nbUnread}
        />
        <div className="App-content">
          <div
            className={classNames({
              "list-close": messageDetails,
              "list-open": !messageDetails
            })}
          >
            <MessageList
              messages={realtorMessages}
              onClick={this.handleMessageClick}
              currentMessage={currentMessage}
            />
          </div>
          <div
            className={classNames({
              "detail-open": messageDetails
            })}
          >
            {messageDetails && (
              <Message
                message={messageDetails}
                onClose={this.handleMessageClose}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
