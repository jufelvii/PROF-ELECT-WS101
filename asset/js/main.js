$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function login() {
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 if(username == 'admin' && password == 'admin'){
    window.location.href = "index.html";
 }else{
    alert('Invalid Account');
    window.location.href = "login.html";
 }
 
}