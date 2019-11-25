//get Input
    
        const rock = document.querySelector('#rock');
        rock.addEventListener('click', () =>{
            compare(playerProp(1), getRandomInteger(1, 4));
        });
    
    
        const paper = document.querySelector('#paper');
        paper.addEventListener('click', () =>{
            compare(playerProp(2), getRandomInteger(1, 4));
        });
    
    
        const scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', () => {
            compare(playerProp(3), getRandomInteger(1, 4));
        });
    
    function playerProp(num){
        var playerNumber = num; 

        return playerNumber;
    }
    //random answer
    function getRandomInteger(min, max){
        var rand = Math.floor(Math.random() * (max - min)) + min;
        var computerAnswer;
        return rand;
    }

    //compare
    const h3 = document.querySelector('h3');
    function compare(num1, num2){
        if(num1 === num2){
            h3.textContent = "Draw";
        }
        else if(num1 == 1 && num2 == 3){
           h3.textContent = "You win, Rock beats the Scissors";
        }
        else if(num1 == 1 && num2 == 2 ){
           h3.textContent = "You lose, Paper beats the rock";
        }
        else if(num1 == 2 && num2 == 1){
          h3.textContent = "You win, Paper beats the Rock";
        }
        else if(num1 == 2 && num2 == 3){
           h3.textContent = "You lose, Scissors beats the Paper";
        }
        else if(num1 == 3 && num2 == 1){
           h3.textContent = "You lose, Rock beats the Scissors";
        }
        else if(num1 == 3 && num2 == 2){
           h3.textContent = "You win, Scissors beats the Paper";
        }
    }

    
    
    
