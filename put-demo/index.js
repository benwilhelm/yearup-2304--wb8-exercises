fetch('http://localhost:3000/todos/1')
.then(response => response.json())
.then((todo) => {
  document.getElementById('title').value = todo.title
  document.getElementById('completed').checked = todo.completed
})

document.querySelector('button').addEventListener('click', () => {
  const params = {
    title: document.getElementById('title').value,
    completed: document.getElementById('completed').checked
  }

  fetch('http://localhost:3000/todos/1', {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
  })
  .then(response => response.json())
  .then(updatedTodo => {
    alert('success!')
    console.log(updatedTodo)
  })
})

