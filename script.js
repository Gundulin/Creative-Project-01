/* Rock Paper Scissors Game */
function RockPaperScissors(choice) { // 1 = Rock, 2 = Paper, 3 = Scissors
    /** Hide everything */
    document.getElementById('RockButton').style.display = "none";
    document.getElementById('PaperButton').style.display = "none";
    document.getElementById('ScissorsButton').style.display = "none";
    document.getElementById('RematchButton').style.display = "inline-block";

    /* Computer Value is selected */
    var computerSelection = Math.floor((Math.random()*3) + 1);

    if (choice == computerSelection)
    {
        if(choice == 1){
            document.getElementById('UserSelection').innerText = "You chose ROCK.";
            document.getElementById('ComputerSelection').innerHTML = "Lucy chose ROCK.";
        } else if (choice == 2){
            document.getElementById('UserSelection').innerText = "You chose PAPER.";
          document.getElementById('ComputerSelection').innerHTML = "Lucy chose PAPER.";
        } else if (choice == 3){
            document.getElementById('UserSelection').innerText = "You chose SCISSORS.";
            document.getElementById('ComputerSelection').innerHTML = "Lucy chose SCISSORS.";
        }
        document.getElementById('Outcome').innerHTML = "It's a Tie!";
    }
    /* Rock vs Paper */
    else if (choice == 1 && computerSelection == 2)
    {
        document.getElementById('UserSelection').innerText = "You chose ROCK.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose PAPER.";
        document.getElementById('Outcome').innerHTML = "You Lose!";
    }
    else if (choice == 1 && computerSelection == 3)
    {
        document.getElementById('UserSelection').innerText = "You chose ROCK.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose SCISSORS.";
        document.getElementById('Outcome').innerHTML = "You Win!";
    }
    else if (choice == 2 && computerSelection == 1)
    {
        document.getElementById('UserSelection').innerText = "You chose PAPER.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose ROCK.";
        document.getElementById('Outcome').innerHTML = "You Win!";
    }
    else if (choice == 2 && computerSelection == 3)
    {
        document.getElementById('UserSelection').innerText = "You chose PAPER.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose SCISSORS.";
        document.getElementById('Outcome').innerHTML = "You Lose!";
    }
    else if (choice == 3 && computerSelection == 1)
    {
        document.getElementById('UserSelection').innerText = "You chose SCISSORS.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose ROCK.";
        document.getElementById('Outcome').innerHTML = "You Lose!";
    }
    else if (choice == 3 && computerSelection == 2)
    {
        document.getElementById('UserSelection').innerText = "You chose SCISSORS.";
        document.getElementById('ComputerSelection').innerHTML = "Lucy chose PAPER.";
        document.getElementById('Outcome').innerHTML = "You Win!";
    }
}


/** Rock, Paper, Scissors, Lizard, Spock Game */
function RockPaperScissorsLizardSpock(choice) { // 1 = Rock, 2 = Paper, 3 = Scissors, 4 = Lizard, 5 = Spock
    /** Hide everything */
    document.getElementById('RockButton').style.display = "none";
    document.getElementById('PaperButton').style.display = "none";
    document.getElementById('ScissorsButton').style.display = "none";
    document.getElementById('LizardButton').style.display = "none";
    document.getElementById('SpockButton').style.display = "none";
    document.getElementById('RematchButton').style.display = "inline-block";
    
    /* Computer Value is selected */
    var computerSelection = Math.floor((Math.random()*5) + 1);

    /** Check for Tie */
    var aTie = false;
    if (choice == computerSelection)
    {   
        aTie = true;
        document.getElementById('Outcome').innerHTML = "It's a Tie!";
    }

    /** Get User Choice */
    var userString = "";
    if(choice == 1){
        userString = "ROCK";
    } else if(choice == 2){
        userString = "PAPER";
    } else if(choice == 3){
        userString = "SCISSORS";
    } else if(choice == 4){
        userString = "LIZARD";
    } else if(choice == 5){
        userString = "SPOCK";
    }

    /** Get Computer Choice */
    var compString = "";
    if(computerSelection == 1){
        compString = "ROCK";
    } else if(computerSelection == 2){
        compString = "PAPER";
    } else if(computerSelection == 3){
        compString = "SCISSORS";
    } else if(computerSelection == 4){
        compString = "LIZARD";
    } else if(computerSelection == 5){
        compString = "SPOCK";
    }
    
    document.getElementById('UserSelection').innerText = "You chose " + userString + ".";
    document.getElementById('ComputerSelection').innerHTML = "Sheldon chose " + compString + ".";
    
    /** Check if Win or Lose */
    if (((choice == 1 && (computerSelection == 2 || computerSelection == 5))||
        (choice == 2 && (computerSelection == 3 || computerSelection == 4))||
        (choice == 3 && (computerSelection == 1 || computerSelection == 5))||
        (choice == 4 && (computerSelection == 1 || computerSelection == 3))||
        (choice == 5 && (computerSelection == 2 || computerSelection == 4))) && aTie == false)
    {
        document.getElementById('Outcome').innerHTML = "You Lose!";
    }
    else if (aTie == false)
    {
        document.getElementById('Outcome').innerHTML = "You Win!";
    }
}

