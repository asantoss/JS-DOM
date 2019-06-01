/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var newTask = document.getElementById("description");
var submitBtn = document.getElementById("add-button");
var finishBtns = document.getElementsByClassName("finishbtn")


submitBtn.addEventListener('click', function() {

    //Declae all the variables that we will use in this function
    var taskItem = document.createElement("li");

    var finishbtn = document.createElement('button');
    //Set all the attributes&Classes to our new elements
    taskItem.setAttribute("onclick", "editItems()");
    finishbtn.setAttribute('class', "finishbtns")
    finishbtn.innerText = "Finish";
    //Append all the elements we created to the parent.

    taskItem.innerText = document.getElementById("description").value;
    document.getElementById("todo-list").appendChild(taskItem);

    finishbtn.addEventListener('click', function() {
        if (finishbtn.parentElement.classList.contains('finished')) {
            finishbtn.parentElement.classList.remove('finished')
        } else {
            finishbtn.parentElement.classList.add('finished')
        }
    })
})







var editItems = function() {
    var taskList = document.querySelectorAll('li');
    //Loop through the array of li elements
    for (let i = 0; i < taskList.length; i++) {
        const element = taskList[i];
        element.addEventListener('click', function() {
            document.getElementById('description').value = this.innerText;
            element.parentNode.removeChild(element)
        })
    }
}