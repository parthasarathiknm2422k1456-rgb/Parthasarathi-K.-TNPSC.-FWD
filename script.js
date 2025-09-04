// Add Task Function

function addTask() {

  let input = document.getElementById("taskInput");

  let taskText = input.value.trim();

  if (taskText === "") {

    alert("Please enter a task!");

    return;

  }

  let li = document.createElement("li");

  li.textContent = taskText;

  // Toggle complete on click

  li.addEventListener("click", () => {

    li.classList.toggle("completed");

  });

  // Delete button

  let delBtn = document.createElement("button");

  delBtn.textContent = "❌";

  delBtn.style.marginLeft = "10px";

  delBtn.addEventListener("click", () => {

    li.remove();

  });

  li.appendChild(delBtn);

  document.getElementById("taskContainer").appendChild(li);

  input.value = "";

}