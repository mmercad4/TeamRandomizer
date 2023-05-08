let NumPeople;
let NumTeams;
let NumPerTeam;
let teams;
function startTeams() {
  console.log("Making Teams");
  NumPeople = +document.getElementById("NumPeople").value;
  NumTeams = +document.getElementById("NumTeams").value;
  NumPerTeam = +Math.ceil(NumPeople / NumTeams);
  console.log(NumPeople);
  console.log(typeof NumTeams);
  console.log("Done Making Teams");

  teams = createTeams(NumTeams);

  splitTeams();
}

function createTeams(NumTeams) {
  let arrays = [];

  for (let i = 0; i < NumTeams; i++) {
    arrays.push([]);
  }

  return arrays;
}

/* function initializePeopleArray() {
  for (let i = 0; i < NumPeople; i++) {
    teams[0].push("x");
  }
} */

function splitTeams() {
  const container = document.getElementById("container");
  const randomColor0 = randomColor();
  container.innerHTML = "";
  container.style.fontSize = "60px";
  container.style.fontWeight = "bold";
  container.addEventListener("click", function () {
    let random = Math.floor(Math.random() * NumTeams);

    console.log("clicked");

    let teamsDone = true;
    for (let i = 0; i < teams.length; i++) {
      const subArr = teams[i];

      if (subArr.length !== NumPerTeam) {
        teamsDone = false;
        break;
      }
    }

    if (teamsDone) {
      container.innerHTML = "";
      container.innerHTML = "DONE";
    } else {
      if (teams[random].length < +NumPerTeam) {
        container.innerHTML = random + 1;
        teams[random].push("x");
      } else if (teams[random].length === +NumPerTeam) {
        container.innerHTML = "";
        container.innerHTML = `Team Full, click again`;
      }
    }

    console.log(teams);
  });
}

//   Math.floor(Math.random() * (NumTeams + 1));
