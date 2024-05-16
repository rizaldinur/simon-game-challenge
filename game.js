var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

//at Start game
//Press keyboard only once to start game
$(document).ready(function () {
  $(document).on("keydown", function () {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
});

//Step 4
//1 create click event handler
var clickCount = 0;
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

//cek jawaban berdasarkan tombol warna yg diklik
//jika klik terakhir benar, lanjutkan sampai klik = panjang gamepattern
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //tunggu sampai klik = panjang/jumlah gamepattern
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        //resset click pattern
        userClickedPattern = [];
        //next level
        nextSequence();
      }, 1000);
    }
    return;
  }
  //jika ada salah, langsung gameover
  else {
    gameOver();
    startOver();
  }
}

//buat gameOver fungsi
function gameOver() {
  //header ganti
  $("#level-title").text("Game Over, Press Any Key to Restart");

  //play sound game over
  playSound("wrong");
  //animasikan background flashing merah
  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
}

function startOver() {
  //reset level, reset gamepattern, clickpattern, clickcount
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  started = false;
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
  $("#level-title").text("Level " + level);
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
