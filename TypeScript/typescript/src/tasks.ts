// 6:09:20
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description:string;
  isCompleted: boolean;
}

const tasks:Task[] = [];

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  const taskDescription = formInput?.value
  if(taskDescription) {
    const task:Task = {
        description: taskDescription,
        isCompleted: false
    }
    addTask(task)
    // add task to list
    // render task
    renderTask(task)
    // update local storage
    formInput.value = ''
    return;
  }
  alert('Please enter task description')
})

function addTask(task:Task):void{
  tasks.push(task)
  console.log(tasks)
}

function renderTask(task:Task):void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description
  taskListElement?.appendChild(taskElement)
}