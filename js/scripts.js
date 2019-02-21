// Business Logic for TaskList
function TaskList() {
  this.tasksToDo = [];
  this.taskId = 0;
}

TaskList.prototype.addTaskSet = function (task) {
  task.id = this.assignId();
  task.completedState = false;
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
  this.primaryTask = primaryTask,
  this.subTasks = subTasks
}

function confirmSubTasks(task){
  var finalSubTasks = [];
  var initialSubTaskList = task.subTasks;
  console.log(initialSubTaskList);
  initialSubTaskList.forEach(function(subTask) {
    if (subTask != "") {
      finalSubTasks.push(subTask);
    }
  });
  console.log(finalSubTasks);
  return finalSubTasks;
}



// Manipulation functions for UI, Tasks, and Task List

function checkSubTasks(id) {
  var taskToCheck = taskListLog.findTask(id);
  var subTaskCount = taskToCheck.subTasks.length;
  var completedCount = 0;
  $("input:checkbox[name=task"+id+"sub]:checked").each(function(){
    completedCount += 1;
  });
  if (completedCount == subTaskCount) {
    taskListLog.tasksToDo[id-1].completedState = true;
    $("span#completed"+id).text("(completed)");
    return true;
  }
  else {
    alert("Not all subtasks are completed.")
    return false;
  }
}
function confirmOverride(id) {
  var overrideChecker = false;
  $("input:checkbox[name=override-task-deletion"+id+"]:checked").each(function() {
    overrideChecker = true;
  });
  return overrideChecker;
}

function removeCompletedTask(id) {
  console.log(taskListLog.tasksToDo[id-1].completedState);
  console.log($("input:checkbox[name=override-task-deletion"+id+"]:checked").val());
  if (taskListLog.tasksToDo[id-1].completedState === true) {
    taskListLog.deleteTask(id);
    console.log(id);
    $("div#primaryTask"+id).remove();
  }
  else if (confirmOverride(id)) {
    taskListLog.deleteTask(id);
    console.log(id);
    $("div#primaryTask"+id).remove();
  }
  else {
    alert("This task is not yet completed.");
  }
}

function appendSubTasks(task) {
  var subTaskCount = 0;
  task.subTasks.forEach(function(subtask) {
    $("div#task-body"+taskListLog.taskId).append(
      "<input type='checkbox' name='task"+taskListLog.taskId+"sub'>" + task.subTasks[subTaskCount] + "<br>"
    );
    subTaskCount += 1;
  });
}

// UI Logic

$(document).ready(function() {
  $("form#task-maker").submit(function(event) {
    event.preventDefault();
    var primaryIn = $("input#primary-task").val();
    var subTaskOne = $("input#sub-task-one").val();
    var subTaskTwo = $("input#sub-task-two").val();
    var subTaskThree = $("input#sub-task-three").val();
    var subTaskFour = $("input#sub-task-four").val();
    var subTaskFive = $("input#sub-task-five").val();
    var subTaskArray = [subTaskOne, subTaskTwo, subTaskThree, subTaskFour, subTaskFive];
    var testTaskGroup = new TaskToDo(primaryIn, subTaskArray);
    testTaskGroup.subTasks = confirmSubTasks(testTaskGroup);
    taskListLog.addTaskSet(testTaskGroup);
    $("div#output-div").append(
      "<div id='primaryTask" + taskListLog.taskId + "' class='col-md-8'>" +
        "<div class='card px-2 py-1'>" +
          "<div class='card-heading bg-primary'><h3>" + testTaskGroup.primaryTask + " <span id='completed"+taskListLog.taskId +"'></span></h3><div id='button"+taskListLog.taskId+"'><button type='button' value='"+taskListLog.taskId+"' onClick='checkSubTasks(this.value)'>Check Completion</button><br><input type='checkbox' name='override-task-deletion"+taskListLog.taskId+"' value='true'>Force Deletion of This Task<br><button type='button' value='"+taskListLog.taskId+"' onClick='removeCompletedTask(this.value)'>Remove this task</button></div></div>" +
          "<div class='card-body bg-muted' id='task-body"+taskListLog.taskId+"'>" +
          "</div></div></div>"
    );
    appendSubTasks(testTaskGroup);
    console.log(taskListLog);
    // console.log(destinationIn);
    // console.log(locCityIn);
    // console.log(locStateIn);
    // console.log(locCountryIn);
    // console.log(landmarksIn);
    // console.log(timeVisitedIn);
    // console.log(notesIn);
    // console.log(testDestination);
  });
});
