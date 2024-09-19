const addProduct = () => {
  const input = document.querySelector("input");
  const text = input.value;
  input.value = "";

  const toDo = "<li>" + text + "<input type='checkbox' ></input></li>";
  const ul = document.querySelector("ul");
  ul.innerHTML += toDo;
};
