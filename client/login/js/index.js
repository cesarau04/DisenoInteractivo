var ref = new Firebase('https://docs-examples.firebaseio.com/web/data');


var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

/*var userName=false
var password=false;

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


$("#loginButton").click(function(){
  userName = $("#userName").val();
  password = $("#password").val();

  console.log(userName);
  console.log(password);
  if (!userName || !password || (!userName && !password) ) {
    $("#warningLogin").css("display", "block");
  }else{
    $("#warningLogin").css("display", "none");
    console.log("userName:" + userName + "  password:" + password);
  }
    window.location.replace("../../index.html");
})*/
