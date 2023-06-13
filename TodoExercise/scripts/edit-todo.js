const goBtnEl = document.getElementById('goBtn')
const todoIdInputEl = document.getElementById('todoIdInput')

const titleInputEl = document.getElementById('title')
const userIdInputEl = document.getElementById('userId')
const completedInputEl = document.getElementById('completed')
const updateBtnEl = document.getElementById('updateBtn')
const cancelBtnEl = document.getElementById('cancelBtn')

const messageEl = document.getElementById('message')



goBtnEl.addEventListener('click', () => {
  const todoId = todoIdInputEl.value
  const url = `http://localhost:3000/todos/${todoId}`

  fetch(url)
  .then(response => response.json())
  .then(todo => {
    todoIdInputEl.disabled = true
    titleInputEl.value = todo.title
    userIdInputEl.value = todo.userId
    completedInputEl.checked = todo.completed
  })
})

updateBtnEl.addEventListener('click', () => {
  const todoId = todoIdInputEl.value
  const url = `http://localhost:3000/todos/${todoId}`
  const options = {
    method: "PUT",
    body: JSON.stringify({
      title: titleInputEl.value,
      userId: userIdInputEl.value,
      completed: completedInputEl.checked
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }
  fetch(url, options)
  .then(response => response.json())
  .then(updatedTodo => {
    const message = `Todo #${updatedTodo.id} successfully updated` 
    messageEl.innerHTML = message
  })
})

cancelBtnEl.addEventListener('click', () => {
  window.location.href = './index.html'
})