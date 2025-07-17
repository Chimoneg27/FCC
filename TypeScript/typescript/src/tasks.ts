// 6:09:20
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description:string;
  isCompleted: boolean;
}

const tasks:Task[] = loadTasks();

tasks.forEach(renderTask)

function loadTasks():Task[]{
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks? JSON.parse(storedTasks) : []
}

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
    updateStorage()
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
   // checkbox
  const taskCheckBox = document.createElement('input')
  taskCheckBox.type = 'checkbox'
  taskCheckBox.checked = task.isCompleted

  // toggle checkbox
  taskCheckBox.addEventListener('change', ()=> {
    task.isCompleted = !task.isCompleted
    updateStorage()
  })
  taskElement.appendChild(taskCheckBox)
  taskListElement?.appendChild(taskElement)
}

function updateStorage():void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
