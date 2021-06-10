
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDKO4WM4Rkz_00HjbwnAkzSBfUOFhCTTSw",
      authDomain: "kwitter-app-b7d6e.firebaseapp.com",
      databaseURL: "https://kwitter-app-b7d6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b7d6e",
      storageBucket: "kwitter-app-b7d6e.appspot.com",
      messagingSenderId: "619182303061",
      appId: "1:619182303061:web:fe07cd1863381436a7f1dc",
      measurementId: "G-6HD47YSTF6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
   Room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(Room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";   
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}