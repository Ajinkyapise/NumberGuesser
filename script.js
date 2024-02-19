let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =()=>{
  return Math.ceil(Math.random()*10)
}

const compareGuesses=(human,computer,target)=>{
humantarget= Math.abs(target-human);//5
computertarget=Math.abs(target-computer);//3
//console.log(humantarget)
//console.log(computertarget)
//console.log(target)
  if(humantarget<=computertarget ){
  return true
}else {
return false
}
}

const updateScore =(winner)=>{
if(winner==="human"){
  humanScore++;
}
else if(winner==="computer"){
  computerScore++
}
}

const advanceRound=()=>{
  currentRoundNumber++;
}


