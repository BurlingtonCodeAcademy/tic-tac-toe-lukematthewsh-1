// I have not yet finished my AI function \\
// My counter does not reset the minutes after each hour, cant figure out why \\
// If invalid move clicked game ends, need to figure that out... \\


//-----------------------------------------------------------------------------------------------------------------------------
// Variables to be used throughout code \\

let player1 = document.getElementById('1player');
let player2 = document.getElementById('2player');
let status = document.getElementById('status');
let reset = document.getElementById('reset');

let gameBoard = document.getElementsByClassName('board')
let row1 = document.getElementById('row1')
let cell1 = document.getElementById('cell1')
let cell2 = document.getElementById('cell2')
let cell3 = document.getElementById('cell3')

let row2 = document.getElementById('row2')
let cell4 = document.getElementById('cell4')
let cell5 = document.getElementById('cell5')
let cell6 = document.getElementById('cell6')

let row3 = document.getElementById('row3')
let cell7 = document.getElementById('cell7')
let cell8 = document.getElementById('cell8')
let cell9 = document.getElementById('cell9')

let aiPlayer = "O";
let player = "X";
let Winner = null;

let board = [
    cell1, cell2, cell3,
    cell4, cell5, cell6,
    cell7, cell8, cell9
]

let prefferedMove = {
    move1: cell1,
    move2: cell2,
    move3: cell3,
    move4: cell4,
    move5: cell5,
    move6: cell6,
    move7: cell7,
    move8: cell8,
    move9: cell9,
}

//-----------------------------------------------------------------------------------------------------------------------------

function startTimer() {
    let seconds = 0;
    timer = setInterval(function () {
        seconds++;
        document.getElementById("seconds").innerText = seconds % 60;
        document.getElementById("minutes").innerText = parseInt(seconds / 60);
        document.getElementById("hours").innerText = parseInt(seconds / 3600);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

//-----------------------------------------------------------------------------------------------------------------------------
// Function for ai game play \\

function available() {
    for (let cell of board) {
        if (cell.textContent = "") {
        }
    }
}

player1.addEventListener('click', () => {
    event.target.disabled = true;
    status.textContent = 'Player X, your turn!'
    if (status.textContent = 'Player O, your turn') {

    }
})

//-----------------------------------------------------------------------------------------------------------------------------
// Function to reset board \\

reset.addEventListener('click', () => {
    window.location.reload()
})

//-----------------------------------------------------------------------------------------------------------------------------
// Functions for player vs player mode \\

player2.addEventListener('click', () => {
    startTimer()
    event.target.disabled = true;
    status.textContent = 'Player X, your turn!'
})
let counter = 0
twoPlayer()
function twoPlayer() {
    for (let cell of board) {
        cell.addEventListener('click', () => {
            counter = counter + 1
            if (counter === 9 && Winner === null) {
                status.textContent = "Its a tie."
                stopTimer()
            }
            if (cell.textContent === "X" || cell.textContent === "O") {
                status.textContent = "Invalid move! Pick an empty spot."
            }
            if (status.textContent === 'Player X, your turn!') {
                cell.textContent = 'X';
                player = 'O'
                status.textContent = 'Player O, your turn!'
            } else if (status.textContent === 'Player O, your turn!') {
                cell.textContent = 'O';
                player = 'X'
                status.textContent = 'Player X, your turn!'
            }
            if (cell1.textContent === 'X' && cell2.textContent === 'X' && cell3.textContent === 'X') { Winner = 'X' }
            if (cell4.textContent === 'X' && cell5.textContent === 'X' && cell6.textContent === 'X') { Winner = 'X' }
            if (cell7.textContent === 'X' && cell8.textContent === 'X' && cell9.textContent === 'X') { Winner = 'X' }
            if (cell1.textContent === 'X' && cell4.textContent === 'X' && cell7.textContent === 'X') { Winner = 'X' }
            if (cell2.textContent === 'X' && cell5.textContent === 'X' && cell8.textContent === 'X') { Winner = 'X' }
            if (cell3.textContent === 'X' && cell6.textContent === 'X' && cell9.textContent === 'X') { Winner = 'X' }
            if (cell1.textContent === 'X' && cell5.textContent === 'X' && cell9.textContent === 'X') { Winner = 'X' }
            if (cell3.textContent === 'X' && cell5.textContent === 'X' && cell7.textContent === 'X') { Winner = 'X' }
            if (Winner === 'X') {
                status.textContent = "Player X wins the game.";
                stopTimer()
            }
            // Check if O wins
            if (cell1.textContent === 'O' && cell2.textContent === 'O' && cell3.textContent === 'O') { Winner = 'O' }
            if (cell4.textContent === 'O' && cell5.textContent === 'O' && cell6.textContent === 'O') { Winner = 'O' }
            if (cell7.textContent === 'O' && cell8.textContent === 'O' && cell9.textContent === 'O') { Winner = 'O' }
            if (cell1.textContent === 'O' && cell4.textContent === 'O' && cell7.textContent === 'O') { Winner = 'O' }
            if (cell2.textContent === 'O' && cell5.textContent === 'O' && cell8.textContent === 'O') { Winner = 'O' }
            if (cell3.textContent === 'O' && cell6.textContent === 'O' && cell9.textContent === 'O') { Winner = 'O' }
            if (cell1.textContent === 'O' && cell5.textContent === 'O' && cell9.textContent === 'O') { Winner = 'O' }
            if (cell3.textContent === 'O' && cell5.textContent === 'O' && cell7.textContent === 'O') { Winner = 'O' }
            if (Winner === 'O') {
                status.textContent = "Player O wins the game.";
                stopTimer()
            }
        })
    }
}

//-----------------------------------------------------------------------------------------------------------------------------



