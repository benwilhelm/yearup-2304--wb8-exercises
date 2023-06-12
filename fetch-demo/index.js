const pre = document.querySelector('pre')

const url = "http://localhost:3000/todos"

const newTodo = {
  title: "My new todo",
  completed: false,
  userId: 3
}

const options = {
  method: "POST",
  body: JSON.stringify(newTodo),
  headers: {
    "Content-type": "application/json",
  }
}

fetch(url, options)
.then(response => response.json())
.then(todo => {
  pre.innerHTML = JSON.stringify(todo, null, '  ')
})