import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>ID:</strong> {props.id}
        </li>
        <li>
          <strong>image:</strong> correct img
        </li>
        <li>
          <strong>isClicked:</strong> {props.isClicked}
          {console.log(props)}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default FriendCard;
