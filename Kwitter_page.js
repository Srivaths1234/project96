const firebaseConfig = {
    apiKey: "AIzaSyCEr62yd4odlE0unJRi-nGLJHJmkWYbngc",
    authDomain: "kwitterdatabase-ac0c0.firebaseapp.com",
    databaseURL:"https://kwitterdatabase-ac0c0-default-rtdb.firebaseio.com"
    projectId: "kwitterdatabase-ac0c0",
    storageBucket: "kwitterdatabase-ac0c0.appspot.com",
    messagingSenderId: "69101532180",
    appId: "1:69101532180:web:8a2c38d3475a800ba66301",
};
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
