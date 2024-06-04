//access elements
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generate computer choice
const genCompChoice = () =>
{
    const option = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () =>
{
    console.log("game was draw");
    msg.innerText = "game was draw.Play again";
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.");
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>
{
    console.log("user choice = ",userChoice)

    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice === compChoice)
    {
        //draw game
        drawGame();
    }
    else
    {
        let userWin = true;

        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
 
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});