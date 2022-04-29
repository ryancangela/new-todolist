// Light & Dark mode toggle

function toggleTheme(){
    const pageBg = document.querySelector("#theme");
    document.getElementById("theme").classList.toggle("dark-mode");
    document.getElementById("theme").classList.toggle("light-mode");
    const pageTitle = document.querySelector("h1");
    document.getElementById("todoTitle").classList.toggle("dark-mode");
    document.getElementById("todoTitle").classList.toggle("light-mode");
    const formTheme = document.querySelector("#form");
    document.getElementById("form").classList.toggle("dark-mode");
    document.getElementById("form").classList.toggle("light-mode");
    const formInput = document.querySelector("#submit");
    document.getElementById("submit").classList.toggle("dark-mode");
    document.getElementById("submit").classList.toggle("light-mode");
}

// working code
// function toggleTheme() {
//     const element = document.querySelector("#theme");
//     element.classList.add("light-mode");
    
    
// }
