// ================================STOPWATCH===============================
window.onload = function () {
  var seconds = 00;
  var tens = 00;

  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = this.document.getElementById("button-start");
  var buttonStop = this.document.getElementById("button-stop");
  var buttonReset = this.document.getElementById("button-reset");

  var Interval;

  /*First Step*/
  function startTimer() {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      console.log(seconds);
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
  /*START*/
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  /*STOP*/
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  /*RESET*/
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };
};

// ========================================TIMER=================================

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener(
    "keypress",
    function (e) {
      if (e.key == "Escape" || e.key == "Esc") {
        reset();
      }
    },
    false
  );

  var input = null;
  var interval = null;
  var timer = 0;

  document.getElementById("tInput").addEventListener(
    "keypress",
    function (e) {
      if (e.key == "Enter") {
        e.preventDefault();
        start();
      }
    },
    false
  );

  document.getElementById("start").addEventListener("click", start, false);

  document.getElementById("stop").addEventListener("click", stop, false);

  document.getElementById("reset").addEventListener("click", reset, false);

  function timerValue() {
    if (timer >= 0) {
      document.getElementById("timer").innerHTML = timer--;
    } else {
      document.getElementById("timer").innerText = "Timer End";

      var audio = document.createElement("audio");
      var autoplay = document.createAttribute("autoplay");
      var loop = document.createAttribute("loop");

      audio.setAttribute("src", "assets/tone.mp3");
      audio.setAttribute("id", "tone");
      audio.setAttributeNode(autoplay);
      audio.setAttributeNode(loop);

      document.getElementById("aud").appendChild(audio);

      alert("Time Over");
      stop();
    }
  }

  function start() {
    input = document.getElementById("tInput").value;

    if (input != null && input > 0) {
      clearInterval(interval);
      timer = input;
      interval = setInterval(timerValue, 1000);
    } else {
      reset();
    }
  }

  function stop() {
    clearInterval(interval);
    input = timer;
    document
      .getElementById("tone")
      .parentNode.removeChild(document.getElementById("tone"));
  }

  function reset() {
    input = null;
    timer = 0;
    clearInterval(interval);
    document.getElementById("tInput").value = input;
    document.getElementById("timer").innerText = "Enter ↑ Value";
    document
      .getElementById("tone")
      .parentNode.removeChild(document.getElementById("tone"));
  }
});
