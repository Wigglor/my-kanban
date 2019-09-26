// Storage Controller


// Task Controller
const TaskCtrl = (function(){
    // Task Constructor
    const Task = function(title, description, priority, stage){
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.stage = stage;
      this.points = points;
    }
  
    // Data Structure / State
    const data = {
      task: [
        {title: "Number 1", description: 'Kanban Item 1', priority:"low", stage: "doing", points: 1},
        {title: "Number 2", description: 'Kanban Item 2', priority:"medium", stage: "todo", points: 5},
        {title: "Number 3", description: 'Kanban Item 3', priority:"high", stage: "done", points: 10}
      ],
      currentTask: null,
      totalPoints: 0
    }
  
    // Public methods
    return {
      logData: function(){
        return data;
      },
      getTasks: function(){
        return data.task;
      },
      addTask: function(){
        const newTask = new Task(title, description, priority, stage)
        data.task.push(newTask)
      }
      
    }
  })();
  
  
  
  // UI Controller
  const UICtrl = (function(){
      const UISelectors = {
          btnEl: '#add-button',
          titleInput: '#title-input',
          descriptionInput: '#description-input',
          priorityInput: '#priority-input',
          stageInput: '#stage-input',
          todoOutput: '#todo-output'
      }

    // Public methods
    return {
        populateTaskList: function(tasks){
            let html = '';

            tasks.forEach(function(task){
                html+= `
                <i class="fas fa-times"></i>  
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p><b>Prio: </b>${task.priority}</p>
                <p><b>Stage: </b>${task.stage}</p>
                <p><b>Points: </b>${task.points}</p>
                `;
            });

            document.querySelector(UISelectors.todoOutput).innerHTML = html;
        },
        getSelectors: function(){
            return UISelectors;
        },
        inputTitle: function(){
            document.querySelector(UISelectors.titleInput).addEventListener("input", function(e){
                const todoSection = document.querySelector(UISelectors.todoOutput)
                const output = document.createElement("div");
                output.innerHTML = e.target.value;
                todoSection.appendChild(output)
            })
        },
        inputDescription: function(){
            document.querySelector(UISelectors.descriptionInput).addEventListener("input", function(e){
                console.log(e.target.value)
            })
        },
        inputPriority: function(){
            document.querySelector(UISelectors.priorityInput).addEventListener("input", function(e){
                console.log(e.target.value)
            })
        },
        inputStage: function(){
            document.querySelector(UISelectors.stageInput).addEventListener("input", function(e){
                console.log(e.target.value)
            })
        },
        btnClick: function(){
            document.querySelector(UISelectors.btnEl).addEventListener("click", function(e){
                console.log(e)
                // console.log("clicked the button twice")
            })
        }
    }
  })();
  
  
  
  // App Controller
  const App = (function(TaskCtrl, UICtrl){
    // Public methods
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors()
    }
    // UICtrl.inputTitle();
    UICtrl.inputDescription();
    UICtrl.inputPriority();
    UICtrl.btnClick();
    UICtrl.inputStage();
    UICtrl.inputTitle()

    // console.log(TaskCtrl.logData().task)
    // console.log(TaskCtrl.getTasks())
    return {
      init: function(){
        // console.log('Initializing App...');

        const tasks = TaskCtrl.getTasks()
        console.log(tasks)

        UICtrl.populateTaskList(tasks)
      },


    }
    
  })(TaskCtrl, UICtrl);
  
  // Initialize App
  App.init();