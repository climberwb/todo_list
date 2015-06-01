//  Add Box Elements
var newTaskInput = document.getElementById('new-task');
var addLink = document.getElementsByTagName('button')[0];

// TODO list Elements
var incompleteList = document.getElementById('incomplete-tasks');
var editButtons = document.getElementsByClassName('edit');



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
}

// toggle checkbox moves to completed
// toggle in checklist allows

//edit in TODO allows editing of TODO list
var editTask = function(){
  console.log('edit task');
}

//edit in Completed allows editing of completed list

// Delete removes the todo list item

//eventListener to add incomplete Item
document.getElementsByTagName("button")[0].addEventListener("click", addIncompleteItem);

// edit task event listener
for(var i=0; i<editButtons.length;i++){
  editButtons[i].addEventListener("click", editTask);
}
