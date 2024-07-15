import React from "react";
import "./UserIcon.css";
import {Link} from "react-router-dom";

const UserIcon = () => {
    return (
      <Link to={`/myAccount`}>
        <div>
          <img src="https://e7.pngegg.com/pngimages/213/343/png-clipart-computer-icons-user-background-icon-cdr-monochrome.png" alt="profile user"></img>
        </div>
      </Link>
    );
}

export default UserIcon;