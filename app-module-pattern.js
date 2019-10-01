// Storage Controller

// Task Controller
const TaskCtrl = (function() {
  // Task Constructor
  const Task = function(title, description, priority, stage, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.stage = stage;
    // this.points = points;
    this.id = id;
  };

  // Data Structure / State / dummy data
  const data = {
    task: [
      // {
      //   title: "Number 1",
      //   description: "Kanban Item 1",
      //   priority: "low",
      //   stage: "doing",
      //   points: 1,
      //   id: 0
      // }
      // ,
      // {
      //   title: "Number 2",
      //   description: "Kanban Item 2",
      //   priority: "medium",
      //   stage: "todo",
      //   points: 5,
      //   id: 1
      // },
      // {
      //   title: "Number 3",
      //   description: "Kanban Item 3",
      //   priority: "high",
      //   stage: "done",
      //   points: 10,
      //   id: 2
      // }
    ],
    currentTask: null,
    totalPoints: 0
  };

  // Public methods
  return {
    logData: function() {
      return data;
    },
    getTasks: function() {
      return data.task;
    },
    addTask: function(title, description, priority, stage) {
      let ID;
      if (data.task.length > 0) {
        ID = data.task[data.task.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // console.log(ID);
      newTask = new Task(title, description, priority, stage, ID);
      console.log(newTask);
      data.task.push(newTask);

      return newTask;
    },
    getTaskById: function(id) {
      let found = null;
      // Loop through items
      data.task.forEach(function(tsk) {
        if (tsk.id === id) {
          found = tsk;
        }
      });
      return found;
    },
    getCurrentTask: function() {
      return data.currentTask;
    },
    setCurrentTask: function(task) {
      // const matchID = data.task.map(function(myID) {
      //   return myID === task;
      // });

      // console.log(task);
      // const newMap = data.task.map(function(dataTask) {
      //   if (dataTask.id === task) {
      //     console.log(dataTask);
      //     return dataTask;
      //   }
      // });
      // console.log(data.task[0]);
      console.log(task);
      // console.log(newMap[0]);
      // return (data.currentTask = newMap[0]);
      return (data.currentTask = task);
    },
    deleteTask: function(target) {
      // console.log(target);

      const ids = data.task.map(function(tsk) {
        return tsk.id;
      });
      // console.log(ids);

      const index = ids.indexOf(target);
      // console.log(index);
      data.task.splice(index, 1);

      // console.log(index);

      // const ids = data.task.map(function(tsk) {
      //   return tsk;
      // });

      // const index = ids.indexOf(target);

      // console.log(data.task);
      /*const loopData = data.task;

      loopData.forEach(function(task, i) {
        if (task.id.toString() === target.parentNode.id) {
          // console.log(task.id.toString());
          console.log(task);
          console.log(`task: ${task.id} index: ${i}`);
        }
      });*/

      // const index = loopData.indexOf(target);
      // console.log(index);
      // console.log(data.task[0].id.toString());

      // console.log(target.parentNode.id);
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    kanbanSection: ".kanban-section",
    btnEl: "#add-button",
    titleInput: "#title-input",
    descriptionInput: "#description-input",
    priorityInput: "#priority-input",
    stageInput: "#stage-input",
    todoOutput: "#todo-output",
    doingOutput: "#doing-output",
    blockedOutput: "#blocked-output",
    doneOutput: "#done-output",
    queueOutput: "#queue-output",
    itemTask: ".kanban-item-task",
    itemTaskinfo: "kanban-item-info-area",
    removeIcon: ".fas.fa-times",
    removeIcon2: "fas fa-times"
  };

  // Public methods
  return {
    populateTaskList: function(tasks) {
      let html = "";

      tasks.forEach(function(task) {
        html += `
        <div class="kanban-item-task">
        <div class="kanban-item-info-area">
                <i class="fas fa-times"></i>  
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p><b>Prio: </b>${task.priority}</p>
                <p><b>Stage: </b>${task.stage}</p>
                <p><b>Points: </b>${task.points}</p>
                <p><b>ID: </b>${task.id}</p>
            </div>
            </div>
                `;
      });

      document.querySelector(UISelectors.todoOutput).innerHTML = html;
    },
    getSelectors: function() {
      return UISelectors;
    },
    addTaskItem: function(task) {
      // console.log(task.priority.value);
      const div = document.createElement("div");
      div.className = `kanban-item-task-${task.priority.value}`;
      // div.id = `task-${task.id}`;
      div.id = `id-${task.id}`;
      div.innerHTML = `
      <div class="kanban-item-info-area">
      <i class="fas fa-times"></i>  
      <h2>${task.title}</h2>
      <p>${task.description}</p>
      <p><b>Prio: </b>${task.priority.value}</p>
      <p><b>Stage: </b>${task.stage.value}</p>
      <p><b>ID: </b>${task.id}</p>
      </div>
      `;

      if (task.stage.value === "todo") {
        document
          .querySelector(UISelectors.todoOutput)
          .insertAdjacentElement("beforeend", div);
      } else if (task.stage.value === "doing") {
        document
          .querySelector(UISelectors.doingOutput)
          .insertAdjacentElement("beforeend", div);
      } else if (task.stage.value === "blocked") {
        document
          .querySelector(UISelectors.blockedOutput)
          .insertAdjacentElement("beforeend", div);
      } else if (task.stage.value === "done") {
        document
          .querySelector(UISelectors.doneOutput)
          .insertAdjacentElement("beforeend", div);
      } else if (task.stage.value === "queue") {
        document.querySelector(UISelectors.queueOutput).className =
          "compare-section";
        //replace class here with .kanban-item-insert-queue
        document
          .querySelector(UISelectors.queueOutput)
          .insertAdjacentElement("beforeend", div);
      }

      // if(task.priority.value = "low"){

      // }
    },
    getTaskInput: function() {
      return {
        title: document.querySelector(UISelectors.titleInput).value,
        description: document.querySelector(UISelectors.descriptionInput).value,
        priority: document.querySelector(UISelectors.priorityInput),
        stage: document.querySelector(UISelectors.stageInput)
      };
    },
    inputTitle: function() {
      document
        .querySelector(UISelectors.titleInput)
        .addEventListener("input", function(e) {
          const todoSection = document.querySelector(UISelectors.todoOutput);
          const output = document.createElement("div");
          output.innerHTML = e.target.value;
          todoSection.appendChild(output);
        });
    },
    clearInput: function() {
      document.querySelector(UISelectors.titleInput).value = "";
      document.querySelector(UISelectors.descriptionInput).value = "";
    },
    deleteTaskItem: function(target) {
      const element = document.getElementById(target);
      element.parentNode.removeChild(element);
      /*
      // console.log(target);
      // console.log(typeof target.id)
      // const mySelector = document.querySelector(UISelectors.itemTask)
      // console.log(mySelector)
      const myString = target.toString();
      console.log(myString);
      // console.log(target.id)
      const taskID = `#id-${myString}`;
      console.log(taskID);
      // const task = document.querySelector(taskID);
      // task.remove();
      // console.log(target.id.toString());
      // const taskID = `${target.id.toString()}`;
      // const task = document.querySelector(taskID);
      // console.log(task)
      // if (target.className === "fas fa-times") {
      //   console.log(target);
      //   // target.parentNode.remove();
      //   // TaskCtrl.deleteTask(target);
      // }
      */
    }
  };
})();

// App Controller
const App = (function(TaskCtrl, UICtrl) {
  // Public methods
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    const taskAddSubmit = function(e) {
      const input = UICtrl.getTaskInput();
      // console.log(input.title);
      // console.log(input);
      // console.log(input);

      if (input.title !== "" && input.description !== "") {
        const newTask = TaskCtrl.addTask(
          input.title,
          input.description,
          input.priority,
          input.stage
        );
        // console.log(newTask)
        // console.log(TaskCtrl.logData());
        UICtrl.addTaskItem(newTask);
      }

      UICtrl.clearInput();
      e.preventDefault();
    };

    document
      .querySelector(UISelectors.btnEl)
      .addEventListener("click", taskAddSubmit);
    document
      .querySelector(UISelectors.kanbanSection)
      .addEventListener("click", taskDeleteSubmit);
  };

  const taskDeleteSubmit = function(e) {
    let taskID, split, ID;
    taskID = e.target.parentNode.parentNode.id;
    if (taskID) {
      split = taskID.split("id-");
      ID = parseInt(split[1]);

      const currentTask = TaskCtrl.getCurrentTask();
      // console.log(currentTask);
      const getTasktoSet = TaskCtrl.getTaskById(ID);
      // console.log(getTasktoSet);
      TaskCtrl.setCurrentTask(getTasktoSet);

      //Delete from Data structure
      TaskCtrl.deleteTask(ID);

      //Delete from UI
      UICtrl.deleteTaskItem(taskID);
    }

    /*// console.log(e.target);
    // console.log(currentTask)
    // if (e.target.className === UISelectorsDelete.removeIcon2) {
    if (e.target.className === UISelectorsDelete.itemTaskinfo) {
      // console.log(e.target.parentNode.id)
      const id = parseInt(e.target.parentNode.id);
      // console.log(id);
      const id2 = e.target.parentNode.id;
      // console.log(id2.split("id-"))
      const split = id2.split("id-");
      // console.log(split[1])
      const parseSplitId = parseInt(split[1]);
      // console.log(parseSplitId)

      // console.log(id);
      // const taskToDelete = TaskCtrl.getTaskById(id);
      const taskToDelete = TaskCtrl.getTaskById(parseSplitId);
      // console.log(taskToDelete)
      TaskCtrl.setCurrentTask(taskToDelete);

      const currentTask = TaskCtrl.getCurrentTask();
      // console.log(currentTask);
      // console.log("Hej");

      // Delete from data structure
      TaskCtrl.deleteTask(currentTask);

      // Delete from UI
      // UICtrl.deleteTaskItem(currentTask.id);
      console.log(uuidv1());

      const taskID = `#id-${currentTask.id.toString()}`;
      console.log(taskID);
      const task = document.querySelector(taskID);
      task.remove();
    } else {
      console.log("Something went wrong!");
    }*/

    // console.log(e.target.className);

    e.preventDefault();
  };
  // console.log(TaskCtrl.logData().task)
  // console.log(TaskCtrl.getTasks())
  return {
    init: function() {
      // console.log('Initializing App...');

      const tasks = TaskCtrl.getTasks();

      UICtrl.populateTaskList(tasks);

      loadEventListeners();
    }
  };
})(TaskCtrl, UICtrl);

// Initialize App
App.init();
