import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">

    <a onClick={  () => props.findFriend(props.id)}
    /*className={props.points ===0 ?  "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"} */

      >
      <img alt={props.id} src={props.image} /></a>
    
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default FriendCard;
