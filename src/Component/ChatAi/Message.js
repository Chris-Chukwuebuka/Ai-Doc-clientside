import React, { Fragment } from "react";
import classes from "./Chat.module.css";
import Moment from "react-moment";

const Message = (props) => {
  console.log("Message Component props:", props);

  return (
    <Fragment>
      <div className={props.own ? classes.own : classes.other}>
        {props.own && (
          <div className={classes.message} key={props.id}>
            <h5 className={classes.username_own}>{props.sender}</h5>
            <Moment className={classes.meta_own} fromNow>
              {new Date()}
            </Moment>
            <div className={classes.messageTop}>
              <p className={classes.messageText}>{props.message}</p>
              <img
                className={classes.messageImg}
                src={props.profilePicture}
                alt="profile img"
              />
            </div>
          </div>
        )}

        {!props.own && (
          <div className={classes.message} key={props.id}>
            <h5 className={classes.username_other}>{props.sender}</h5>
            <Moment className={classes.meta} fromNow>
              {new Date()}
            </Moment>
            <div className={classes.messageTop}>
              <img
                className={classes.messageImg}
                src={props.profilePicture}
                alt="profile img"
              />
              <p className={classes.messageText}>{props.message}</p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Message;
