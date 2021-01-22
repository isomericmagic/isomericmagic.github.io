//wrap everything in an anonymous function to free up the global name space
//(function () {
  //hide the board 
  const boardDiv = document.getElementById('board');
  const body = document.getElementsByTagName('body')[0];
  const startDiv = document.createElement('div');
  const startHeader = document.createElement('header');
  const startH1 = document.createElement('h1');
  const startATag = document.createElement('a');
  const player1Li = document.getElementById('player1');
  const player2Li = document.getElementById('player2');
  const boxes = document.getElementsByClassName('box');
  const boxesParent = document.getElementsByClassName('boxes')[0];
  const endDiv = document.createElement('div');
  const endHeader = document.createElement('header');
  const endH1 = document.createElement('h1');
  const endP = document.createElement('p');
  const endATag = document.createElement('a');
  const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


  var gameBoard = {
    availableMoves: [0,1,2,3,4,5,6,7,8],
    takenMoves: [],
    currentPlayer: 'player1'
  }

  function addListenersBack () {
  	for (i = 0; i < 9; i++) {
  		if (gameBoard.takenMoves.includes(i)) {
  			makeListener(i);
  		}
  	}
  }

  function makeListener(number) {
  	if (number === 0) {
  		let box0 = document.getElementById('box-0');
  		box0.addEventListener("mouseover", showZero);
      box0.addEventListener("mouseout", hideZero);
  		box0.addEventListener("click", function boxZeroClick () {
        markSpot(box0);
        checkWinner();
        switchPlayers();
        box0.removeEventListener("click", boxZeroClick, false);
        box0.removeEventListener("mouseover", showZero, false);
        box0.removeEventListener("mouseout", hideZero, false);
      });
  	} else if (number === 1) {
  		let box1 = document.getElementById('box-1');
  		box1.addEventListener("mouseover", showOne);
      box1.addEventListener("mouseout", hideOne);
  		box1.addEventListener("click", function boxOneClick () {
        markSpot(box1);
        checkWinner();
        switchPlayers();
        box1.removeEventListener("click", boxOneClick, false);
        box1.removeEventListener("mouseover", showOne, false);
        box1.removeEventListener("mouseout", hideOne, false);
      });
    } else if (number === 2) {
  		let box2 = document.getElementById('box-2');
  		box2.addEventListener("mouseover", showTwo);
      box2.addEventListener("mouseout", hideTwo);
  		box2.addEventListener("click", function boxTwoClick () {
        markSpot(box2);
        checkWinner();
        switchPlayers();
        box2.removeEventListener("click", boxTwoClick, false);
        box2.removeEventListener("mouseover", showTwo, false);
        box2.removeEventListener("mouseout", hideTwo, false);
      });
    } else if (number === 3) {
  		let box3 = document.getElementById('box-3');
  		box3.addEventListener("mouseover", showThree);
      box3.addEventListener("mouseout", hideThree);
  		box3.addEventListener("click", function boxThreeClick () {
        markSpot(box3);
        checkWinner();
        switchPlayers();
        box3.removeEventListener("click", boxThreeClick, false);
        box3.removeEventListener("mouseover", showThree, false);
        box3.removeEventListener("mouseout", hideThree, false);
      });
    } else if (number === 4) {
  		let box4 = document.getElementById('box-4');
  		box4.addEventListener("mouseover", showFour);
      box4.addEventListener("mouseout", hideFour);
  		box4.addEventListener("click", function boxFourClick () {
        markSpot(box4);
        checkWinner();
        switchPlayers();
        box4.removeEventListener("click", boxFourClick, false);
        box4.removeEventListener("mouseover", showFour, false);
        box4.removeEventListener("mouseout", hideFour, false);
      });
    } else if (number === 5) {
  		let box5 = document.getElementById('box-5');
  		box5.addEventListener("mouseover", showFive);
      box5.addEventListener("mouseout", hideFive);
  		box5.addEventListener("click", function boxFiveClick () {
        markSpot(box5);
        checkWinner();
        switchPlayers();
        box5.removeEventListener("click", boxFiveClick, false);
        box5.removeEventListener("mouseover", showFive, false);
        box5.removeEventListener("mouseout", hideFive, false);
      });
    } else if (number === 6) {
  		let box6 = document.getElementById('box-6');
  		box6.addEventListener("mouseover", showSix);
      box6.addEventListener("mouseout", hideSix);
  		box6.addEventListener("click", function boxSixClick () {
        markSpot(box6);
        checkWinner();
        switchPlayers();
        box6.removeEventListener("click", boxSixClick, false);
        box6.removeEventListener("mouseover", showSix, false);
        box6.removeEventListener("mouseout", hideSix, false);
      });
    } else if (number === 7) {
  		let box7 = document.getElementById('box-7');
  		box7.addEventListener("mouseover", showSeven);
      box7.addEventListener("mouseout", hideSeven);
  		box7.addEventListener("click", function boxSevenClick () {
        markSpot(box7);
        checkWinner();
        switchPlayers();
        box7.removeEventListener("click", boxSevenClick, false);
        box7.removeEventListener("mouseover", showSeven, false);
        box7.removeEventListener("mouseout", hideSeven, false);
      });
    } else if (number === 8) {
  		let box8 = document.getElementById('box-8');
  		box8.addEventListener("mouseover", showEight);
      box8.addEventListener("mouseout", hideEight);
  		box8.addEventListener("click", function boxEightClick () {
        markSpot(box8);
        checkWinner();
        switchPlayers();
        box8.removeEventListener("click", boxEightClick, false);
        box8.removeEventListener("mouseover", showEight, false);
        box8.removeEventListener("mouseout", hideEight, false);
      });
    }  
  }

  var player1 = {
  	name: '',
  	takenMoves: []
  }

  var player2 = {
  	name: '',
    takenMoves: []
  }

  function testWinner () {
  	for (i = 0; i < winningCombos.length; i++) {
  		if (player1.takenMoves.includes(winningCombos[i][0]) && player1.takenMoves.includes(winningCombos[i][1]) && player1.takenMoves.includes(winningCombos[i][2])) {
        return true;
  		} else if (player2.takenMoves.includes(winningCombos[i][0]) && player2.takenMoves.includes(winningCombos[i][1]) && player2.takenMoves.includes(winningCombos[i][2])) {
        return true;
  		}
  	}
  	return false;
  }

  function markSpot(spotOnBoard) {
    let spotString = spotOnBoard.id.charAt(4);
    let spot = parseInt(spotString);
    let spotIndex = gameBoard.availableMoves.indexOf(spot);
    gameBoard.availableMoves.splice(spotIndex, 1);
    gameBoard.takenMoves.push(spot);
  	if (gameBoard.currentPlayer === 'player1') {
  		 spotOnBoard.className= "box box-filled-1";
  		 player1.takenMoves.push(spot);
  	} else if (gameBoard.currentPlayer === 'player2') {
  		spotOnBoard.className = "box box-filled-2";
  		player2.takenMoves.push(spot);		
  	}
  }

  function hoverSpot(spot) {
  	if (gameBoard.currentPlayer === 'player1') {
  		 spot.style.backgroundImage= "url('img/o.svg')";
  	} else if (gameBoard.currentPlayer === 'player2') {
  		spot.style.backgroundImage= "url('img/x.svg')";	
  	}
  }

  function unhoverSpot(spot) {
  		 spot.style.backgroundImage= "";
  }

  //setup functions to hide / show stuff
  function hideDiv(div) {
    div.style.display = 'none';
  }

  function showDiv(div) {
    div.style.display = '';
  }

  function player1Active () {
  	player1Li.className = "players active";
  	player2Li.className = "players";
  }

  function player2Active () {
  	player2Li.className = "players active";
  	player1Li.className = "players";
  }

  function switchPlayers () {
  	if (gameBoard.currentPlayer === 'player1') {
  		player2Active();
  		gameBoard.currentPlayer = 'player2';
  	} else if (gameBoard.currentPlayer === 'player2') {
  		player1Active();
  		gameBoard.currentPlayer = 'player1';		
  	}
  }

  function addIdToBox () {
  	for (i = 0; i < 9; i += 1) {
  		let currentBox = boxes[i];
      currentBox.id = 'box-'+ i.toString();
  	}
  }

  function showZero () {
  	hoverSpot(document.getElementById('box-0'));
  }

  function hideZero () {
  	unhoverSpot(document.getElementById('box-0'));
  }

  function showOne () {
  	hoverSpot(document.getElementById('box-1'));
  }

  function hideOne () {
  	unhoverSpot(document.getElementById('box-1'));
  }

  function showTwo () {
  	hoverSpot(document.getElementById('box-2'));
  }

  function hideTwo () {
  	unhoverSpot(document.getElementById('box-2'));
  }

  function showThree () {
  	hoverSpot(document.getElementById('box-3'));
  }

  function hideThree () {
  	unhoverSpot(document.getElementById('box-3'));
  }

  function showFour () {
  	hoverSpot(document.getElementById('box-4'));
  }

  function hideFour () {
  	unhoverSpot(document.getElementById('box-4'));
  }

  function showFive () {
  	hoverSpot(document.getElementById('box-5'));
  }

  function hideFive () {
  	unhoverSpot(document.getElementById('box-5'));
  }

  function showSix () {
  	hoverSpot(document.getElementById('box-6'));
  }

  function hideSix () {
  	unhoverSpot(document.getElementById('box-6'));
  }

  function showSeven () {
  	hoverSpot(document.getElementById('box-7'));
  }

  function hideSeven () {
  	unhoverSpot(document.getElementById('box-7'));
  }

  function showEight () {
  	hoverSpot(document.getElementById('box-8'));
  }

  function hideEight () {
  	unhoverSpot(document.getElementById('box-8'));
  }

  function makeBoxesClickable () {
    let box0 = document.getElementById('box-0');
    let box1 = document.getElementById('box-1');
    let box2 = document.getElementById('box-2');
    let box3 = document.getElementById('box-3');
    let box4 = document.getElementById('box-4');
    let box5 = document.getElementById('box-5');
    let box6 = document.getElementById('box-6');
    let box7 = document.getElementById('box-7');
    let box8 = document.getElementById('box-8'); 
    box0.addEventListener("mouseover", showZero);
    box0.addEventListener("mouseout", hideZero);
    box0.addEventListener("click", function boxZeroClick () {
      markSpot(box0);
      checkWinner();
      switchPlayers();
      box0.removeEventListener("click", boxZeroClick, false);
      box0.removeEventListener("mouseover", showZero, false);
      box0.removeEventListener("mouseout", hideZero, false);
    });
    box1.addEventListener("mouseover", showOne);
    box1.addEventListener("mouseout", hideOne);
    box1.addEventListener("click", function boxOneClick () {
      markSpot(box1);
      checkWinner();
      switchPlayers();
      box1.removeEventListener("click", boxOneClick, false);
      box1.removeEventListener("mouseover", showOne, false);
      box1.removeEventListener("mouseout", hideOne, false);
    });
    box2.addEventListener("mouseover", showTwo);
    box2.addEventListener("mouseout", hideTwo);
    box2.addEventListener("click", function boxTwoClick () {
      markSpot(box2);
      checkWinner();
      switchPlayers();
      box2.removeEventListener("click", boxTwoClick, false);
      box2.removeEventListener("mouseover", showTwo, false);
      box2.removeEventListener("mouseout", hideTwo, false);
    });
    box3.addEventListener("mouseover", showThree);
    box3.addEventListener("mouseout", hideThree);
    box3.addEventListener("click", function boxThreeClick () {
      markSpot(box3);
      checkWinner();
      switchPlayers();
      box3.removeEventListener("click", boxThreeClick, false);
      box3.removeEventListener("mouseover", showThree, false);
      box3.removeEventListener("mouseout", hideThree, false);
    });
    box4.addEventListener("mouseover", showFour);
    box4.addEventListener("mouseout", hideFour);
    box4.addEventListener("click", function boxFourClick () {
      markSpot(box4);
      checkWinner();
      switchPlayers();
      box4.removeEventListener("click", boxFourClick, false);
      box4.removeEventListener("mouseover", showFour, false);
      box4.removeEventListener("mouseout", hideFour, false);
    });
    box5.addEventListener("mouseover", showFive);
    box5.addEventListener("mouseout", hideFive);
    box5.addEventListener("click", function boxFiveClick () {
      markSpot(box5);
      checkWinner();
      switchPlayers();
      box5.removeEventListener("click", boxFiveClick, false);
      box5.removeEventListener("mouseover", showFive, false);
      box5.removeEventListener("mouseout", hideFive, false);
    });
    box6.addEventListener("mouseover", showSix);
    box6.addEventListener("mouseout", hideSix);
    box6.addEventListener("click", function boxSixClick () {
      markSpot(box6);
      checkWinner();
      switchPlayers();
      box6.removeEventListener("click", boxSixClick, false);
      box6.removeEventListener("mouseover", showSix, false);
      box6.removeEventListener("mouseout", hideSix, false);
    });
    box7.addEventListener("mouseover", showSeven);
    box7.addEventListener("mouseout", hideSeven);
    box7.addEventListener("click", function boxSevenClick () {
      markSpot(box7);
      checkWinner();
      switchPlayers();
      box7.removeEventListener("click", boxSevenClick, false);
      box7.removeEventListener("mouseover", showSeven, false);
      box7.removeEventListener("mouseout", hideSeven, false);
    });
    box8.addEventListener("mouseover", showEight);
    box8.addEventListener("mouseout", hideEight);
    box8.addEventListener("click", function boxEightClick () {
      markSpot(box8);
      checkWinner();
      switchPlayers();
      box8.removeEventListener("click", boxEightClick, false);
      box8.removeEventListener("mouseover", showEight, false);
      box8.removeEventListener("mouseout", hideEight, false);
    });
  }

  function clearBoard () {
  	addListenersBack();
    for (i = 0; i < 9; i ++) {
      gameBoard.availableMoves = [0,1,2,3,4,5,6,7,8];
      gameBoard.takenMoves = [];
      player1.takenMoves = [];
      player2.takenMoves = [];
      gameBoard.currentPlayer = 'player1';
      boxes[i].className = 'box';
      boxes[i].style = '';
    }
  }

  function startGame () {
  	hideDiv(board);
  	body.appendChild(startDiv);
  	startDiv.className = "screen screen-start";
  	startDiv.id = "start";
  	startDiv.appendChild(startHeader);
  	startHeader.appendChild(startH1);
  	startH1.innerHTML = "Tic Tac Toe";
  	startHeader.appendChild(startATag);
  	startATag.href = "#";
  	startATag.className = "button";
  	startATag.innerHTML = "Start game";
  	startATag.addEventListener("click", function () {
      hideDiv(startDiv);
      showDiv(board);
      addIdToBox();
      player1Active();
      makeBoxesClickable();    
    });
  }

  function checkWinner () {
    let needAListener = true;
    if (gameBoard.availableMoves.length > 0) {
      if (testWinner ()) {
      	hideDiv(board);
      	body.appendChild(endDiv);
      	if (gameBoard.currentPlayer === 'player1') {
      		showDiv(endDiv);
      	  endDiv.className = "screen screen-win screen-win-one";
      	  endDiv.id = "finish";
          endDiv.style = "";
          endDiv.appendChild(endHeader);
  	      endHeader.appendChild(endH1);
  	      endH1.innerHTML = "Tic Tac Toe";
  	      endHeader.appendChild(endP);
  	      endP.className = "message";
  	      endP.innerHTML = "Winner";
  	      endHeader.appendChild(endATag);
  	      endATag.href = "#";
  	      endATag.className = "button";
  	      endATag.innerHTML = "New game";
      	  if (needAListener === true){
            endATag.addEventListener("click", function () {
              hideDiv(endDiv);
              clearBoard();
              showDiv(board);
              addIdToBox();
              player1Active();
              gameBoard.currentPlayer = 'player1';
              endDiv.className = "";          
            });
          needAlistener = false;   
          }
      	} else if (gameBoard.currentPlayer === 'player2') {
      	  endDiv.className = "screen screen-win screen-win-two";
      	  endDiv.id = "finish";
          endDiv.style = "";
          endDiv.appendChild(endHeader);
          endHeader.appendChild(endH1);
          endH1.innerHTML = "Tic Tac Toe";
          endHeader.appendChild(endP);
          endP.className = "message";
          endP.innerHTML = "Winner";
          endHeader.appendChild(endATag);
          endATag.href = "#";
          endATag.className = "button";
          endATag.innerHTML = "New game";
          if (needAListener === true){
            endATag.addEventListener("click", function () {
              hideDiv(endDiv);
              clearBoard();
              showDiv(board);
              addIdToBox();
              player1Active();
              gameBoard.currentPlayer = 'player1';
              endDiv.className = "";          
            });
          needAlistener = false;   
          }
      	}
      } 
    } else if (gameBoard.availableMoves.length === 0 && testWinner ()) {
    	  hideDiv(board);
    	  body.appendChild(endDiv);
      	if (gameBoard.currentPlayer = 'player1') {
      	  endDiv.className = "screen screen-win screen-win-one";
      	  endDiv.id = "finish";	
          endDiv.style = "";
          endDiv.appendChild(endHeader);
          endHeader.appendChild(endH1);
          endH1.innerHTML = "Tic Tac Toe";
          endHeader.appendChild(endP);
          endP.className = "message";
          endP.innerHTML = "Winner";
          endHeader.appendChild(endATag);
          endATag.href = "#";
          endATag.className = "button";
          endATag.innerHTML = "New game";
          if (needAListener === true){
            endATag.addEventListener("click", function () {
              hideDiv(endDiv);
              clearBoard();
              showDiv(board);
              addIdToBox();
              player1Active();
              gameBoard.currentPlayer = 'player1';
              endDiv.className = "";          
            });
          needAlistener = false;   
          }
      	} else if (gameBoard.currentPlayer = 'player2') {
      	  endDiv.className = "screen screen-win screen-win-two";
      	  endDiv.id = "finish";
          endDiv.style = "";
          endDiv.appendChild(endHeader);
          endHeader.appendChild(endH1);
          endH1.innerHTML = "Tic Tac Toe";
          endHeader.appendChild(endP);
          endP.className = "message";
          endP.innerHTML = "Winner";
          endHeader.appendChild(endATag);
          endATag.href = "#";
          endATag.className = "button";
          endATag.innerHTML = "New game";
          if (needAListener === true){
            endATag.addEventListener("click", function () {
              hideDiv(endDiv);
              clearBoard();
              showDiv(board);
              addIdToBox();
              player1Active();
              gameBoard.currentPlayer = 'player1';
              endDiv.className = "";          
            });
          needAlistener = false;   
          }
      	}
    } else {
    	  hideDiv(board);
    	  body.appendChild(endDiv);
      	  endDiv.className = "screen screen-win screen-win-tie";
      	  endDiv.id = "finish";
          endDiv.style = "";
          endDiv.appendChild(endHeader);
          endHeader.appendChild(endH1);
          endH1.innerHTML = "Tic Tac Toe";
          endHeader.appendChild(endP);
          endP.className = "message";
          endP.innerHTML = "It's a Tie!";
          endHeader.appendChild(endATag);
          endATag.href = "#";
          endATag.className = "button";
          endATag.innerHTML = "New game";
          if (needAListener === true){
            endATag.addEventListener("click", function () {
              hideDiv(endDiv);
              clearBoard();
              showDiv(board);
              addIdToBox();
              player1Active();
              gameBoard.currentPlayer = 'player1';
              endDiv.className = "";          
            });
          needAlistener = false;   
          }
    }
  }

  startGame();
//}());