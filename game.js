var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //Step 3

  //1. select button with id == randomChosenColour
  //2. make flashing animation
  $("#" + randomChosenColour)
    .fadeOut(200)
    .fadeIn(100);

  //3 play sound for button color selected
  playSound(randomChosenColour);
}

//Step 4
//1 create click event handler

$("#green").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  console.log(userChosenColour);
});

$("#yellow").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  console.log(userChosenColour);
});

$("#red").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  console.log(userChosenColour);
});

$("#blue").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  console.log(userChosenColour);
});

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}
