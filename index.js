const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function initializeProfiles() {
  // const intern1 = new Intern(
  //   'Carlos',
  //   0, // We can either enter 0 or any other number, regardless, a random number will be added (from parent class)
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
  //   0,
  //   'Niv@hotmail.ca',
  //   'Engineer',
  //   'Nimran'
  // );
  // console.log(engineer1);
  // engineer1.getEmail();
  // engineer1.getGithub();
  // engineer1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const manager1 = new Manager(
  //   'Grace',
  //   0,
  //   'grace@gmail.ca',
  //   'Manager',
  //   124
  // );
  // manager1.getId();
  // manager1.getOfficeNumber();
  // manager1.getRole();
  // // ------- ------- ------- ------- ------- ------- ------- ------- -------
  // const employee = new Employee();
  // employee.getRole();
}

initializeProfiles();
