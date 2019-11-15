// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn.";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner + " wins!";
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", onClick);
    }
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");

    // Check rows for win
    for (var i = 0; i < 9; i += 3) {
        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }
    
    // Check columns for win
    for (var i = 0; i < 3; i++) {
        if (cells[0 + i].innerText !== "" && cells[0 + i].innerText === cells[3 + i].innerText && cells[3 + i].innerText === cells[6 + i].innerText) {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }

    // Check diagonals for win
    if (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0].innerText);
        return true;
    }   
    if (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[2].innerText);
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

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("dragstart", onDragStart);
    squares[i].addEventListener("dragenter", onDragEnter);
    squares[i].addEventListener("drop", onDrop);
    squares[i].addEventListener("dragexit", onDragExit);
}

function onDragStart(event) {
    console.log(event.target.dataset);
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("red")) return;
    if (event.target.classList.contains("checker")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDrop(event) {
    console.log(event);
}

function onDragExit(event) {
    console.log("dragleave", event);
    event.target.style.backgroundColor = null;
}