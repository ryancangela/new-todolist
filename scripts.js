"strict";

// document.getElementById("demo").innerHTML = myFunction("John");
// function myFunction(name) {
//     return "Hello " + name;
//   }

// function unlock() {
//   document.querySelector(`.lock`).classList.toggle(`unlock`)
// }

// function input(){
//   var input1 = document.getElementById("todo-input").value;
//   document.getElementById("output").value = input1;
//   }

// To Do List - Adding & removing tasks
function inputValue() {
  const task = document.createElement("p");
  task.classList.add("closeX");
  // task.setAttribute("id", "testingid");
  const inputValue = document.getElementById("todo-input").value;
  const t = document.createTextNode(inputValue);
  task.appendChild(t);
  if (inputValue === ``) {
    alert(`You can't just do nothing...`);
  } else {
    document.getElementById("outputList").appendChild(task);
  }
  document.getElementById("todo-input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  task.appendChild(span);
  span.addEventListener("click", function () {
    document.getElementById("closeX").add("animate__fadeOut");
  });

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.classList.remove("animate__fadeIn"); // reset animation
      void div.offsetWidth;

      // document.getElementById(`outputList`).classList.remove(`animate__fadeIn`);
      // setTimeout(() => {
      //   document
      //     .getElementById(`outputList`)
      //     .classList.add(`animate__fadeOutUp`);
      // }, 4000);
      div.style.display = "none";
    };
  }
}
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.tag;
    div.document.getElementById;
    div.style.display = "none";
  };
}

function addAnimation() {
  document
    .getElementById("outputList")
    .classList.add(`animate__animated`, `animate__fadeIn`);
}

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

function addFadeaway() {
  document.getElementsByTagName("SPAN");
}
