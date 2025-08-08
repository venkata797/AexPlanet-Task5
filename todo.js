document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => {
    li.remove();
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => tasks.push(li.textContent));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = () => {
      li.remove();
      saveTasks();
    };
    document.getElementById("taskList").appendChild(li);
  });
}
