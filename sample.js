var taskInput=document.getElementById('new-task');//new-task
var addButton=document.getElementsByTagName('button')[0];//first task of page
var incompleteTasksHolder=document.getElementById('incomplete-tasks');//incomplete-tasks

var completedTasksHolder=document.getElementById('completed-tasks'); //completed-tasks

var createNewTaskElement= function(labelText){
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  //Each element needs modifying
  checkBox.type="checkbox";
  editInput.type="text";
  editButton.innerText = "Edit";
  
  deleteButton.innerText = "Delete";
  editButton.className="edit";
  deleteButton.className="delete";
  label.innerText=labelText;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  
  return listItem;
};

var addTask = function(){
  console.log(this);
var newListItem=createNewTaskElement(taskInput.value);
 incompleteTasksHolder.appendChild(newListItem);
  bindTaskEvents(newListItem,taskIncomplete);
  taskInput.value="";
  
}

var editTask = function(){
  console.log('editTask');
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass){
    label.innerText=editInput.value;
  }else{
    
     editInput.value=label.innerText;
  }
  listItem.classList.toggle('editMode');
}

var deleteTask = function(){
  console.log('deleteTask');
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var taskCompleted = function(){
  console.log('taskCompleted');
  var listItem=this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskIncomplete);
}
var taskIncomplete = function(){
  console.log("task Incomplete");
  var listItem=this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
};


var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
  console.log("Bind Tasks");
  var checkBox=taskListItem.querySelector("input[type=checkbox]");
  var deleteButton=taskListItem.querySelector('button.delete');
  var editButton=taskListItem.querySelector('button.edit');
  
//  deleteButton.onclick=deleteTask;
//  editButton.onclick=editTask;
//  checkBox.onchange=checkBoxEventHandler;
//  
};

addButton.onclick = addTask;
addButton.addEventListener("click",addTask);
for(var i =0; i<incompleteTasksHolder.children.length;i++){
  bindTaskEvents(incompleteTasksHolder.children[i],taskCompleted);
}
for(var i =0; i<completedTasksHolder.children.length;i++){
  bindTaskEvents(completedTasksHolder.children[i],taskCompleted);
}
