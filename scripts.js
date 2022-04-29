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

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
