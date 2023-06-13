const urlParams = new URLSearchParams(location.search);
const courseId = urlParams.get('courseId');
const courseEl = document.getElementById('courseDetails')

fetch(`http://localhost:8081/api/courses/${courseId}`)
  .then((response) => response.json())
  .then((course) => {
    renderCourse(course, courseDetails);
  });

function renderCourse(course, el) {
  const properties = [
    { propName: 'id', display: 'ID' },
    { propName: 'dept', display: 'Dept' },
    { propName: 'courseNum', display: 'Course No.' },
    { propName: 'instructor', display: 'Instructor' },
    { propName: 'startDate', display: 'Starts'},
    { propName: 'numDays', display: 'Days'}
  ]

  el.innerHTML = '';
  const title = document.createElement('h1');
  title.innerHTML = course.courseName;
  el.append(title);

  properties.forEach(prop => {
    const propName = prop.propName
    const displayName = prop.display
    const p = document.createElement('p')
    p.innerHTML = `${displayName}: `
    const span = document.createElement('strong')
    span.innerHTML = course[propName]
    span.classList.add('strong')
    p.appendChild(span)
    el.appendChild(p)
  })
 
}
