import React from "react";
import "./navbar.css";

const NavBar = props => (
    <div>
    {console.log(props)}
        <ul className="nav nav-pills nav-justified">
            <li><a href="/" className="logo">Concentration</a></li>
            <li className={props.statusmsg.indexOf('picked') !== -1 ? 
                    "incorrect" : 
                    props.statusmsg.indexOf('guess') !== -1 ?
                        "correct" :
                        "normal"}>
                 {props.statusmsg} 
            </li>
            <li class="score">Score: <span style={{color: "#efe9a8"}}>{props.points}</span> | Top Score: {props.topscore}</li>
        </ul>
    </div>
);

export default NavBar;