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
      {
        title: "Number 1",
        description: "Kanban Item 1",
        priority: "low",
        stage: "doing",
        points: 1,
        id: 0
      },
      {
        title: "Number 2",
        description: "Kanban Item 2",
        priority: "medium",
        stage: "todo",
        points: 5,
        id: 1
      },
      {
        title: "Number 3",
        description: "Kanban Item 3",
        priority: "high",
        stage: "done",
        points: 10,
        id: 2
      }
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
      if(data.task.length > 0){
        ID = data.task[data.task.length - 1].id + 1;
      } else{
        ID = 0
      }

      newTask = new Task(title, description, priority, stage, ID)
      
      data.task.push(newTask)

      return newTask
      
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    btnEl: "#add-button",
    titleInput: "#title-input",
    descriptionInput: "#description-input",
    priorityInput: "#priority-input",
    stageInput: "#stage-input",
    todoOutput: "#todo-output"
  };

  // Public methods
  return {
    populateTaskList: function(tasks) {
      let html = "";

      tasks.forEach(function(task) {
        html += `
                <i class="fas fa-times"></i>  
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p><b>Prio: </b>${task.priority}</p>
                <p><b>Stage: </b>${task.stage}</p>
                <p><b>Points: </b>${task.points}</p>
                <p><b>ID: </b>${task.id}</p>
                `;
      });

      document.querySelector(UISelectors.todoOutput).innerHTML = html;
    },
    getSelectors: function() {
      return UISelectors;
    },
    getTaskInput: function() {
      return {
        title: document.querySelector(UISelectors.titleInput),
        description: document.querySelector(UISelectors.descriptionInput),
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
      
      if(input.title.value !== "" && input.description.value !== ""){
      const newTask = TaskCtrl.addTask(input.title, input.description, input.priority, input.stage)
      }

      e.preventDefault();
    };
    document
      .querySelector(UISelectors.btnEl)
      .addEventListener("click", taskAddSubmit);
  };

  // console.log(TaskCtrl.logData().task)
  // console.log(TaskCtrl.getTasks())
  return {
    init: function() {
      // console.log('Initializing App...');

      const tasks = TaskCtrl.getTasks();
      console.log(tasks);

      UICtrl.populateTaskList(tasks);

      loadEventListeners();
    }
  };
})(TaskCtrl, UICtrl);

// Initialize App
App.init();
