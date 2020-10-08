import React, { useState, useEffect  } from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/Inbox";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
   const [channels, setChannels] = useState([]);

      useEffect(() => {
          db.collection("rooms").onSnapshot((snapshot) => 
             setChannels(
                 snapshot.docs.map((doc)=> ({
                         id: doc.id,
                         name: doc.data().name,

                     }))
             )  
          );
      //run this code  when sidebar component loaded 
      }, [])

    return  (
     <div className="sidebar">
        <div className="sidebar-header">
            <div className="sidebar-info">
            <h2>Adarsh Tripathi Blog</h2>
           <h3>
               <FiberManualRecordIcon />
               {user?.displayName}
           </h3>
            </div>
            <CreateIcon />
        </div> 
        <SidebarOption  Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon}  title="Mentions & reactions"/>
        <SidebarOption Icon={DraftsIcon}  title="Saved Items"/>
        <SidebarOption Icon={BookmarkBorderIcon}  title="Channel Browsers"/>
        <SidebarOption Icon={PeopleAltIcon}  title="People & user groups"/>
        <SidebarOption Icon={AppsIcon}  title="Apps"/>
        <SidebarOption Icon={FileCopyIcon}  title="File Browsers"/>
        <SidebarOption Icon={ExpandLessIcon}  title="Show less"/>
        <hr />
        <SidebarOption Icon={ExpandMoreIcon}  title="Channels"/>
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels 👈"/>
        {/* connect to db and list all the channels */}
        {/* <SidebarOption.. /> */}
         {/* database stuff */}
        {channels.map(channel => (
           <SidebarOption title={channel.name} id={channel.id} /> 
        ))}
        {/* database stuff */} 
        </div>

    );
    
}

export default Sidebar;
