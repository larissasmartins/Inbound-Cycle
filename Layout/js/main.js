// Popup 

"use strict";

const sendButton = document.querySelector(".form-button");
const popup = document.querySelector(".popup-window");
const closeButton = document.querySelector(".popup-close");

// Click button
function sendInfo() {
  popup.style.display = "flex";
}

// Close window
function closeWindow() {
  popup.style.display = "none";
}

/*
function x() {
    if (checkBoxObj.checked) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
}
*/

sendButton.addEventListener("click", sendInfo);
closeButton.addEventListener("click", closeWindow);
