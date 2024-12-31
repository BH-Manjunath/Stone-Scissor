let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => { //Math.floor --> to remove decimal from random numbers
    const options = ["rock","paper","scissor"]; (0,1,2)
    const randIdx = Math.floor(Math.random() * 3); // it generates random number upto -1 of the multiplied number  
    return options[randIdx]; // it generates numbers upto 2 
}

const drawGame = () => {
    console.log("game was drawn");
    msg.innerText = "Game was Drawn. Play Again";
    msg.style.background="orange";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("you won !!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won !!`
        //msg.innerText = `You Won !!! your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost :)`;
        //msg.innerText = `You Lost :) your ${compChoice} beats ${userChoice}`;
        msg.style.background="red";
    }
}
const playGame = (userChoice) =>{
    console.log("User Choice = ",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice ==="paper" ? false : true ;
        } else if (userChoice === "paper"){
            //rock,scissor
            userWin = compChoice ==="scissor" ? false : true ;
        } else {
            // rock,paper
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});