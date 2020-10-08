import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput.js";
// import { useStateValue } from "./StateProvider";

 function Chat() {
    // const [{ user }, dispatch] = useStateValue();
     const { roomId } = useParams();
     const [roomDetails, setRoomDetails] = useState(null);
     const [roomMessages, setRoomMessages] = useState([]);
    
    //  show the room id of sidebar in chat room in real time  by changing the url link instantly by using params
   useEffect(() => {
       if (roomId) {
           db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
       }

    // database stuff
    db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data()))
    );
   //    database stuff
   }, [roomId]);

   console.log(roomDetails);
   console.log("Messages>>>", roomMessages);
 //  show the room id of sidebar in chat room in real time  by changing the url link instantly by using params

   return (
    <div className="chat">
    <div className="chat-header">
     <div className="chat-headerLeft">
     <h4 className="chat-channelName">
         <strong># {roomDetails?.name}</strong>
         <StarBorderOutlinedIcon />
     </h4>
     </div>
     <div className="chat-headerRight">
         <p>
         <InfoOutlinedIcon /> Details
         </p>
   
    </div>
    </div>
    <div className="chat-message">
        {/* <Messages.. /> */}
       {roomMessages.map(({ message, timestamp, user, userImage }) => (
           <Message 
           message={message}
           timestamp={timestamp}
           user={user}
           userImage={userImage}
             />
       ))}
    </div>
    <ChatInput channelName={roomDetails?.name} channelId = {roomId}  />
 </div>
 );
}
export default Chat;

