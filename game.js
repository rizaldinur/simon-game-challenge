var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

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
  var sound = new Audio("./sounds/" + randomChosenColour + ".mp3");
  sound.play();
}
