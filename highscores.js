const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const li = createListItem(highScores);
highScores.innerHTML = highScores 

//! how do i get them to render into the li's
//parse then strinify
//username and highscores should display in the ol

// function createListItem(content) {
//     const li = document.createElement('li');
//     li.textContent = content;
//     return li;
// }


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");


// highScores.appendChild(li);


console.log(JSON.parse(localStorage.getItem("highScores")));
console.log(JSON.stringify(localStorage.getItem("highScores")));