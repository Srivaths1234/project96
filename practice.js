const firebaseConfig = {
    apiKey: "AIzaSyDZvEGXGQnDL7nmz8RFd2lJbbRLlFWgNVY",
    authDomain: "kwitter-webapp-project-1090c.firebaseapp.com",
    projectId: "kwitter-webapp-project-1090c",
    storageBucket: "kwitter-webapp-project-1090c.appspot.com",
    messagingSenderId: "543319423536",
    appId: "1:543319423536:web:2cbd9f0c25c5ade0598bf5",
    measurementId: "G-5S2BXTDXTG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }