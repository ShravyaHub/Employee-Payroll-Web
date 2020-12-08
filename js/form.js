let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
      output.textContent = salary.value;
    });
    
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function() {
      if(name.value.length == 0) {
        textError.textContent = "";
        document.getElementById("submitButton").disabled = false;
        return;
      }

      try {
        (new EmployeePayrollData()).name = name.value;
        textError.textContent = "";
        document.getElementById("submitButton").disabled = false;
      } catch(exception) {
        textError.textContent = exception;
        document.getElementById("submitButton").disabled = true;
      }
    });
    
    startDate.addEventListener("input", async function() {
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const dateError = document.querySelector(".date-error");

        try {
            (new EmployeePayrollData()).startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            dateError.textContent = "";
            document.getElementById("submitButton").disabled = false;
        } catch(exception) {
            dateError.textContent = exception;
            document.getElementById("submitButton").disabled = true;
      }
    });
    checkForUpdate();
});

const getSelectedValues = (property) => {
  let allItems = document.querySelectorAll(property);
  let setItems = [];
  allItems.forEach(item => {
    if(item.checked) setItems.push(item.value);
  });
  return setItems;
};
    
function save() {
    let employee = new EmployeePayrollData();
    employee.name= document.getElementById("name").value;
    employee.picture = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department =getSelectedValues('[name=department]');
    employee.salary = document.getElementById("salary").value;
    employee.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value) - 1, parseInt(document.getElementById("day").value));
    employee.note = document.getElementById("notes").value;
    createAndUpdateStorage(employee);
}

function createAndUpdateStorage(employee) {
    let employeeList = JSON.parse(localStorage.getItem("EmployeeList"));
    if(employeeList != undefined) {
        employeeList.push(employee);
    } else {
        employeeList = [employee];
    }
    localStorage.setItem("EmployeeList", JSON.stringify(employeeList));
}

function resetForm() {
    document.getElementById("emp-form").reset();
}

// const checkForUpdate = () => {
//   const employeePayrollJSON = localStorage.getItem("editEmp");
//   isUpdate = employeePayrollJSON ? true : false;
//   if(!isUpdate) return;
//   employeePayrollObj = JSON.
// }

// const setForm = () => {
//   setValue('#name', employeePayrollObj._name);
//   setSelectedValues('')
// }