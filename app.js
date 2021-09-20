var badluckMsge = "This number is \n not so lucky 😕";
var luckMsg = "YAY! 🥳 🥳 🥳 \n you are lucky";

var button = document.querySelector("#check");
var dateField = document.querySelector(".bday");
var luckField = document.querySelector(".luckyNum");
var outputField = document.querySelector("#successMsg");
var container = document.querySelector(".aside");

button.addEventListener("click", function () {
  var userDate = dateField.value.toString().replaceAll("-", "");
  var luckyNum = luckField.value.toString();
  var datesum = 0;
  for (let i = 0; i < userDate.length; i++) {
    datesum = datesum + parseInt(userDate[i]);
  }

  if (datesum % Number(luckyNum) !== 0) {
    outputField.innerText = badluckMsge;
  } else {
    outputField.innerText = luckMsg;
  }
});
