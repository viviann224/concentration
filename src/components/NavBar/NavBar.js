import React from "react";
import "./navbar.css";

const NavBar = props => (
    <div>
    {console.log(props)}
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Concentration</a></li>
            <li>
                | {props.statusmsg} |
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.points}</span> | Top Score: {props.topscore}</li>
        </ul>
    </div>
);

export default NavBar;