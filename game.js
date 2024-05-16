var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;

//at Start game
//Press keyboard only once to start game
$(document).ready(function () {
  if (level === 0) {
    $(this).on("keydown", function (e) {
      nextSequence();
    });
  }
});

//Step 4
//1 create click event handler
var answer = false;
var clickCount = 0;
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //itung setiap click
  clickCount++;

  playSound(userChosenColour);
  animatePress(userChosenColour);

  //cek jawaban berdasarkan tombol warna yg diklik
  //jika klik terakhir benar, lanjut sampai klik = length gamepattern
  answer = checkAnswer(clickCount);
  if (answer === true) {
    //tunggu sampai klik = panjang/jumlah gamepattern
    if (clickCount === gamePattern.length) {
      setTimeout(() => {
        //resset click pattern dan click count
        userClickedPattern.length = 0;
        clickCount = 0;

        //next
        nextSequence();
      }, 1000);
    }
    return;
  }
  //jika salah, gameover
  else {
    gameOver();
  }
});

function gameOver() {
  //reset level, reset gamepattern, clickpattern, clickcount
  level = 0;
  userClickedPattern.length = 0;
  gamePattern.length = 0;
  clickCount = 0;

  //header ganti
  $("h1").text("Game Over, Press Any Key to Restart");

  //animasikan background flashing merah
  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);

  //play sound game over
  playSound("wrong");
}

//step 8 check answer on every last color that user click button
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel - 1] === userClickedPattern[currentLevel - 1]) {
    console.log("correct");
    return true;
  }
  console.log("wrong");
  return false;
}

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

  //change level every new sequence
  level++;
  $("h1").text("Level " + level);
}

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
