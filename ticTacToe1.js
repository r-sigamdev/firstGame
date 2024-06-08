let person1 = prompt("Enter 1st person's name:").toUpperCase();
let person2 = prompt("Enter 2nd person's name:").toUpperCase();
alert(`${person1}'s symbol is X`);
alert(`${person2}'s symbol is O`);

console.log(person1);
console.log(person2);




let boxes = document.querySelectorAll(".box");
let declare = document.querySelector(".declare");
let msgCont = document.querySelector(".msgCont");
let newBtn = document.querySelector(".newBtn");
let resetBtn = document.querySelector(".resetBtn");
let greet = document.querySelector(".greet");
let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");







let person1WinCount = 0;
let person2WinCount = 0;
let filled = 0;
let turn = true;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];




//  -------------------------------------------- code
boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        filled++;
        console.log(filled);

        if (turn){
            box.innerText = "X";
            turn = false;
            box.style.color = "red";
        } else {
            box.innerText = "O";
            turn = true;
            box.style.color = "green";

        }
        box.disabled = true;
        checkWinner();
        if (filled == 9){
            draw();
        }
    });
});


// showWinner
const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msgCont.classList.remove("hide");
    declare.innerText = `Congratulations 🎊🎊🎊 The winner is ${winner}`;
    disableBoxes();
    score1.innerHTML = person1WinCount;
    score2.innerText = person2WinCount;
}

const draw = () => {
    msgCont.classList.remove("hide");
    declare.innerText = "The match is draw. Please try again!";
    filled = 0;


}

const checkWinner = () =>{
    for (pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                if (pos1Val == "X"){
                    person1WinCount ++;
                    showWinner(person1);
                    console.log(`${person1}'s win count =`, person1WinCount);
                } else {
                    person2WinCount ++;
                    showWinner(person2);
                    console.log(`${person2}'s win count =`, person2WinCount);

                }
            }
        }
    
    }

}


// for reset button
const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turn =true;
    enableBoxes();
    msgCont.classList.add("hide");
    filled = 0;
}
resetBtn.addEventListener("click", resetGame);



// for new game
newBtn.addEventListener("click", resetGame);





//  scrore board
title1.innerText = person1 + " - X";
title2.innerText = person2 + " - O";
