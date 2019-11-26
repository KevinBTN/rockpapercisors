//Game init
var roundsButton = document.createElement("button");
var roundsInput = document.createElement("input");
roundsInput.setAttribute("id", "input");
var selectedRoundsNumber ;
var roundParent = document.getElementById("rounds");
var displayRounds = document.createElement("p");
var h3 = document.querySelector("h3");
var icones = document.getElementById("icones");
var imgRock = document.createElement("img");
imgRock.src = "rock.png";
imgRock.classList.add("icone");
imgRock.setAttribute("id", "rock");
var imgPaper = document.createElement("img");
imgPaper.src = "paper.png";
imgPaper.classList.add("icone");
imgPaper.setAttribute("id", "paper");
var imgScissors = document.createElement("img");
imgScissors.src = "scissors.png";
imgScissors.classList.add("icone");
imgScissors.setAttribute("id", "scissors");
var roundsCounter = 1;
var scorePlayer = 0; 
var scoreComputer = 0; 
var displayScore = document.createElement("h3");
var playAgain = document.createElement("button");


function displayButton(){     
    document.body.appendChild(roundsButton);
    document.body.appendChild(roundsInput);
    roundsButton.innerHTML = "Send";
    roundsButton.addEventListener("click", buttonClick);
}

function buttonClick(){
    selectedRoundsNumber = document.getElementById("input").value;
    document.body.removeChild(roundsButton);
    document.body.removeChild(roundsInput);
    h3.textContent = "Choose your weapon";
    displayRounds.textContent = "Round " + roundsCounter + " / " + selectedRoundsNumber;
    displayScore.textContent = "You " + scorePlayer + " : "+ scoreComputer + " Computer ";
    roundParent.appendChild(displayScore);
    roundParent.appendChild(displayRounds);
    icones.appendChild(imgRock);
    icones.appendChild(imgPaper);
    icones.appendChild(imgScissors);
    
}
displayButton();

//game on
function getRandomInteger(min, max){
    var rand = Math.floor(Math.random() * (max - min)) + min;
    var computerAnswer;
    return rand;
}
        
        imgRock.addEventListener('click', () =>{
            roundsCounter++;
            compare(1, getRandomInteger(1, 4));
            if(roundsCounter > selectedRoundsNumber){
                gameOver();
            }
        });
        
        imgPaper.addEventListener('click', () =>{
            roundsCounter++;
            compare(2, getRandomInteger(1, 4));
            if(roundsCounter > selectedRoundsNumber){
                gameOver();
            }
        });
        imgScissors.addEventListener('click', () => {
            roundsCounter++;
            compare(3, getRandomInteger(1, 4));
            if(roundsCounter > selectedRoundsNumber ){
                gameOver();
            }
        });
        
        function compare(num1, num2){
            if(num1 === num2){
                h3.textContent = "Draw";
            }
            else if(num1 == 1 && num2 == 3){
               h3.textContent = "You win, Rock beats the Scissors";
               scorePlayer++;
            }
            else if(num1 == 1 && num2 == 2 ){
               h3.textContent = "You lose, Paper beats the rock";
               scoreComputer++;
            }
            else if(num1 == 2 && num2 == 1){
              h3.textContent = "You win, Paper beats the Rock";
              scorePlayer++;
            }
            else if(num1 == 2 && num2 == 3){
               h3.textContent = "You lose, Scissors beats the Paper";
               scoreComputer++;
            }
            else if(num1 == 3 && num2 == 1){
               h3.textContent = "You lose, Rock beats the Scissors";
               scoreComputer++;
            }
            else if(num1 == 3 && num2 == 2){
               h3.textContent = "You win, Scissors beats the Paper";
               scorePlayer++;
            }
            displayRounds.textContent = "Round " + roundsCounter + " / " + selectedRoundsNumber;
            displayScore.textContent = "You " + scorePlayer + " : "+ scoreComputer + " Computer ";
        }


//game over

function removeImg(){
    icones.removeChild(imgRock); 
    icones.removeChild(imgPaper);
    icones.removeChild(imgScissors);
    roundParent.removeChild(displayRounds);
    playAgain.innerHTML = "Play again";
    icones.appendChild(playAgain);
    playAgain.addEventListener("click", () =>{
        displayButton();
        h3.textContent = "Choose the number of rounds"; 
        roundParent.removeChild(displayScore);
        icones.removeChild(playAgain); 
        scoreComputer = 0; 
        scorePlayer = 0; 
        roundsCounter = 1; 
    });
}

function gameOver(){
    if(scoreComputer === scorePlayer){
        h3.textContent = "Game Over, Draw, nobody lose!";
        removeImg();
    }
    else if(scorePlayer < scoreComputer){
        h3.textContent = "Game Over, Sorry you lose!";
        removeImg();
    }
    else if(scorePlayer > scoreComputer){
        h3.textContent = "Game Over, Congratulation you win!";
        removeImg();
    }
}
    
    
    
