// set up validation for input text
document.querySelector('#button').onclick = function () {
  if (document.querySelector('#text-input').value.length == 0) {
    alert('Please enter a task...')
  }
}

