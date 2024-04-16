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

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";      
}

//Fim do código
      } });  }); }
getData();
