const addBtn = document.getElementById('addBtn')
const titleInputEl = document.getElementById('title')
const userIdInputEl = document.getElementById('userId')
const messageEl = document.getElementById('message')

addBtn.addEventListener('click', () => {
  const todoValues = {
    title: titleInputEl.value, 
    userId: +userIdInputEl.value,
    completed: false
  }
  
  console.log(todoValues)
  const url = `http://localhost:3000/todos`
  const options = {
    method: "POST",
    body: JSON.stringify(todoValues),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
  }
  
  fetch(url, options)
  .then(response => response.json())
  .then(newTodo => {
    const message = `Created new Todo with ID ${newTodo.id}`
    messageEl.innerHTML = message
  })
})