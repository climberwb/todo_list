//  Add Box Elements
var newTaskInput = document.getElementById('new-task');
var addLink = document.getElementsByTagName('button')[0];

// TODO list Elements
var incompleteList = document.getElementById('incomplete-tasks');
var completeList = document.getElementById('completed-tasks');
var editButtons = document.getElementsByClassName('edit');
var deleteButtons = document.getElementsByClassName('delete');
var checkBoxes = document.querySelectorAll("input[type=checkbox]");


// Add Item to TODO list
var addIncompleteItem = function(){
  console.log("addIncompleteItem");

  // create incomplete todo item elements]
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var labelTask = document.createElement("label");
  var inputTask = document.createElement("input");
  var editButton = document.createElement("button")
  var deleteButton = document.createElement("button")

  // add Classes to buttons
  editButton.className = "edit";
  editButton.innerText = "edit"
  deleteButton.className = "delete";
  deleteButton.innerText = "delete"

  //turn input into checkbox
  checkbox.type = "checkbox";
  inputTask.type = "text";

  //put text into label
  var text = newTaskInput.value;
  labelTask.innerText = text;

  // append elements to incomplete list
  listItem.appendChild(checkbox);
  listItem.appendChild(checkbox);
  listItem.appendChild(labelTask);
  listItem.appendChild(inputTask);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  incompleteList.appendChild(listItem);

  // empty input labelTask 
  newTaskInput.value = "";
  eventListenerBinding(editButton, editTask,"click");
  eventListenerBinding(checkbox, markComplete,"change");
  eventListenerBinding(deleteButton, deleteTask,"click");
}

// toggle checkbox moves to completed uncheck remains uncompleted
var markComplete = function(){
  console.log('mark Complete');
  var listItem = this.parentNode;
  if(this.checked){
    completeList.appendChild(listItem);
  }
  else{
    incompleteList.appendChild(listItem);
  }
}

//edit in TODO allows editing of TODO list
var editTask = function(){
  console.log('edit task');
  var listItem = this.parentNode;
  var label = listItem.querySelector('label');
  var input = listItem.querySelector('input[type=text]');

  if(listItem.className ==="editMode"){
    //debugger;
      listItem.className="";
      label.innerText = input.value;
  }
  else{

      listItem.className="editMode";
      label.innerText = input.value;
      //input.value = label.innerText;
  }
}

//edit in Completed allows editing of completed list

// Delete removes the todo list item
var deleteTask = function(){
  console.log('delete task');
  this.parentNode.remove();
}
//eventListener to add incomplete Item
document.getElementsByTagName("button")[0].addEventListener("click", addIncompleteItem);
// event listener function
var eventListenerBinding = function(element,eventFunction,eventType){
  element.addEventListener(eventType,eventFunction);
}
// edit task event listener
for(var i=0; i<editButtons.length;i++){
  eventListenerBinding(editButtons[i],editTask,"click");
}
// list item event listeners
for(var i=0; i<checkBoxes.length;i++){
  eventListenerBinding(checkBoxes[i],markComplete,"change");
  eventListenerBinding(deleteButtons[i],deleteTask,"click");
}


