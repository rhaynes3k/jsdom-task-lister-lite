document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault

  let tForm = document.getElementById('create-task-form')
  let tList = document.getElementById('tasks')
  tForm.addEventListener("submit", function(e){
    e.preventDefault()
    let input = document.getElementById('new-task-description').value
    tList.innerHTML +=
      `
        <li>
          ${input}
          <button> Delete </button>
        </li>
      `
    tForm.reset()
    //  start of delete function
    function delBtn(e){
      e.target.parentElement.remove()
    }
    // end delete function
  tList.addEventListener('click', delBtn)
  })
});
