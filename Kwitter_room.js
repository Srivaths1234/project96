const firebaseConfig = {
    apiKey: "AIzaSyCEr62yd4odlE0unJRi-nGLJHJmkWYbngc",
    authDomain: "kwitterdatabase-ac0c0.firebaseapp.com",
    projectId: "kwitterdatabase-ac0c0",
    storageBucket: "kwitterdatabase-ac0c0.appspot.com",
    messagingSenderId: "69101532180",
    appId: "1:69101532180:web:8a2c38d3475a800ba66301",
    measurementId: "G-4JH9X5CG07"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
 room_name = document.getElementById("room_name").value;
 firebase.database.ref("/").child(room_name).update({
      pupose : "adding room name"
 });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";
     }
     
     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0   
           });
     
           document.getElementById("msg").value = "" ;
     }