const move = document.querySelectorAll(".box");
const erase = document.querySelector(".reset");

//Rows: 012, 345, 678    (+1)
//Columns: 036, 147, 258 (+3)
//Diagonals: 048, 246    (+4)


let board = [];
move.forEach((singleBox, index) => {

    board[index] = null;

});

const win_comb = 
    [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4 , 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

const turn = ['X','O'];
let player = 0;
let active = true;
let winstate = false;
let boardtime;


winstate = false;

move.forEach((singleBox, index) => {

singleBox.addEventListener("click", () => {

    if (!active || board[index] !== null) return;

    singleBox.textContent = `${turn[player]}`;
    board[index] = player;
    player = (player + 1) % 2

    let streak0 = 0;
    let streakX = 0;
    for (let i = 0; i < 8; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            if (board[win_comb[i][j]] === 0)
            {
                streak0++;
            }

            else if (board[win_comb[i][j]] === 1)
            {
                streakX++;
            }
        }

        if (streak0 === 3 || streakX === 3)
        {
            for (j = 0; j < 3; j++)
            {
                move[win_comb[i][j]].style.color = "red"; 
            }
            
            winstate = true;
            win();
            return;

        }

        streak0 = streakX = 0;

    }


    if (!board.includes(null) && winstate === false)
    {
        active = false;
        setTimeout(() => {
            alert("*lights cigar*\nThere are no winners in this game...\nYou know what that means")
            clearboard();
        }, 2000);
    }
    
});


});


erase.addEventListener("click", () => {
    clearTimeout(boardtime);
    clearboard();
});


function win()
{
    active = false;
    setTimeout(() => 
        {
            alert("THERE IS A WINNER!!!");
        },  200);

    boardtime = setTimeout(() => 
    {
        alert("Clearing board...");
        clearboard();
    },  8000);
}


function clearboard() {

   move.forEach((singleBox, index) => {
        move[index].style.color = "black";
        singleBox.textContent = null;
        board[index] = null;
        active = true;
        winstate = false;
    });
}
