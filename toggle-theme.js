// Light & Dark mode toggle

function toggleTheme() {
  const ids = ["theme", "form", "submit", "toggle-icon"];
  const elements = document.querySelectorAll(
    ids.map((id) => `#${id}`).join(", ")
  );
  // const pageBg = document.querySelectorAll("#theme", "#todoTitle");
  document.getElementById("theme").classList.toggle("dark-mode");
  document.getElementById("theme").classList.toggle("light-mode");
  // const pageTitle = document.querySelector("h1");
  document.getElementById("todoTitle").classList.toggle("dark-mode");
  document.getElementById("todoTitle").classList.toggle("light-mode");
  // const formTheme = document.querySelector("#form");
  document.getElementById("form").classList.toggle("dark-mode");
  document.getElementById("form").classList.toggle("light-mode");
  // const formInput = document.querySelector("#submit");
  document.getElementById("submit").classList.toggle("dark-mode");
  document.getElementById("submit").classList.toggle("light-mode");
  // const formOutput = document.querySelector("#outputList");
  document.getElementById("outputList").classList.toggle("dark-mode");
  document.getElementById("outputList").classList.toggle("light-mode");

  document.getElementById("outputList").classList.toggle("dark-mode");
  document.getElementById("outputList").classList.toggle("light-mode");

  document.getElementById("toggle-icon").classList.toggle("dark-mode");
  document.getElementById("toggle-icon").classList.toggle("light-mode");
}
