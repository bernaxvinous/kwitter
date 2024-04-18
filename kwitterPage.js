//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyDRF0dB4Bcz_v68btlnVD-QN93U1iEX2us",
      authDomain: "kwitter-627b1.firebaseapp.com",
      databaseURL: "https://kwitter-627b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-627b1",
      storageBucket: "kwitter-627b1.appspot.com",
      messagingSenderId: "598183737709",
      appId: "1:598183737709:web:c6390c8a46675c0dcf4264"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    userName = localStorage.getItem("userName"); 
    roomName = localStorage.getItem("roomName");

 function send()
{
       msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
      });   
}

      document.getElementById("msg").value = ""; 
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name']
message = messageData['message']
like = message['like']
newWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></img></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +" <span></button><hr>";

row = nameWithTag + messageWithTag +likeButton + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updateLike(messageID)
{
      console.log("botão like pressionado - " + messageID);
      button_id = messageId;
      likes = document.getElementById(button_id).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);

      firebase.database().ref(roomName).child(messageId).update({

      });
      
}

function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location.replace("index.html");
      

}




