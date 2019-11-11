// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn.";
}

function setWinner() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + turn + " wins!";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    // Check rows for win
    for (var i = 0; i < 9; i += 3) {
        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i]);
            return true;
        }
    }
    
    // Check columns for win
    for (var i = 0; i < 3; i++) {
        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[3 + i].innerText && cells[3 + i].innerText === cells[6 + i].innerText) {
            setWinner(cells[0 + i]);
            return true;
        }
    }

    // Check diagonals for win
    if (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0]);
        return true;
    }   
    if (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[2]);
        return true;
    }    

    return false;
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        } else {
            turn = "x";
        }
        if (!checkForWin()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();