const express = require('express');
const app = express();
// bodyParser works with express
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, function () {
  console.log("Server started on port:3000");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
 //  console.log(req);
 //  var num1 = parseInt(req.params.num1);
 //  console.log(num1);
 // var num2 = parseInt(req.params.num2);
 // console.log(num2);
 // var sum = (num1 + num2).toString();
 // res.send(sum);
 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);
 var sum = num1 + num2;
 res.send("The result of Calculation is " + sum);
});


app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
 var Weight = parseFloat(req.body.Weight);
 var Height = parseFloat(req.body.Height);
 var bmi = Weight/(Height*Height);
 res.send("Your BMI is " + bmi);
});

// var heading = document.querySelector("h1");
// heading.addEventListener("click", function() {
//   alert("You clicked on heading !");
// });
