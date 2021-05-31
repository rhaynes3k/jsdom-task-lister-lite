document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault

  let tForm = document.getElementById('create-task-form')
  let tList = document.getElementById('tasks')
  let btn = document.createElement('BUTTON')
  btn.innerHTML = 'Delete'
  tForm.addEventListener("submit", function(e){
    e.preventDefault()
  let input = document.getElementById('new-task-description').value
  //let newTask = document.createElement('li')
  tList.innerHTML += `<li>
    ${input}
    <button> Delete </button>
    </li>
    `
    //console.log(tList)
  //tList.appendChild(newTask)
  tForm.reset()
  //  delete function
  function delBtn(e){
    e.target.parentElement.remove()
  }
  tList.addEventListener('click', delBtn)
  })
  // end delete function

  // your code here
});
