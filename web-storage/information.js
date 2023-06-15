const welcomeHeading = document.querySelector('h1');
const textEl = document.querySelector('.text-element');

const name = localStorage.getItem('name');
const role = localStorage.getItem('role');

const welcomeMessage = `Welcome ${role} ${name}`;
welcomeHeading.innerHTML = welcomeMessage;

textEl.classList.add(role);
