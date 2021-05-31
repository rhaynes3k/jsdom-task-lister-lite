document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault

  let tForm = document.getElementById('create-task-form')
  let tList = document.getElementById('tasks')
  let btn = document.createElement('BUTTON')
  btn.innerHTML = 'button'
  tForm.addEventListener("submit", function(e){
    e.preventDefault()
  let input = document.getElementById('new-task-description').value
  let newTask = document.createElement('li')
  newTask.innerText = input
  newTask.appendChild(btn)
  tList.appendChild(newTask)
  tForm.reset()
  //  delete function
  function delBtn(e){
    newTask.remove()
    console.log(tList)
  }
  newTask.addEventListener('click', delBtn)
  console.log()
  })
  // end delete function

  // your code here
});
