const button = document.querySelector(".btn");

button.addEventListener(`click`, (event) => {
  console.log(`button even`, event);
  const body = document.querySelector("body");

  body.classList.toggle("theme");
});

button.innerText = "Cambia Tema";

const element = document.createElement("p");

element.innerHTML = "testo";

const target = document.getElementById("target");

target.appendChild(element);
