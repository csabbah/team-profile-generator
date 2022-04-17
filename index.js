const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function initializeProfiles() {
  const intern1 = (this.intern = new Intern(
    'Carlos',
    Math.ceil(Math.random(0) * 10000),
    'csabbah@ryerson.ca',
    'Intern', // < If this is blank, use 'Employee' as the default role
    'Ryerson'
  ));
  intern1.getSchool(); // This executes the intern method that simply console logs the school
  intern1.getRole(); // This executes the intern method that simply console logs the school
  // ------- ------- ------- ------- ------- ------- ------- ------- -------
  const engineer1 = (this.engineer = new Engineer(
    'Niv',
    Math.ceil(Math.random(0) * 10000),
    'Niv@hotmail.ca',
    'Engineer', // < If this is blank, use 'Employee' as the default role
    'Nimran'
  ));
  engineer1.getGithub();
  engineer1.getRole();
  // ------- ------- ------- ------- ------- ------- ------- ------- -------
  const manager1 = (this.manager = new Manager(
    'Grace',
    Math.ceil(Math.random(0) * 10000),
    'grace@gmail.ca',
    'Manager', // < If this is blank, use 'Employee' as the default role
    '124'
  ));
  manager1.getOfficeNumber();
  manager1.getRole();
  // ------- ------- ------- ------- ------- ------- ------- ------- -------
  const employee = (this.employee = new Employee());
  employee.getRole();
}

initializeProfiles();
