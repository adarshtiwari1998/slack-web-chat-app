import React, {Link} from 'react';
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import Clock from "./Clock.js";

function Header() {
    
    const [{ user }, dispatch] = useStateValue();

    return  <div className="header">
            <div className="header-left">
                {/* Avatar for logged in user */}
                <Avatar className="header-avatar" src={user?.photoURL} alt={user?.photoURL} />
                <div className="sidebarusername">
            <h3>{user?.displayName}</h3>
            </div>
                {/* Time icon */}
                <AccessTimeIcon  />
                <Clock  ></Clock>

            </div>
            <div className="header-search">
                {/* Search icon */}
                <SearchIcon />
                {/* input field */}
                <input placeholder="Search from Slack web app" />
            </div>
             <div className="header-right">
                 <HelpOutlineIcon />
                 {/* Help icon */}
             </div>
             </div>;
}

export default Header;
