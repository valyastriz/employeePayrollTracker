// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];
function collectEmployees() {
//create empty array for entries


// Collect employee data

  //while loop to prompt for input continuously
while(true) {
  //create variables for the inputs
  let firstName;
  let lastName;
  let inputSalary;
  // TODO: Get user input to create and return an array of employee objects
  //prompt for first name and break out if cancel
  firstName = window.prompt('Enter Employee First Name:');
  if (firstName === null) {
    break;
  }
  //prompt for last name and break out if cancel
  lastName = window.prompt('Enter Employee Last Name:');
  if (lastName === null) {
    break;
  }
  //prompt for salary but need to convert from string to number
  inputSalary = window.prompt('Enter Employee Salary:');
  //checking if cancelled of non number entered and assigning value to zero
  let salary;
  if (inputSalary === null || isNaN(inputSalary)) {
    salary = 0;
  }
  //maybe convert to a number from a string
  else {
    salary = parseFloat(inputSalary);
  }
  //add the variables into array for objects to store the employee info
  employees.push({
    firstName : firstName,
    lastName : lastName,
    salary : salary
  })  
}
  // pass back the value in the array
return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary;
  //calculate the total
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });
  //calculate the aveage
  const averageSalary = totalSalary / employeesArray.length;
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
