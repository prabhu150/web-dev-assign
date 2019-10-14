/* 
Starting off with 5 employees. This array will persist data 
throughout app lifecycle
*/
var employeeList = [
  ["Sally Smith", "Quality Assurance", 3423],
  ["Mark Martin", "VP Sales", 3346],
  ["John Johnson", "Marketing", 3232],
  ["Michael Douglas", "Security", 4431],
  ["Sam Stone", "Staff", 4211]
];

const header = `<tr>
<th>Name</th>
<th>Title</th>
<th>Extension</th>
<th></th>
</tr>`;

/* This array will store the list of 
delete buttons alongside their event listeners.
Each button will belong to the same class but have a
unique id identical to the employee they point to.
*/
var deleteButtons = [];

function $(elementId) {
  return document.getElementById(elementId);
}

/* This function loads the UI with all the elements
found in the array. This will be called at the very beginning and 
whenever an employee is deleted.
*/
function populateTable() {
  console.log(`Loading ${employeeList.length} employees`);
  var table = $("employeeList");

  updateCount();

  table.innerHTML = header;

  for (let employee of employeeList) {
    table.innerHTML += `<tr><td>${employee[0]}</td><td>${employee[1]}</td><td>${
      employee[2]
    }</td>
<td><button class= "deleteEmployee" id=\"${
      employee[2]
    }\">Delete</button></td></tr>`;
  }
  updateButtonListeners();
}

/* 
This function will append the latest employee to the end of the list and simply 
update the last row of the table and update the buttons array.
*/
function addEmployee(employee) {
  var table = $("employeeList");
  employeeList[employeeList.length] = employee;
  updateCount();
  table.innerHTML += `<tr><td>${employee[0]}</td><td>${employee[1]}</td><td>${
    employee[2]
  }</td>
  <td><button class= "deleteEmployee" id=\"${
    employee[2]
  }\">Delete</button></td></tr>`;

  updateButtonListeners();
}

// This function reflects realtime count of employees in system.
function updateCount() {
  $("numEmployees").innerHTML = `Showing  ${employeeList.length} employees`;
}

/* This function simply attaches event listeners to each button and makes them point to
 their employee object within the array */
function updateButtonListeners() {
  deleteButtons = document.getElementsByClassName("deleteEmployee");

  for (let button of deleteButtons) {
    button.addEventListener("click", item => {
      console.log("Removing employee with id", item.target.id);
      this.removeEmployee(item.target.id);
    });
  }
}

// Removes an employee and repopulates the table
function removeEmployee(employeeId) {
  employeeList = employeeList.filter(value => {
    return value[2] != employeeId;
  });
  populateTable();
}

// Hides the error messages
function clearErrors() {
  $("name-error").setAttribute("class", "hidden");
  $("title-error").setAttribute("class", "hidden");
  $("extension-error").setAttribute("class", "hidden");
}

function showError(element) {
  element.classList.remove("hidden");
}
/* Does form validation and adds an employee to system if user input is valid.
 */
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
    var newEmployee = [name, title, parseInt(extension)];
    addEmployee(newEmployee);
    $("employee-form").reset();
    $("name").focus();
  }
}
// Utility function for quick testing of app.
function debugMode() {
  $("name").value = "sample";
  $("title").value = "marketing";
  $("extension").value = 12345;
}

window.addEventListener("load", () => {
  populateTable();
  $("name").focus();

  //   debugMode() Uncomment to make testing easier

  $("employee-form").addEventListener(
    "submit",
    this.validateFormAndAddEmployee
  );
});
