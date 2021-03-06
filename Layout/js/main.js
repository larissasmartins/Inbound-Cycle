// Popup 

"use strict";

const sendButton = document.querySelector(".form-button");
const popup = document.querySelector(".popup-window");
const closeButton = document.querySelector(".popup-close");
const policyCheckbox = document.querySelector(".policy-check");


// Click button
function sendInfo() {
  popup.style.display = "flex";
}

// Close window
function closeWindow() {
  popup.style.display = "none";
}

// Privacy policy check
function modifySendButton() {
    if (policyCheckbox.checked) {
        sendButton.disabled = false;
        sendButton.classList.replace('disable-button', 'enable-button');
    } else {
        sendButton.disabled = true;
        sendButton.classList.replace('enable-button', 'disable-button');
    }
}

sendButton.addEventListener("click", sendInfo);
closeButton.addEventListener("click", closeWindow);
policyCheckbox.addEventListener("click", modifySendButton);