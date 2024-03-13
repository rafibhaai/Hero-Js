// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden")

//     const playGroundSection = document.getElementById("play-ground");
//     playGroundSection.classList.remove("hidden")
// }

function handelKybordButtonPress(event) {
  const playerPressed = event.key;
  console.log("Player Pressed :", playerPressed);
  // Stop The game if pressed "ESC"
  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  console.log(playerPressed, expectedAlphabet);
  // Check Matched or Not

  if (playerPressed === expectedAlphabet) {
    console.log("You Get A Point");

    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextELementValueById("current-score", updatedScore);

    //   -//////////////////////////////////////////
    // Update Score
    // 1)Get the current score
    // const currentScoreElement = document.getElementById("current-score")
    // const currentScoreText = currentScoreElement.innerText
    // const currentScore = parseInt(currentScoreText)

    // const currentScore = getTextElementValueById("current-score")

    // // 2)Update the life/score 1
    const newScore = currentScore + 1;
    // // 3)Show the updated score
    // currentScoreElement.innerText = newScore
    // // Start a new round

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Oh No! You lost a life");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextELementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // ------------------------------------
    // //1) get the current life number
    // const currentLifeElement = document.getElementById("current-life")
    // const currentScoreText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentScoreText);
    // //2) reduce the life count
    // const newLife = currentLife - 1;
    // //3)Display the updated life count
    // currentLifeElement.innerText = newLife
  }
}
document.addEventListener("keyup", handelKybordButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getArandomAlphabet();
  console.log("Your Random Alphabet :", alphabet);
  // set random generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background Color
  setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset everthing before playing again
  setTextELementValueById("current-life", 5);
  setTextELementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // Update Final Score
  // 1)Get The Final Score
  const lastScore = getTextElementValueById("current-score");
  setTextELementValueById("last-score", lastScore);
  // Clear the last selected Alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
