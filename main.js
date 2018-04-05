var whosTurn = '1';
var rockNumber = 16;
var isPlayer1Turn = true;

function displayRocksLeft() {
    console.log("There are " + rockNumber + " rocks left on the board.");
};

function hasSomeoneWon() {
    if (rockNumber <= 0) {
        return true
    } else {
        return false
    }
};

function computerTurn() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    rockNumber -= randomNumber;
    displayRocksLeft();
    isPlayer1Turn = !isPlayer1Turn
}

function juggernautTurn() {
    if (rockNumber === 7) {
        rockNumber -= 2
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    } else if (rockNumber === 4) {
        rockNumber -= 3
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    } else if (rockNumber === 3) {
        rockNumber -= 2
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    } else if (rockNumber === 2) {
        rockNumber -= 1
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    } else {
        rockNumber -= 3 
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    }
}

function playerTurn() {
    if (hasSomeoneWon()) {
        console.log("The game is over!")
    } else {
        var numberPrompt = parseInt(prompt("There are " + rockNumber + " rocks left on the board. Enter a number between 1 and 3"));
        if (numberPrompt < 4 && numberPrompt > 0) {
            rockNumber -= numberPrompt;
        } else {
            alert("I said between 1 and 3, dummy.")
        }
        displayRocksLeft();
        isPlayer1Turn = !isPlayer1Turn
    }
          
};

function normalMode() {
    if (isPlayer1Turn) {
        playerTurn();
    } else {
        computerTurn();
    }
}

function juggernautMode() {
    if (isPlayer1Turn) {
        playerTurn();
    } else {
        juggernautTurn();
    }
}

function whoWon() {
    var victor = "";
    if (!isPlayer1Turn) {
        victor = "The Computer";
    } else {
        victor = "You";
    }
    alert(victor + " won!");
}

function gameModeSelection() {
    var modeSelectorPrompt = prompt("Select your mode: 1 for Juggernaut mode and 2 for Normal mode ");
    if (modeSelectorPrompt == '1') {
        while (!hasSomeoneWon()) {
            juggernautMode();
        };
        whoWon();
    } else if (modeSelectorPrompt == '2') {
        while (!hasSomeoneWon()) {
            normalMode();
        };
        whoWon();
    } else {
        alert("That's not an option!")
    }
}

gameModeSelection();