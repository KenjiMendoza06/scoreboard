let home = 0;
let guest = 0;
let timerInterval;
let seconds = 0;

function updateScores() {
  document.getElementById("home-el").innerHTML = home;
  document.getElementById("guest-el").innerHTML = guest;
  highlight();
}

function highlight() {
  if (home > guest) {
    document.getElementById("home-el").style.color = "green";
    document.getElementById("guest-el").style.color = "red";
  } else if (home < guest) {
    document.getElementById("home-el").style.color = "red";
    document.getElementById("guest-el").style.color = "green";
  } else {
    document.getElementById("home-el").style.color = "white";
    document.getElementById("guest-el").style.color = "white";
  }
}

function addHomeOne() {
  home += 1;
  updateScores();
}

function addHomeTwo() {
  home += 2;
  updateScores();
}

function addHomeThree() {
  home += 3;
  updateScores();
}

function addGuestOne() {
  guest += 1;
  updateScores();
}

function addGuestTwo() {
  guest += 2;
  updateScores();
}

function addGuestThree() {
  guest += 3;
  updateScores();
}

function reset() {
  home = 0;
  guest = 0;
  updateScores();
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  document.getElementById("timer-el").innerHTML = "00:00:00";
  alert("Click OK to reset the score!");
}

function startTime() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTime, 1000);
  }
}

function updateTime() {
  seconds++;
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timer-el").innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  document.getElementById("timer-el").innerHTML = "00:00:00";
}
