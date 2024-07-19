import React from "react";
import classes from "./Chat.module.css";

import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ChatRooms = () => {
  const rooms = [
    {
      title: "ASK AI",
      id: Math.floor(Math.random() * 1000) + "abcd",
      imageSource:
        "https://play-lh.googleusercontent.com/Zsk_jNGcPjP8seH7LMREHb8pNXQZ-BKkiD_38tiw1mijgfnSnrxnyuHfTsZIG1jaKS4",
    },
  ];

  console.log("rooms:", rooms);

  return (
    <div className="mt-5">
      <Form.Group>
        <Form.Control
          className={classes.room_search}
          placeholder="Search Rooms"
          onChange={(e) => console.log("search input:", e.target.value)}
        />
      </Form.Group>

      <div className="mt-4">
        {rooms.map((room) => {
          console.log("room:", room);

          return (
            <div key={room.id} className="mb-3 d-flex">
              <NavLink
                className={`${classes.room_link}`}
                to={`/chat/${room.title}`}
                onClick={() => console.log("click on room:", room)}
              >
                <img
                  className={`${classes.room_image}`}
                  src={room.imageSource}
                  alt="room_image"
                />{" "}
              </NavLink>
              <NavLink
                className={`${classes.room_link} d-none d-sm-none d-md-block`}
                to={`/chat/${room.title}`}
                onClick={() => console.log("click on room title:", room.title)}
              >
                {room.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatRooms;
