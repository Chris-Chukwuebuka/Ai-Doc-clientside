import React, { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Nav, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import EmojiPicker from "./EmojiPicker";
import Message from "./Message";
import classes from "./Chat.module.css";

const MainChat = (props) => {
  const API_URL = "http://localhost:3001";

  const [socketMessage, setSocketMessage] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const focusInput = useRef();
  const params = useParams();

  const { currentUser } = useSelector((state) => state.auth);

  const socket = useRef(io(API_URL));
  let room = localStorage.getItem("l");

  useEffect(() => {
    console.log("MainChat: useEffect(room) called");
    console.log("MainChat: room:", room);
    console.log("MainChat: params.chatTitle:", params.chatTitle);

    if (room && room !== params.chatTitle) {
      console.log("MainChat: leaving room:", room);
      socket?.current.emit("leaveRoom", {
        userData: {
          username: currentUser.firstName,
          profileImage: currentUser.profilePicture,
        },
        room,
      });
    }

    setTimeout(() => {
      console.log("MainChat: setting localStorage.l to:", params.chatTitle);
      localStorage.setItem("l", params.chatTitle);
    }, 2000);
  }, [params.chatTitle]);

  useEffect(() => {
    console.log("MainChat: useEffect(socket, params.chatTitle) called");
    console.log("MainChat: joining room:", currentUser.username);

    socket?.current.emit("joinRoom", {
      userData: {
        username: currentUser.firstName,
        profileImage: currentUser.profilePicture,
      },
      room: currentUser.username,
    });

    socket?.current.on("roomUsers", ({ room, users }) => {
      console.log("MainChat: roomUsers event received:", { room, users });
      return props.getCurrentRoomUsers(users);
    });

    socket?.current.on("message", (msg) => {
      console.log("MainChat: message event received:", msg);
      if (msg.type || msg.type === "new-msg") {
        return setSocketMessage([msg]);
      }

      setSocketMessage((socketMessage) => [...socketMessage, msg]);
    });
  }, [socket, params.chatTitle]);

  const sendMessageHandler = async (event) => {
    console.log("MainChat: sendMessageHandler called");
    event.preventDefault();

    if (!message || message.trim().length === 0) {
      console.log("MainChat: Message is empty or contains only whitespace");
      return;
    }

    const data = {
      message,
      user: {
        username: currentUser.firstName,
        profileImage: currentUser.profilePicture,
      },
    };

    console.log("MainChat: sending message to server:", data);
    await socket.current.emit("chatMessage", data);
    focusInput.current.focus();
    console.log("MainChat: message sent successfully");
    return setMessage(" ");
  };

  const messageChangeHandler = (event) => {
    console.log("MainChat: messageChangeHandler called");
    event.preventDefault();
    console.log("MainChat: updating message with event value:", event.target.value);
    setMessage(event.target.value);
  };

  const onEmojiClick = (icon) => {
    console.log("MainChat: onEmojiClick called with icon:", icon);
    console.log("MainChat: updating message with emoji:", icon);
    setMessage((prevMessage) => prevMessage + icon);
  };

  // const onShowEmoji = () => {
  //   console.log("MainChat: onShowEmoji called");
  //   if (showEmoji) {
  //     console.log("MainChat: hiding emoji picker");
  //     return setShowEmoji(false);
  //   }

  //   console.log("MainChat: showing emoji picker");
  //   return setShowEmoji(true);
  // };

  return (
    <div className="mt-5">
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Link
            eventKey="disabled"
            disabled
            className={classes.room_link}
          >
            {params.chatTitle}
          </Nav.Link>
        </Nav>
      </div>

      <div>
        <ScrollToBottom className={classes.chatBoxTop}>
          {socketMessage.map((message) => {
            console.log("MainChat: rendering message:", message);
            return (
              <Message
                id={Math.floor(Math.random() * 100000 + "abc")}
                sender={message.sender}
                userImage={message.userImage || currentUser.profilePicture}
                message={message.message}
                own={message.sender === currentUser.firstName}
              />
            );
          })}
        </ScrollToBottom>

        <Form onSubmit={sendMessageHandler}>
          <Form.Group>
            <Form.Control
              value={message}
              className={`${classes.chat_input} d-inline`}
              ref={focusInput}
              placeholder="Share your thought..."
              onChange={messageChangeHandler}
            />

            {showEmoji && <EmojiPicker onEmojiClick={onEmojiClick} />}
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default MainChat;
