const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.innerHTML = highScores 

//! how do i get them to render into the li's
.map(score => {
    return JSON.parse(localStorage.getItem("highScores")) - JSON.parse(localStorage.getItem("highScoresList"));
})
.join("");