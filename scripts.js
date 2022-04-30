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
    // delete the column here
  });

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.classList.remove("animate__fadeIn"); // reset animation
      void div.offsetWidth; // trigger reflow
      // div.classList.add("animate__fadeIn");
      // start animation

      document.getElementById("outputList").classList.remove(`animate__fadeIn`);

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
