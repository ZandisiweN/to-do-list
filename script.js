// set up validation for input text
document.querySelector('#button').onclick = function () {
  if (document.querySelector('#text-input').value.length == 0) {
    alert('Please enter a task...')
  } else {
    // Add a task
    document.querySelector('#tasks').innerHTML
      = `
     <div class = "task">
     <span id = "taskname">
      ${document.querySelector('#newtask input').value}
     </span>
     <button class="delete">
        <i class="fa-regular fa-trash-can"></i>
     </button>
     <div>
     `

    let current_tasks = document.querySelectorAll('.delete');
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove()
      }

    }
  }
  // Cross off completed tasks
  let tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.classList.toggle('completed')
    }
  }

}

