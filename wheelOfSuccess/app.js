//Game Show App

const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseList = document.querySelector('#phrase > ul');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('a.btn__reset');
const keyboardButtons = document.getElementsByTagName('button');

startButton.addEventListener('click', () => {
	overlay.style.display = 'none';
});

const phrases = [
'A Chip on Your Shoulder',
'An Arm and a Leg',
'Back to Square One',
'Between a Rock and a Hard Place',
'Close But No Cigar',
'Curiosity Killed The Cat',
'Elephant In The Room',
'Fight Fire With Fire',
'Fish Out Of Water',
'Go Out On a Limb',
'Hold Your Horses',
'Jump The Gun',
'Keep Your Eyes Peeled',
'Let The Cat Out Of The Bag',
'Like Father Like Son',
'Needle In a Haystack',
'Out Of Left Field',
'Playing For Keeps',
'Put a Sock In It',
'Quick And Dirty',
'Raining Cats and Dogs',
'Roll With The Punches',
'Short End Of The Stick',
'Slow And Steady Wins The Race',
'Talk The Talk',
'The Plot Thickens',
'Under The Weather',
'Wild Goose Chase'
];

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

function getRandomPhraseArray(arr) {
  let chosenIndex = getRandomNumber(arr.length - 1); 
  let chosenPhrase = arr[chosenIndex];
  let newArray = chosenPhrase.split('');
  return newArray;
}

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let newLine = document.createElement('li');
    newLine.textContent = arr[i];
    if (arr[i] !== ' ') {
      newLine.className = 'letter';	
    } else if (arr[i] === ' ') {
    	newLine.className = 'space';
    };
    phraseList.appendChild(newLine);
  }
}

function checkLetter(chosenButton) {
	let letters = document.getElementsByClassName('letter');
	let chosenLetter = null;
  for (let i = 0; i < letters.length; i += 1) {
    if (chosenButton.textContent.toUpperCase() === letters[i].textContent.toUpperCase()) {
      letters[i].className += ' show';
      chosenLetter = letters[i].textContent;
    }
  }
  return chosenLetter;
}

function checkWin() {
  let shownLetters = document.getElementsByClassName('show');
  let totalLetters = document.getElementsByClassName('letter');
	if (shownLetters.length === totalLetters.length ) {
		let winOverlay = document.getElementById('winOverlay');
		winOverlay.style.display = '';
	} else if (missed >= 5) {
    let loseOverlay = document.getElementById('loseOverlay');
		loseOverlay.style.display = '';
	}
}

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
  	e.target.className = 'chosen';
  	e.target.disabled = true;
  	let letterFound = checkLetter(e.target);
  	if (letterFound === null) {
  	  missed += 1;
      let currentScoreMarker = document.querySelector(`.tries:nth-child(${missed}) > img`);
      currentScoreMarker.src="images/lostHeart.png";
  	}
  console.log(missed);	
  checkWin();	
  }
});

function createOverlays(){
	//setup Win Overlay
	const mainDiv = document.getElementsByClassName('main-container')[0];
	const winDiv = document.createElement('div');
	winDiv.id = 'winOverlay';
	winDiv.className = 'win';
	winDiv.style.display = 'none';
	mainDiv.appendChild(winDiv);
	const winDivHeader = document.createElement('h2');
	winDivHeader.className = 'title';
	winDivHeader.textContent = 'Wheel of Success';
	winDiv.appendChild(winDivHeader);
	const winDivButton = document.createElement('a');
	winDivButton.className = 'btn__reset';
	winDivButton.id = 'win-button';
	winDivButton.textContent = 'Play Again';
	winDiv.appendChild(winDivButton);
	const winDivMessage = document.createElement('h1');
	winDivMessage.className = 'title';
	winDivMessage.textContent = 'You Win!';
	winDiv.appendChild(winDivMessage);
	//setup Lose Overlay
	const loseDiv = document.createElement('div');
	loseDiv.id = 'loseOverlay';
	loseDiv.className = 'lose';
	loseDiv.style.display = 'none';
	mainDiv.appendChild(loseDiv);
	const loseDivHeader = document.createElement('h2');
	loseDivHeader.className = 'title';
	loseDivHeader.textContent = 'Wheel of Success';
	loseDiv.appendChild(loseDivHeader);
	const loseDivButton = document.createElement('a');
	loseDivButton.className = 'btn__reset';
	loseDivButton.id = 'lose-button';
	loseDivButton.textContent = 'Try Again';
	loseDiv.appendChild(loseDivButton);
	const loseDivMessage = document.createElement('h1');
	loseDivMessage.className = 'title';
	loseDivMessage.textContent = 'You Lose!';
	loseDiv.appendChild(loseDivMessage);
}

function addOverlayEventListeners() {
	const winButton = document.querySelector('a#win-button');
	winButton.addEventListener('click', () => {
	  const winOverlay = document.getElementById('winOverlay');
	  winOverlay.style.display = 'none';
	  resetScore();
	  resetBoard();
  });
  const loseButton = document.querySelector('a#lose-button');
	loseButton.addEventListener('click', () => {
	  const loseOverlay = document.getElementById('loseOverlay');
	  loseOverlay.style.display = 'none';
	  resetScore();
	  resetBoard();
  });
}

function resetScore() {
  for (let i = 1; i < 6; i += 1) {
    let currentScoreMarker = document.querySelector(`.tries:nth-child(${i}) > img`);
    currentScoreMarker.src="images/liveHeart.png";  	
  }
}

function resetBoard() {
	phraseList.innerHTML = '';
	phraseArray = getRandomPhraseArray(phrases);
	addPhraseToDisplay(phraseArray);
	missed = 0;
	let keys = document.getElementsByTagName('button');
	for (let i = 0; i < 26; i += 1) {
    keys[i].className = '';
    keys[i].disabled = false;
	}
}


//play game
let phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);
createOverlays();
addOverlayEventListeners();