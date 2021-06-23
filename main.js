// 初始變數
let todoList = document.querySelector("#my-todo");
let doneList = document.querySelector("#my-done");
let list = document.querySelector("#list")
let addBtn = document.querySelector("#addBtn");
let input = document.querySelector("#newTodo");

// 資料
let todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  todoList.appendChild(newItem);

  // 輸入完成後清空input
  input.value = "";
}

function checkItem() {
  let inputValue = input.value;

  if (inputValue.match(/^[ ]*$/)) {
    input.classList.add("is-invalid")
  } else {
    addItem(inputValue);
    input.classList.remove("is-invalid")
  }
}

// Create
addBtn.addEventListener("click", checkItem)
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkItem()
  }
})

// Delete and check and move
list.addEventListener("click", function (event) {
  let target = event.target;

  // delete
  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  }
  // check
  else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");

    // move
    let targetLi = target.parentElement
    if (target.classList.contains("checked")) {
      doneList.append(targetLi)
    } else {
      todoList.append(targetLi)
    }
  }
});