/** Mega Rock, Paper, Scissors Game */
function MegaRPS(choice) { // 1 = Rock, 2 = Paper, 3 = Scissors, 4 = Lizard, 5 = Spock, 6 = Devil, 7 = Love
    /** Hide everything */
    document.getElementById('RockButton').style.display = "none";
    document.getElementById('PaperButton').style.display = "none";
    document.getElementById('ScissorsButton').style.display = "none";
    document.getElementById('LizardButton').style.display = "none";
    document.getElementById('SpockButton').style.display = "none";
    document.getElementById('DevilButton').style.display = "none";
    document.getElementById('LoveButton').style.display = "none";
    document.getElementById('RematchButton').style.display = "inline-block";

    /* Computer Value is selected */
    var computerSelection = Math.floor((Math.random()*7) + 1);

    /** Check for Tie */
    var aTie = false;
    if (choice == computerSelection)
    {   
        aTie = true;
        document.getElementById('Outcome').innerHTML = "It's a Tie!";
    }

    /** Get User Choice */
    var userString = "";
    if(choice == 1){
        userString = "ROCK";
    } else if(choice == 2){
        userString = "PAPER";
    } else if(choice == 3){
        userString = "SCISSORS";
    } else if(choice == 4){
        userString = "LIZARD";
    } else if(choice == 5){
        userString = "SPOCK";
    } else if(choice == 6){
        userString = "DEVIL";
    } else if(choice == 7){
        userString = "LOVE";
    }

    /** Get Computer Choice */
    var compString = "";
    if(computerSelection == 1){
        compString = "ROCK";
    } else if(computerSelection == 2){
        compString = "PAPER";
    } else if(computerSelection == 3){
        compString = "SCISSORS";
    } else if(computerSelection == 4){
        compString = "LIZARD";
    } else if(computerSelection == 5){
        compString = "SPOCK";
    } else if(computerSelection == 6){
        compString = "DEVIL";
    } else if(computerSelection == 7){
        compString = "LOVE";
    }

    document.getElementById('UserSelection').innerText = "You chose " + userString + ".";
    document.getElementById('ComputerSelection').innerHTML = "Lucifer chose " + compString + ".";
    
    if (((choice == 1 && (computerSelection == 2 || computerSelection == 5 || computerSelection == 7))||
        (choice == 2 && (computerSelection == 3 || computerSelection == 4 || computerSelection == 6))||
        (choice == 3 && (computerSelection == 1 || computerSelection == 5 || computerSelection == 6))||
        (choice == 4 && (computerSelection == 1 || computerSelection == 3 || computerSelection == 6))||
        (choice == 5 && (computerSelection == 2 || computerSelection == 4 || computerSelection == 7))||
        (choice == 6 && (computerSelection == 1 || computerSelection == 5 || computerSelection == 7))||
        (choice == 7 && (computerSelection == 2 || computerSelection == 4 || computerSelection == 3))) && aTie == false)
    {
        document.getElementById('Outcome').innerHTML = "You Lose!";
    }
    else if (aTie == false)
    {
        document.getElementById('Outcome').innerHTML = "You Win!";
    }
}

/** Resets the buttons */
function Reset(difficulty) {
    document.getElementById('RockButton').style.display = "inline-block";
    document.getElementById('PaperButton').style.display = "inline-block";
    document.getElementById('ScissorsButton').style.display = "inline-block";

    if (difficulty > 1)
    {
        document.getElementById('LizardButton').style.display = "inline-block";
        document.getElementById('SpockButton').style.display = "inline-block";
    }

    if (difficulty > 2)
    {
        document.getElementById('DevilButton').style.display = "inline-block";
        document.getElementById('LoveButton').style.display = "inline-block";
    }
    document.getElementById('RematchButton').style.display = "none";
    document.getElementById('UserSelection').innerText = "";
    document.getElementById('ComputerSelection').innerHTML = "";
    document.getElementById('Outcome').innerHTML = "";

}