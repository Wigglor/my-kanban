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
      }
    }
  })();
  
  
  
  // UI Controller
  const UICtrl = (function(){
    
    // Public methods
    return {
  
    }
  })();
  
  
  
  // App Controller
  const App = (function(TaskCtrl, UICtrl){
    // Public methods
    const myItems = TaskCtrl.getTasks()
    // console.log(myItems)
    console.log(TaskCtrl.logData().task.length)
    return {
      init: function(){
        console.log('Initializing App...');
      }
    }
    
  })(TaskCtrl, UICtrl);
  
  // Initialize App
  App.init();