//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name2 +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
Like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.do)'>";
span_with_tag = "<span class='glyphicon glyphicon-thums-up'>Like: "+ like +"</span></button><hr>";
  

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
 
function updateLike(message_id)
{
      console.log("click on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes 
      });
}