window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskObj) => renderTask(taskObj));
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const taskObj = { text: task, done: false };
  renderTask(taskObj);
  saveTask(taskObj);
  input.value = "";
}

function renderTask(taskObj) {
  const li = document.createElement("li");
  li.textContent = taskObj.text;
  if (taskObj.done) li.classList.add("done");

  const btns = document.createElement("div");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️ Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () {
    li.classList.toggle("done");
    taskObj.done = li.classList.contains("done");
    updateStorage();
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌ Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    li.remove();
    deleteTask(taskObj.text);
  };

  btns.appendChild(doneBtn);
  btns.appendChild(delBtn);
  li.appendChild(btns);

  document.getElementById("taskList").appendChild(li);
}

function saveTask(taskObj) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStorage() {
  const lis = document.querySelectorAll("#taskList li");
  const tasks = [];
  lis.forEach((li) => {
    tasks.push({
      text: li.childNodes[0].nodeValue,
      done: li.classList.contains("done"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAll() {
  document.getElementById("taskList").innerHTML = "";
  localStorage.removeItem("tasks");
}
