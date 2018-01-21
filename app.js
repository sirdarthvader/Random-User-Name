









var btn = document.querySelector("#btn");
var url = 'https://randomuser.me/api/';
var fullNameDisp = document.querySelector("#fullname");
var imageDisp = document.querySelector("#avatar");
var usernameDisp = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var cityDisp = document.querySelector("#city");



btn.addEventListener("click", function(){
  fetch(url)
  .then(parseJSON)
  .then(function(data){
    var fullname = data.name.first;
    var lastname = data.name.last;
    var username = data.login.username;
    var image = data.picture.medium;
    var email = data.email;
    var city = data.location.city;
    fullNameDisp.innerText = fullname +  " " + lastname;
    usernameDisp.innerText = username;
    imageDisp.src = image;
    emailDisp.innerText = email;
    cityDisp.innerText = city;
  })
});

function parseJSON(res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}