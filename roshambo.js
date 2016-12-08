//var counter = {computer: 0, human:0}
var compScore = 0
var humanScore = 0
function playGame(human){
var computer = Math.random()
console.log(computer);

if(computer <.33){
  computer = "rock";
  document.getElementById("computerChoice").innerHTML= ("Computer chooses rock")
} else if (computer < .66 && computer > .33) {
  computer = "paper";
  document.getElementById("computerChoice").innerHTML= ("Computer chooses paper")
} else {
  computer = "scissors";
  document.getElementById("computerChoice").innerHTML= ("Computer chooses scissors")
}

var winner;
if(human === 'rock'){
  if (computer === 'rock'){
  document.getElementById("result").innerHTML= ("Same");
  winner = 'Tie'
} else if (computer === 'paper'){
  document.getElementById("result").innerHTML= ("Paper beats rock");
  winner = 'Computer wins';
  compScore = compScore + 1
  //counter.computer += 1
} else if (computer === 'scissors'){
  document.getElementById("result").innerHTML= ("Rock beats scissors");
  winner = 'You win!';
  humanScore = humanScore +1
  //counter.human += 1
}
}
else if (human === 'paper'){
  if (computer === 'paper'){
    document.getElementById("result").innerHTML= ('Same');
    winner = 'Tie'
  } else if (computer === 'scissors'){
    document.getElementById("result").innerHTML= ("Scissors beat paper");
    winner = 'Computer wins';
    compScore = compScore + 1
    //counter.computer += 1
  } else if (computer === 'rock'){
    document.getElementById("result").innerHTML= ("Paper beats rock");
    winner = 'You win!';
    humanScore = humanScore + 1
    //counter.human += 1
  }
}
else if (human === 'scissors'){
  if (computer === 'scissors'){
    document.getElementById("result").innerHTML= ('Same');
    winner = 'Tie'
  } else if (computer === 'rock'){
    document.getElementById("result").innerHTML= ("Rock beats scissors");
    winner = 'Computer wins';
    compScore = compScore + 1
    //counter.computer += 1
  } else if (computer === 'paper'){
    document.getElementById("result").innerHTML= ("Scissors beat paper");
    winner = 'You win!';
    humanScore = humanScore + 1
    //counter.player += 1
  }
}
document.getElementById("winner").innerHTML=(winner);
document.getElementById("compScore").innerHTML=("Computer: " + compScore)
document.getElementById("humanScore").innerHTML=("You: " + humanScore)
console.log(compScore);
console.log(humanScore);
}
