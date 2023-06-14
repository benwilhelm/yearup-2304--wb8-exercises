const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const courseData = getCourseFromForm(form);
  const isValid = validateCourse(courseData);

  if (!isValid) {
    alert('all fields are required');
    return;
  }

  const url = `http://localhost:8081/api/courses`;
  const options = {
    method: 'POST',
    body: JSON.stringify(courseData),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((newCourse) => {
      window.location.href = `./details.html?courseId=${newCourse.id}`;
    });
});

function getCourseFromForm(form) {
  return {
    dept: form.querySelector('#department').value,
    courseNum: form.querySelector('#courseNumber').value,
    courseName: form.querySelector('#courseName').value,
    instructor: form.querySelector('#instructor').value,
    startDate: form.querySelector('#startDate').value,
    numDays: +form.querySelector('#duration').value
  };
}

function validateCourse(courseData) {
  let valid = true;
  const values = Object.values(courseData);
  values.forEach((value) => {
    if (!value) {
      valid = false;
    }
  });
  return valid;
}
