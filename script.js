// set up validation for input text
document.querySelector('#button').onclick = function () {
  if (document.querySelector('#text-input').value.length == 0) {
    alert('Please enter a task...')
  } else {
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
  }
}

