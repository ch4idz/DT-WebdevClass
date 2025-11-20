const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.onclick = function () {
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskInput.value;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete-btn");

  li.appendChild(span);
  li.appendChild(del);
  taskList.appendChild(li);

  taskInput.value = "";

  li.onclick = function (e) {
    if (e.target === del) return;
    li.classList.toggle("completed");
  };

  del.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };
};
