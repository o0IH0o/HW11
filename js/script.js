$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyBywavMEEztzhHotRNzpChkwomm9RMjgaE",
    authDomain: "test-f086a.firebaseapp.com",
    databaseURL: "https://test-f086a.firebaseio.com",
    projectId: "test-f086a",
    storageBucket: "test-f086a.appspot.com",
    messagingSenderId: "593394510541"
  };
  firebase.initializeApp(config);

  var dbChatRoom = firebase.database().ref().child('chatroom');
  var dbUser = firebase.database().ref().child('user');

  const $email = $("#email");
  const $password = $("#password");
  const $btnsignup = $('#signup');
  const $btnsignin = $("#signin");
  const $btnsubmit = $("#submit");
  const $name = $("#name");
  const $job = $("job");
  const $age = $("age");
  const $description = $("#description");
  const $btnsent = $("#sentmessage")

  $(".signinup").show();
  $(".information").hide();
  $(".chatroom").hide();
  $(".informationlayout").hide();
  $btnsignup.click(function(e){
    const email = $email.val();
    const password = $password.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(function(e){
      console.log(e.message);
    });
  });
  $btnsignin.click(function(e){
    const email = $email.val();
    const password = $password.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function(e){
      console.log(e.message);
    });
  });
  $btnsignin.click(function(e){

    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(function(e){
      console.log(e.message);
    });
    promise.then(function(e){
      $(".signinup").hide();
      $(".information").show();
      $(".chatroom").hide();
      $(".informationlayout").hide();
    });
  });
  $btnsubmit.click(function(e){
    const user = firebase.auth().currentUser;
    const promise = user.updateProfile({
      displayName: name,
    });
    promise.then(function(){

     const dbUserid = dbUser.child(user.uid);
     dbUserid.update({'age':age,'job':job,'description':description});

     $(".signinup").hide();
     $(".information").hide();
     $(".chatroom").show();
     $(".informationlayout").hide();
   });
  });
  $(".informationlist").click(function(e){

  });
  $(".upgratelist").click(function(e){
    $(".signinup").hide();
    $(".information").show();
    $(".chatroom").hide();
    $(".informationlayout").hide();
  });
  $(".chatroomlist").click(function(e){
    $(".signinup").hide();
    $(".information").hide();
    $(".chatroom").show();
    $(".informationlayout").hide();
  });
});
