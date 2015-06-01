//  Add Box Elements
var newTaskInput = document.getElementById('new-task');
var addLink = document.getElementsByTagName('button')[0];
// TODo list Elements
var incompleteList = document.getElementById('incomplete-tasks');




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
  labelTask.value = text;
  // append elements to incomplete list
  listItem.appendChild(checkbox);
  listItem.appendChild(checkbox);
  listItem.appendChild(labelTask);
  listItem.appendChild(inputTask);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  incompleteList.appendChild(listItem);


}

// toggle checkbox moves to completed
// toggle in checklist allows

//edit in TODO allows editing of TODO list

//edit in Completed allows editing of completed list

// Delete removes the todo list item

//eventListener to add incomplete Item

