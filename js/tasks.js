// This is JSON - JavaScript Object Notation
// Key - value pair

var tasks = [];

function compare(a, b) {
  if (a.task < b.task)
    return -1;
  if (a.task > b.task)
    return 1;
  return 0;
}


function drawList() {

  // This func builds a list of to do tasks
  // prints to HTML
  var ul = document.createElement("ul");
  var length = tasks.length;

  tasks.sort(compare);

  for (var i = 0; i < length; i++) {
    var t = tasks[i];
    // var task = "Task: " + t.task + " is assigned to: " + t.person + ", level of difficulty is : "
    //           + t.difficult;
    var task = t.person + " needs to " + t.task + " (" + t.difficult + ") ";
    var text = document.createTextNode(task);
    var li = document.createElement("li");
    // li.innerHTML = roof;
    li.appendChild(text);
    ul.appendChild(li);
  }
  // var div1 = document.getElementById("list-container");
  var parent = document.querySelector("#list-container");
  //clear out any existing staff
  // parent.innerHTML = "";
  parent.innerHTML = "<h3>Task List: </h3>";
  parent.appendChild(ul);
}

function taskListBuilder() {
  // console.log("Building a list of tasks!");
  event.preventDefault(); //to prevent the form from submitting to server and refreshing the page

  var form = document.querySelector("form");
  // var form = document.getElementById("todo-tasks");
  //create a new house JSON

  // Find the task
  var name = form.taskName.value;

  // Find who the task is assigned to
  var radios = document.getElementsByName("assignee");
  var forId = form.assignee.value;
  var whoIs = 'label[for=' + radios[forId].id + ']';
  var assigned = document.querySelector(whoIs);

  // Find the difficulty of the task
  var d = document.getElementById("difficulty");
  var selected = d.options[d.selectedIndex].text;
  var newTask = {task: name, person: assigned.innerHTML, difficult: selected};
  form.taskName.value = "";
  tasks.push(newTask);

   drawList();
}

function onWindowLoad() {
   drawList();

   //Select the form, and attach houseBuilder as onSubmit handler
   var form = document.querySelector("form");
   form.onsubmit = taskListBuilder;
}

window.onload = onWindowLoad;
//
// window.onload = function() {
//   // // console.log(document.getElementById('see-me'));
//   // // console.log(document.getElementsByClassName('great-house'));
//   //
//   // var paras = document.querySelectorAll('p');
//   // // for (var i = 0; i < paras.length; i++ ) {
//   // //   console.log(paras[i]);
//   // // }
//   //
//   // // var h1 = document.getElementsByTagName("h1");
//   // // var h1 = document.querySelectorAll("h1");
//   // // h1[0].classList.add("bright");
//   // var h1 = document.querySelector("h1");
//   // h1.classList.add("bright");
//   //
//   //
//   // var div = document.createElement("div");
//   // var p = document.createElement("p");
//   // p.innerHTML = "Easier to read text!";
//   // var text = document.createTextNode("This is text");
//   // p.appendChild(text);
//   // div.appendChild(p);
//   //
//   // var parent = document.getElementById("parent");
//   // parent.appendChild(div);
//
//   // var frm = document.getElementById("list-tasks");
//   // frm.removeChild("li") ;
//
//
//    drawList();
//
//    //Select the form, and attach houseBuilder as onSubmit handler
//    var form = document.querySelector("form");
//    form.onsubmit = taskListBuilder;
// }
