var firebaseConfig = {
    apiKey: "AIzaSyBJdUnS1jMqFEDh9retxsDBeEoUVHGyv5Q",
    authDomain: "project-100-chat.firebaseapp.com",
    databaseURL: "https://project-100-chat-default-rtdb.firebaseio.com",
    projectId: "project-100-chat",
    storageBucket: "project-100-chat.appspot.com",
    messagingSenderId: "779561031218",
    appId: "1:779561031218:web:b3e31156d77c8daa360e2b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



