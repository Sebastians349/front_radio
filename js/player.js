"use strict";

/* 
const radios = {
  nombre: "Aspen",
  dial: "102.3",
  streamId: "https://mdstrm.com/audio/60a2745ff943100826374a70/icecast.audio",
};

let radioPlay = document.getElementById("play-button");
let nombreRadio = document.querySelector("nombre--player");
nombreRadio = radios.nombre + " " + radios.dial;

function togglePlay() {
  return radioPlay.paused ? radioPlay.play() : radioPlay.pause();
} */

function playAudio(url) {
  new Audio(url).play();
}
