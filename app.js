var score = [0,1];
var turn;

//Team 1 details
var team1 = {
    name: "England",
    goals: [],
    score: 0,
}
//Team 2 details
var team2 = {
    name: "Italy",
    goals: [],
    score: 0,
}

window.onload = () => {
    //Decide whos gonna shoot first
    selectTurn();
    //update the text on the button
    updateButtonText();
    //update Team Names
    updateNames();
}

let selectTurn = () => {
    turn = Math.round(Math.random()) + 1;
}

let updateButtonText = () => {
    var button = document.getElementById("shoot-button");
        var result = document.getElementById("result");
    //To check if the game is over or not
    if(team1.goals.length == 5 && team2.goals.length == 5) {
        button.remove();
        //to check who wins?
        result.style.visibility="";
        result.textContent = team1.score === team2.score ? `Match Draw`: `${team1.score>team2.score ? team1.name: team2.name} Wins`
    }
    else {
    
        button.textContent=`${turn === 1 ? team1.name: team2.name} Shooting`;
    }    
}
let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}
var ButtonClick = () => {
    var goals = score[Math.floor(Math.random()*score.length)];

    if(turn === 1) {
        team1.goals.push(goals);
        team1.score = calculateScore(team1.goals);
    }
    else {
        team2.goals.push(goals);
        team2.score = calculateScore(team2.goals);
    }
    updateButtonText();
    updateGoals();
    changeTurn();
}

var calculateScore = (goals) => {
    return goals.reduce((total, num) => total + num, 0);
}
var updateGoals = () => {
    var teamOne = document.getElementById("team-1-round-goals").children;
    var teamTwo = document.getElementById("team-2-round-goals").children;
    team1.goals.forEach((goals, index) =>{
        goals === 1
         ? (teamOne[index].style.backgroundColor = "green") 
         : (teamOne[index].style.backgroundColor ="red");
    });
    team2.goals.forEach((goals, index) => {
        goals === 1 
        ? (teamTwo[index].style.backgroundColor = "green")
        : (teamTwo[index].style.backgroundColor = "red");
      });
}
var changeTurn = () => {
    turn = turn === 1 ? 2 : 1;
  }