const move = document.querySelectorAll(".box");
const erase = document.querySelector(".reset");

//036, 012, 048



let board = [];
move.forEach((singleBox, index) => {

    board[index] = 0;

});

const turn = ['X','O'];
let i = 0;
move.forEach((singleBox, index) => {


    singleBox.addEventListener("click", () => {

        if (board[index] !== 0) return;

        singleBox.textContent = `${turn[i]}`;
        board[index] = i;
        i = (i + 1) % 2

        let win = false;
        for (let i = 3; i <= 6; i += 3)
        {
            if (board[i - 3] !== null)
            {
                if (board[i - 3] !== board[i])
                {
                    break;
                }

                else (i === 6)
                {
                    win = true;
                }
            }
            


        }

        if (win === true)
        {
            alert("THERE IS A WINNER!!!");
            win = false;
            clearboard();
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
