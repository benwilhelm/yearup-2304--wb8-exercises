const form = document.querySelector('form');
const submitBtn = document.querySelector('[type=submit]');
const nameInput = document.getElementById('name');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const role = document.querySelector('input[name=role]:checked').value;

  localStorage.setItem('name', name);
  localStorage.setItem('role', role);

  location.href = 'information.html';
});
