var badluckMsge = "This number is \n not so lucky 😕";
var luckMsg = "YAY! 🥳 🥳 🥳 \n you are lucky";

var button = document.querySelector("#check");
var dateField = document.querySelector(".bday");
var luckField = document.querySelector(".luckyNum");
var outputField = document.querySelector("#successMsg");

button.addEventListener("click", function () {
  var userDate = dateField.value.toString().replaceAll("-", "");
  var luckyNum = luckField.value.toString();
  var datesum = 0;
  for (let i = 0; i < userDate.length; i++) {
    datesum = datesum + parseInt(userDate[i]);
  }
  var sum = datesum;
  console.log("datesum", datesum);
  for (let i = 0; i < luckyNum.length; i++) {
    sum = sum + parseInt(luckyNum[i]);
  }
  console.log("sum", sum);
  if (sum % Number(luckyNum) !== 0) {
    console.log("in else block");
    outputField.innerText = badluckMsge;
  } else {
    console.log("in if block");
    outputField.innerText = luckMsg;
  }
});
