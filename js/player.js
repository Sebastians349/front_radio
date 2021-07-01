"use strict";

let myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}
