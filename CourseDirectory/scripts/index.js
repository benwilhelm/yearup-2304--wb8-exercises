const table = document.querySelector('table')

fetch('http://localhost:8081/api/courses')
  .then((response) => response.json())
  .then((courses) => {
    renderCourses(courses, table)
  });

function renderCourses(courses, table) {
  const columns = [
    { propName: 'courseName', heading: 'Course Name' },
    { propName: 'dept', heading: 'Department' },
    { propName: 'courseNum', heading: 'Course No.' }
  ];

  const thead = findOrCreateElement('thead', table)
  thead.innerHTML = ""
  const theadTr = thead.insertRow()
  columns.forEach(column => {
    const cell = theadTr.insertCell()
    cell.innerHTML = column.heading
  })
  theadTr.insertCell() // empty cell for details column

  const tbody = findOrCreateElement('tbody', table)
  tbody.innerHTML = ''
  courses.forEach(course => {
    const row = tbody.insertRow()
    columns.forEach(column => {
      const cell = row.insertCell()
      const propName = column.propName
      cell.innerHTML = course[propName]
    })
    
    const detailsCell = row.insertCell()
    detailsCell.innerHTML = `<a href='details.html?courseId=${course.id}'>Details</a>`
  })
}

function findOrCreateElement(selector, root = document) {
  let element = root.querySelector(selector)
  if (element) {return element;}

  element = document.createElement(selector);
  root.appendChild(element)
  return element
}
