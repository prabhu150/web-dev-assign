employeeList = [
  ["Sally Smith", "Quality Assurance", 3423],
  ["Mark Martin", "VP Sales", 3346],
  ["John Johnson", "Marketing", 3232]
];

function $(elementId) {
  return document.getElementById(elementId);
}

function updateTable() {
  var table = $("EmployeeList");
  console.log(`Loading ${employeeList.length} employees`);

  $("numEmployees").innerHTML = `Showing  ${employeeList.length} employees`;

  table.innerHTML = `<tr>
<th>Name</th>
<th>Title</th>
<th>Extension</th>
<th></th>
</tr>`;

  for (let employee of employeeList)
    table.innerHTML += `<tr><td>${employee[0]}</td><td>${employee[1]}</td><td>${
      employee[2]
    }</td>
<td><button id=\"emp${employee[2]}\">Delete</button></td></tr>`;
}


function removeEmployee(employeeId) {}

function clearErrors() {
  $("name-error").setAttribute("class", "hidden");
  $("title-error").setAttribute("class", "hidden");
  $("extension-error").setAttribute("class", "hidden");
}

function showError(element) {
  element.classList.remove("hidden");
}

function validateFormAndAddEmployee() {
  var isValid = true;
  clearErrors();

  let name = $("name").value,
    title = $("title").value,
    extension = $("extension").value;

  console.log(`Values ${name} ${title} ${extension}`);

  if (name == "") {
    showError($("name-error"));
    isValid = false;
  }

  if (title == "") {
    showError($("title-error"));
    isValid = false;
  }

  if (extension == "" || Number.isNaN(parseInt(extension))) {
    showError($("extension-error"));
    isValid = false;
  }

  if (isValid == true) {
    employeeList[employeeList.length] = [
      name,
      title,
      parseInt(extension)
    ];
    updateTable();
    $("employee-form").reset()
    $("name").focus();
  }
}

window.addEventListener("load", () => {
  updateTable();
  $("name").focus();
  $("employee-form").addEventListener("submit", this.validateFormAndAddEmployee);
});
