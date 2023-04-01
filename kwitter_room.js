var firebaseConfig = {
    apiKey: "AIzaSyDJNLCKKlk8dbrhKhNNbylfp7ipeqCdemo",
    authDomain: "kwitter-37e11.firebaseapp.com",
    databaseURL: "https://kwitter-37e11-default-rtdb.firebaseio.com",
    projectId: "kwitter-37e11",
    storageBucket: "kwitter-37e11.appspot.com",
    messagingSenderId: "386217871182",
    appId: "1:386217871182:web:96fce7bf159e1675ab001f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();