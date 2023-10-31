import './style.css'

const closeButton = document.getElementById("terminalClose")
const minimizeButton = document.getElementById("terminalMinimize");
const zoomButton = document.getElementById("terminalZoom");
const terminal = document.getElementById("terminal");
const terminalInner = document.getElementById("terminalScreen");

closeButton.addEventListener("click", closeTerminal);
minimizeButton.addEventListener("click", minimizeTerminal);
zoomButton.addEventListener("click", terminalZoom);

async function closeTerminal() {
  terminal.remove();
}

async function minimizeTerminal() {
  terminalInner.classList.toggle("hide");
}

async function terminalZoom() {
  terminal.classList.toggle("zoom");
}