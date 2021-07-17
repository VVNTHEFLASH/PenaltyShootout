var score = [0,1];
var turn;

//Team 1 details
var team1 = {
    name: "England",
    goals: [],
    score: 0
}
//Team 2 details
var team2 = {
    name: "Italy",
    goals: [],
    score: 0
}

window.onload = () => {
    //Decide whos gonna shoot first
    selectTurn();
    //update the text on the button
    updateButtonText();
    //update the score
    updateScore();
    //update Team Names
    updateNames();

}

let selectTurn = () => {
    turn = Math.round(Math.random())+1;
}

let updateButtonText = () => {
    var button = document.getElementById("shoot-button");
        var result = document.getElementById("result");
    result.style.visibility = "";
    //To check if the game is over or not
    if(team1.goals.length == 5 && team2.goals.length == 5) {
        button.remove();
        //to check who wins?
        result.textContent = team1.score === team2.score ? `Match Draw`: `${team1.score>team2.score ? team1.name: team2.name} Wins`
    }
    else {
        turn = team1.goals.length === 5 ? 2: team2.runs.length === 5 ? 1: turn;
        button.textContent=`${turn === 1 ? team1.name: team2.name} Shooting`;
    }    
}
let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateGoals();
}
let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}
// var ButtonGoals = () => {
//     var ScoreGoals = document.getElementsByClassName("score-circle");
//     ScoreGoals.style.backgroundColor = ""; 
//     //if statement need for color change
//     if(score === 0) {
//         ScoreGoals.style.backgroundColor = "Red";
//     }
//     else if(score === 1) {
//         ScoreGoals.style.backgroundColor = "Green";
//     }
//     else {
//         ScoreGoals.style.backgroundColor = "";
//     }
// }
var ButtonClick = () => {
    var goals = score[Math.floor(Math.random()*score.length)];
    goals = goals === 0? "N" : goals;

    if(turn === 1) {
        team1.goals.push(goals);
        team1.score = calculateScore(team1.goals);
    }
    else {
        team2.goals.push(goals);
        team2.score = calculateScore(team2.goals);
    }
    updateButtonText();
    updateScore();
}

var calculateScore = (goals) => {
    return goals.map(num => {
        return num=='N'? 0:num;
    }).reduce((total,num) => total+num);
}
var updateGoals = () => {
    var teamOne = document.getElementsByClassName("score-circle").children;
    var teamTwo = document.getElementsByClassName("score-circle").children;
    team1.goals.forEach((goals,index) => {
        teamOne[index].textContent = goals;
    })
    team2.goals.forEach((goals,index) => {
        teamTwo[index].textContent = goals;
    })
}

// var score = [0,1];
// var turn;

// //Team 1 details
// var team1 = {
//     name: "England",
//     goals: [],
//     score: 0
// }
// //Team 2 details
// var team2 = {
//     name: "Italy",
//     goals: [],
//     score: 0
// }

// window.onload = () => {
//     //Update Team Names
//     updateNames();
//     //Update Button Text
//     updateButtonText();
// }
// let updateNames = () => {
//     document.getElementById("team-1-name").textContent=team1.name;
//     document.getElementById("team-2-name").textContent=team2.name;
// }
