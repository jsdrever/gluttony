const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.innerHTML = highScores 

//! how do i get them to render into the li's
//parse then strinify
.map(score => {
    return highScores - highScoresList;
})
.join("");
console.log(JSON.stringify(localStorage.getItem("highScores")));