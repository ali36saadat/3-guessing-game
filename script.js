"use strict"

const btnGuessMe = document.querySelector(".modalGuessMe")
const btnIGuessYou = document.querySelector(".modalIGuessYou")
const btnGuessDual = document.querySelector(".modalGuessDual")
const overlay = document.querySelector(".overlay")
const closeModal = document.querySelectorAll(".close-modal")

document.querySelector(".guessMe").addEventListener("click", function () {
   displayModal(".modalGuessMe")
})

document.querySelector(".iGuessYou").addEventListener("click", function () {
   displayModal(".modalIGuessYou")
})

document.querySelector(".guessDual").addEventListener("click", function () {
   displayModal(".modalGuessDual")
})

const displayModal = function (btn) {
   document.querySelector(btn).classList.toggle("hidden")
   overlay.classList.toggle("hidden")
}

document.querySelector(".modal-1").addEventListener("click", function () {
   displayModal(".modalGuessMe")
})

document.querySelector(".modal-2").addEventListener("click", function () {
   displayModal(".modalIGuessYou")
})

document.querySelector(".modal-3").addEventListener("click", function () {
   displayModal(".modalGuessDual")
})

document.querySelector(".overlay").addEventListener("click", function () {
   btnGuessMe.classList.add("hidden")
   btnIGuessYou.classList.add("hidden")
   btnGuessDual.classList.add("hidden")
   overlay.classList.add("hidden")
})
