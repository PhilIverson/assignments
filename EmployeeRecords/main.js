var employee = [];

function Employees (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.hour = "Full Time"
}
   
function printEmloyeeForm(){
    console.log(this)
}

Employees.prototype.print = printEmloyeeForm;

var newEmployee1 = new Employees('john', 'accountant', 3000);
var newEmployee2 = new Employees('jim', 'accountant', 4000);
var newEmployee3 = new Employees('carrol', 'accountant', 5000);

newEmployee1.print();
newEmployee2.print();
newEmployee3.print();

employee.push(newEmployee1, newEmployee2, newEmployee3);

console.log(employee)

