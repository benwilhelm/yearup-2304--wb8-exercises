const table = document.getElementById('usersTable');

const headers = ['username', 'id', 'name', 'email', 'phone', 'website'];

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    renderHeaders(table, headers);
    renderRows(table, users, headers);
  });

// // ----

function renderHeaders(table, headers) {
  const thead = findOrCreateThead(table);
  thead.innerHtml = '';

  const tr = thead.insertRow();
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.innerHTML = header;
    tr.appendChild(th);
  });
}

function renderRows(table, rows, columns) {
  const tbody = findOrCreateTbody(table);
  rows.forEach((row) => {
    const tr = tbody.insertRow();
    columns.forEach((col) => {
      const td = tr.insertCell();
      td.innerHTML = row[col];
    });
  });
}

function findOrCreateThead(table) {
  let thead = table.querySelector('thead');
  if (thead) return thead;

  thead = document.createElement('thead');
  table.appendChild(thead);
  return thead;
}

function findOrCreateTbody(table) {
  let tbody = table.querySelector('tbody');
  if (tbody) return tbody;

  tbody = document.createElement('tbody');
  table.appendChild(tbody);
  return tbody;
}
