// Business Logic for TaskList
function TaskList() {
  this.tasksToDo = [];
  this.tasksId = 0;
}

TaskList.prototype.addTaskSet = function (task) {
  task.id = this.assignId();
  this.tasksToDo.push(task);
};

TaskList.prototype.assignId = function () {
  this.taskId += 1;
  return this.taskId;
};

TaskList.prototype.findTask = function (id) {
  for (var i = 0; i < this.tasksToDo.length; i++) {
    if (this.tasksToDo[i]) {
      if (this.tasksToDo[i].id == id) {
        return this.tasksToDo[i];
      }
    }
  };
  return false;
};

TaskList.prototype.deleteTask = function (id) {
  for (var i = 0; i < this.tasksToDo.length; i++) {
    if (this.tasksToDo[i]) {
      if (this.tasksToDo[i].id == id) {
        delete this.tasksToDo[i];
        return true;
      }
    }
  };
  return false;
};

var taskListLog = new TaskList();

// Business Logic for input Tasks
function TaskToDo(primaryTask, subTasks) {
  this.primaryTask = primaryTask;,
  this.subTasks = subTasks
}



// Manipulation functions for UI, Tasks, and Task List

function checkSubTasks(task) {
  var subTaskCount = task.subTasks.length;
  var completedCount = 0;
  var currentCheck = 0;
  task.subTasks.forEach(subTask)
  {
    if ($("input.task" + task.id + "subtask").is(":checked")) {
      completedCount += 1;
    }
    currentCheck += 1;
  }
  if (completedCount == subTaskCount) {
    return true;
  }
  else {
    return false;
  }
}

function removeCompletedTask(id) {
  var taskToCheck = taskListLog.findTask(id);
  if (checkSubTasks(taskToCheck)) {
    taskListLog.deletePlace(id);
    console.log(id);
    $("div#task"+id).remove();
  }
}

function establishSubTasks(id) {
  var taskToEstablish = taskListLog.findTask(id);
  var initialSubTasks = taskToEstablish.subTasks;
  var finalSubTasks = [];
  var subTaskCount = 1;
  initialSubTasks.forEach(subTask) {
    if (subTask != "") {
      finalSubTasks.push(subTask);
      subTaskCount += 1;
    }
  }
  console.log(subTaskCount);
  console.log(finalSubTasks);
  
}
