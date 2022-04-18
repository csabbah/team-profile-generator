const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function generateId() {
  return Math.ceil(Math.random(0) * 10000);
}
function initializeProfiles() {
  // const intern1 = new Intern(
  //   'Carlos',
  //   generateId(),
  //   'csabbah@ryerson.ca',
  //   'Intern', // < If this is blank, use 'Employee' as the default role
  //   'Ryerson'
  // );
  // console.log(intern1);
  // intern1.getName();
  // intern1.getSchool(); // This executes the intern method that simply console logs the school
  // intern1.getRole(); // This executes the intern method that simply console logs the school
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const engineer1 = new Engineer(
  //   'Niv',
  //   generateId(),
  //   'Niv@hotmail.ca',
  //   'Engineer', // < If this is blank, use 'Employee' as the default role
  //   'Nimran'
  // );
  // console.log(engineer1);
  // engineer1.getEmail();
  // engineer1.getGithub();
  // engineer1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const manager1 = new Manager(
  //   'Grace',
  //   generateId(),
  //   'grace@gmail.ca',
  //   'Manager', // < If this is blank, use 'Employee' as the default role
  //   '124'
  // );
  // manager1.getId();
  // manager1.getOfficeNumber();
  // manager1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const employee = new Employee();
  // employee.getRole();
}

initializeProfiles();
