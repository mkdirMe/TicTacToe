const move = document.querySelectorAll(".box");
const erase = document.querySelector(".reset");

//Rows: 012, 345, 678    (+1)
//Columns: 036, 147, 258 (+3)
//Diagonals: 048, 246    (+4)


let board = [];
move.forEach((singleBox, index) => {

    board[index] = null;

});

const turn = ['X','O'];
let player = 0;
move.forEach((singleBox, index) => {


    singleBox.addEventListener("click", () => {

        if (board[index] !== null) return;

        singleBox.textContent = `${turn[player]}`;
        board[index] = player;
        player = (player + 1) % 2

        let win = false;
        for (let i = 3; i <= 6; i += 3)
        {
            if (board[i - 3] !== null)
            {
                if (board[i - 3] !== board[i])
                {
                    break;
                }

                else if (i === 6)
                {
                    win = true;
                }
            }
        }


        if (win === true)
        {
            setTimeout(() => {
                alert("THERE IS A WINNER!!!")
                win = false;
                clearboard();
            }, 500);
        } 

        if (!board.includes(null))
        {
            setTimeout(() => {
                alert("*lights cigar*\nThere are no winners in this game...\nYou know what that means")
                clearboard();
            }, 1000);

        }
        
    });


});



erase.addEventListener("click", () => {
    clearboard();
});


function clearboard() {

   move.forEach((singleBox, index) => {

        singleBox.textContent = null;
        board[index] = null;
    });
}
