import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getCurrentUserHandler } from "../../lib/redux/authActions";
import ChatRooms from "./ChatRooms";
import MainChat from "./MainChat";
import EmptyChat from "./EmptyChat";
import classes from "./Chat.module.css";

const Chat = () => {
  const [roomUsers, setRoomUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Chat: useEffect called");
    dispatch(getCurrentUserHandler());
  }, []);
  const params = useParams();

  const getCurrentRoomUsers = (users = []) => {
    console.log("Chat: getCurrentRoomUsers called with users:", users);
    const unique = users.filter((obj, index) => {
      return (
        index ===
        users.findIndex((o) => obj.user.firstName === o.user.firstName)
      );
    });

    console.log("Chat: unique users:", unique);
    return setRoomUsers(unique);
  };

  console.log("Chat: roomUsers:", roomUsers);

  return (
    <Container className="mt-5" fluid>
      <Row>
        <Col lg={2} md={4} sm={2} xs={2}>
          <ChatRooms />
        </Col>
        <Col lg={8} md={8} sm={10} xs={10} className="mr-5">
          {params.chatTitle && (
            <MainChat getCurrentRoomUsers={getCurrentRoomUsers} />
          )}

          {!params.chatTitle && <EmptyChat />}
        </Col>
        <Col lg={2} className="d-none d-sm-none d-md-none d-lg-block">
          {params.chatTitle && (
            <div className={classes.overflow}>
              {roomUsers.map((user) => {
                console.log("Chat: user:", user);
                return (
                  <div className="mb-3">
                    <img
                      className={classes.room_image}
                      src={user.user.profilePicture}
                      alt="room_image"
                    />
                    <NavLink
                      className={classes.room_link}
                      to={`/chat/${user.user.firstName}`}
                    >
                      {" "}
                      {user.user.firstName}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};


export default Chat;
