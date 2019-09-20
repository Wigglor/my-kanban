function Task(title, description, priority, stage) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.stage = stage;
}

function UI() {}

UI.prototype.addTask = function(task) {
  let divId = task.stage;
  let prioColor = task.priority;

  console.log(prioColor);
  const output = document.querySelector(`#${divId}-output`);
  const cardTask = document.createElement("div");
  cardTask.setAttribute("class", `kanban-item-task-${prioColor}`);
  cardTask.innerHTML = `
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <p><b>Prio: </b>${task.priority}</p>
    <p><b>Stage: </b>${task.stage}</p>
    <p class="remove-task">x</p>
    `;
  output.appendChild(cardTask);
  // console.log(cardTask)
};

//remove a task
UI.prototype.removeTask = function() {
  document.querySelector(".remove-task").addEventListener("click", function(e) {
    console.log(e.target.value);
  });
};

document.querySelector("#add-button").addEventListener("click", function(e) {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-input").value;
  const priority = document.querySelector("#priority-input").value;
  const stage = document.querySelector("#stage-input").value;

  // console.log(stage)
  const task = new Task(title, description, priority, stage);

  const ui = new UI();
  if (stage === "doing") {
    ui.addTask(task);
  }
  ui.addTask(task);
});
