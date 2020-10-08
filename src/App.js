import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat.js"
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";



function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState("Adarsh");
  return (

    //Bem naming Convention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (

       <>
      {/* Header */}
      <Header />
      <div className="app-body">
       {/* Sidebar */}
           <Sidebar />
            <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <div className="home-message-container">
              <h1>Welcome {user?.displayName} to AdarshTripathi.HQ</h1>
              <p >Join our channel and Add new channel to chat in a group <span>🌝</span></p>
              <img className="home-welcome-img" src="https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" alt=""/>
              </div>
            </Route>
           </Switch>
      {/* React Router -> chat Screen */}
     </div>
     </>
     )}
      </Router>
  </div>
  );
}

export default App;
