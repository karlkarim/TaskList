const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');


loadEventListeners();


function loadEventListeners(){
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
}

function addTask(event){
    if(taskInput.value === ''){
        alert('Add task!');
    }

    //create an li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const removeLink = document.createElement('a');
    removeLink.className = 'delete-item secondary-content';
    removeLink.innerHTML = 'X';
    li.appendChild(removeLink);


    taskList.appendChild(li);



    
    event.preventDefault();
}

function removeTask(event){

    if(event.target.classList.contains('delete-item')){
        if(confirm('Are you sure you wan tto delete task?')){
            event.target.parentElement.remove();
        }
    }


}