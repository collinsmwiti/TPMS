  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJNXzjr3c6GsSQQjz8xmJ6I4kURAPtaB4",
    authDomain: "tpms-d7c16.firebaseapp.com",
    databaseURL: "https://tpms-d7c16.firebaseio.com",
    projectId: "tpms-d7c16",
    storageBucket: "",
    messagingSenderId: "831486893572"
  };
  firebase.initializeApp(config);

  //manage users to sign in
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in
  //
  //   } else {
  //     // No user is signed in.
  //     alert("Please put your email and password");
  //   }
  // });



  //login button
  $("#login").submit(function(error) {
    error.preventDefault();
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();

    if (email !== "" && password !== "") {

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
          window.location.replace('./home.html');
        }).catch(function(error) {
          // $("#loginError").show().text(error.message);
          console.log(error);
        });
    }
  });

  $('#register').submit(function(event) {
    event.preventDefault();
    var email = $('#signUpEmail').val();
    var password = $('#signUpPassword').val();

    // console.log(email);
    // console.log(password);

    if (!email || !password) {
      return console.log('email and password required');
    }

    // Register user
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        window.location.replace("./home.html");
      })
      .catch(function(error) {
        console.log('register error', error);
      });
  });

  $('#logout').click(function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.replace("./index.html");
      console.log("Signed out");
    }).catch(function(error) {
      console.log(error);
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    // app.user = user;
    console.log('user', user);

    // if (!user) {
    //   window.location.replace("./index.html");
    // }
  });
