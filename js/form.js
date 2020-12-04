const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function() {
            output.textContent = salary.value;
        });

const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = /^[A-Z][a-z]{2,}$/;
    if(nameRegex.test(text.value)) {
        textError.textContent = "";
        document.getElementById("submitButton").disabled = false;

    }
    else {
         textError.textContent = "Name is incorrect";
         document.getElementById("submitButton").disabled = true;

    }
});

document.getElementById("submitButton").onclick = function() {
    let employee = new EmployeePayrollData();
    employee.name = document.getElementById("name").value;
    employee.picture = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department =document.querySelector('input[name = department]:checked').value;
    employee.salary = document.getElementById("salary").value;
    employee.notes = document.getElementById("notes").value;
    employee.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
    console.log(employee.toString());
};

document.getElementById("reset").onclick = function() {
    document.getElementById("emp-form").reset();
}