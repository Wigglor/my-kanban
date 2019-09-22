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

  const output = document.querySelector(`#${divId}-output`);
  //   const output = document.querySelector(`.${divId} kanban-item`);
  const cardTask = document.createElement("div");
  cardTask.setAttribute("class", `kanban-item-task-${prioColor}`);
  //   cardTask.setAttribute("class", `kanban-item-task`);
  cardTask.innerHTML = `
    <i class="fas fa-times"></i>  
    <h2>${task.title}</h2>
    <p>${task.description}</p>
    <p><b>Prio: </b>${task.priority}</p>
    <p><b>Stage: </b>${task.stage}</p>
    `;
  output.appendChild(cardTask);
  // console.log(cardTask)
};

//remove a task
UI.prototype.removeTask = function(target) {
  //   console.log(target.childNodes[0].childNodes[1].className);
  if (target.className === "fas fa-times") {
    target.parentElement.remove();
  }
};

document.querySelector("#add-button").addEventListener("click", function(e) {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-input").value;
  const priority = document.querySelector("#priority-input").value;
  const stage = document.querySelector("#stage-input").value;

  const task = new Task(title, description, priority, stage);

  const ui = new UI();
  //   if (stage === "doing") {
  //     ui.addTask(task);
  //   }
  ui.addTask(task);
});

document
  .querySelector(".kanban-section")
  .addEventListener("click", function(e) {
    console.log(e.target);
    // console.log(e.target.childNodes[0].className);
    const ui = new UI();

    ui.removeTask(e.target);

    e.preventDefault();
  });
