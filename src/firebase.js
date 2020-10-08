
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzfR1Dk5_nedaelPm7i3Wr2-HjfGdj3CY",
    authDomain: "slack-web-chat-app.firebaseapp.com",
    databaseURL: "https://slack-web-chat-app.firebaseio.com",
    projectId: "slack-web-chat-app",
    storageBucket: "slack-web-chat-app.appspot.com",
    messagingSenderId: "933997062730",
    appId: "1:933997062730:web:97fc8a413de109248614b3",
    measurementId: "G-CZM96P2Z53"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
